package com.example.hrmonitorbackend.service.impl;

import com.example.hrmonitorbackend.constants.CandidateStatus;
import com.example.hrmonitorbackend.constants.HrDirection;
import com.example.hrmonitorbackend.dto.graph.GraphAdminDto;
import com.example.hrmonitorbackend.dto.graph.GraphAdminFilter;
import com.example.hrmonitorbackend.dto.graph.GraphUserDto;
import com.example.hrmonitorbackend.dto.graph.GraphUserFilter;
import com.example.hrmonitorbackend.dto.graph.admin.BarChartRecruiterMedianDto;
import com.example.hrmonitorbackend.dto.graph.admin.BarChartRecruiterMedianElement;
import com.example.hrmonitorbackend.dto.graph.chartVacancy.BarChartVacancyDateDto;
import com.example.hrmonitorbackend.dto.graph.chartVacancy.BarChartVacancyDateElement;
import com.example.hrmonitorbackend.dto.graph.dynamic.DynamicDtoPeriod;
import com.example.hrmonitorbackend.dto.graph.dynamic.DynamicDtoStatusId;
import com.example.hrmonitorbackend.dto.graph.dynamic.DynamicGraphDto;
import com.example.hrmonitorbackend.dto.graph.funnel.FunnelGraphDto;
import com.example.hrmonitorbackend.dto.graph.funnel.FunnelGraphElement;
import com.example.hrmonitorbackend.dto.graph.summary.SummaryChartDto;
import com.example.hrmonitorbackend.dto.graph.summary.SummaryChartElement;
import com.example.hrmonitorbackend.mapper.GraphMapper;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.User;
import com.example.hrmonitorbackend.model.Vacancy;
import com.example.hrmonitorbackend.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.*;

@Service
@RequiredArgsConstructor
public class GraphServiceImpl implements GraphService {
    private final VacancyService vacancyService;
    private final CandidateService candidateService;
    private final StatusService statusService;
    private final UserService userService;
    private final GraphMapper graphMapper;

    private Map<Vacancy, List<Candidate>> createVacanciesWithCandidatesMap(List<Vacancy> vacancies, GraphAdminFilter filter) {
        var vacanciesWithCandidates = new HashMap<Vacancy, List<Candidate>>();
        for (var vacancy : vacancies) {
            if (filterVacancy(vacancy, filter)) {
                vacanciesWithCandidates.put(vacancy, candidateService.findCandidatesByVacancyId(vacancy.getId()));
            }
        }
        return vacanciesWithCandidates;
    }

    private boolean filterVacancy(Vacancy vacancy, GraphAdminFilter filter) {
        if (filter.getStartDate() == null) {
            if (filter.getDirection().equals("all") || filter.getDirection().equals(vacancy.getDirection())) {
                if (filter.getClosedPeriod() == null) {
                    return true;
                }
                if (!vacancy.getIsOpen()) {
                    int vacancyStartDays = (int) vacancy.getStartDate().getTime() / (60*60*24*1000);
                    int vacancyFinishDays = (int) vacancy.getFinishDate().getTime() / (60*60*24*1000);
                    return vacancyFinishDays - vacancyStartDays == filter.getClosedPeriod();
                }
            }
        }
        else {
            int vacancyStartDays = (int) vacancy.getStartDate().getTime() / (60*60*24*1000);
            int filterStartDays = (int) filter.getStartDate().getTime() / (60*60*24*1000);
            int filterFinishDays = (int) filter.getEndDate().getTime() / (60*60*24*1000);
            if (vacancyStartDays >= filterStartDays && vacancyStartDays <= filterFinishDays) {
                if (filter.getDirection().equals("all") || filter.getDirection().equals(vacancy.getDirection())) {
                    if (filter.getClosedPeriod() == null) {
                        return true;
                    }
                    if (!vacancy.getIsOpen()) {
                        int vacancyFinishDays = (int) vacancy.getFinishDate().getTime() / (60*60*24*1000);
                        return vacancyFinishDays - vacancyStartDays == filter.getClosedPeriod();
                    }
                }
            }
        }
       return false;
    }

    @Override
    public GraphUserDto getUserGraphsByFilter(GraphUserFilter filter) {
        List<Vacancy> vacancies;
        if (filter.getUserId() == null) {
            vacancies = vacancyService.findAll();
        }
        else {
            vacancies = vacancyService.findVacancyByUserId(filter.getUserId());
        }
        var vacanciesWithCandidates = createVacanciesWithCandidatesMap(vacancies, filter);
        var funnelGraphDto = getFunnelGraph(vacanciesWithCandidates);
        var summaryChartDto = getSummaryChart(vacanciesWithCandidates);
        var barChartVacancyDateDto = getBarChartVacancyDate(vacanciesWithCandidates);
        var dynamicGraphDto = getDynamicGraphDto(vacanciesWithCandidates);
        return new GraphUserDto(summaryChartDto, funnelGraphDto, barChartVacancyDateDto, dynamicGraphDto);
    }

    private Map<User, Map<Vacancy, List<Candidate>>> createAllUsersInfo(List<User> users,
                                                                        GraphUserFilter graphUserFilter) {
        var usersInfo = new HashMap<User, Map<Vacancy, List<Candidate>>>();
        for (var user : users) {
            var vacancies = vacancyService.findVacancyByUserId(user.getId());
            var vacanciesWithCandidates = createVacanciesWithCandidatesMap(vacancies, graphUserFilter);
            usersInfo.put(user, vacanciesWithCandidates);
        }
        return usersInfo;
    }

    @Override
    public GraphAdminDto getAdminGraphsByFilter(GraphUserFilter filter) {
        Map<User, Map<Vacancy, List<Candidate>>> usersAllInfo;
        if (filter.getUserId() == null) {
            usersAllInfo = createAllUsersInfo(userService.findAll(), filter);
        }
        else {
            usersAllInfo = createAllUsersInfo(Collections.singletonList(userService.findUserById(filter.getUserId())), filter);
        }
        return graphMapper.convertFromUserToAdminDto(getUserGraphsByFilter(filter), createBarChartRecruiterMedianDto(usersAllInfo));
    }

    private BarChartRecruiterMedianDto createBarChartRecruiterMedianDto(Map<User, Map<Vacancy, List<Candidate>>> usersAllInfo) {
        var barChartRecruiterMedianDto = new BarChartRecruiterMedianDto();
        for (var user : usersAllInfo.keySet()) {
            var userId = user.getId();
            var userName = user.getName();
            var vacanciesWithCandidates = usersAllInfo.get(user);
            double mediationTerm = 0;
            double countClosedVacancies = 0;
            for (var vacancy : vacanciesWithCandidates.keySet()) {
                if (vacancy.getIsOpen()) {
                    continue;
                }
                countClosedVacancies += 1;
                mediationTerm += ((double) vacancy.getFinishDate().getTime() / (60*60*24*1000) - (double) vacancy.getStartDate().getTime() / (60*60*24*1000));
            }
            if (countClosedVacancies != 0) {
                mediationTerm = mediationTerm / countClosedVacancies;
            }
            barChartRecruiterMedianDto.addElement(new BarChartRecruiterMedianElement(userId, userName, mediationTerm));
        }
        return barChartRecruiterMedianDto;
    }


    private FunnelGraphDto getFunnelGraph(Map<Vacancy, List<Candidate>> vacanciesWithCandidates) {
        //завтра по времени вставить стратегию
        var funnelGraphDto = new FunnelGraphDto();
        int allCandidates = 0;
        for (var vacancy : vacanciesWithCandidates.keySet()) {
            allCandidates += vacanciesWithCandidates.get(vacancy).size();
        }
        funnelGraphDto.addFunnelGraphElement(new FunnelGraphElement(CandidateStatus.ALL, CandidateStatus.ALL, allCandidates));

        for (var statusId : CandidateStatus.statusTypes.keySet()) {
            if (statusId == 5) {
                continue;
            }
            int countCandidates = 0;
            for (var vacancy : vacanciesWithCandidates.keySet()) {
                countCandidates += (int) vacanciesWithCandidates.get(vacancy).stream()
                        .filter(candidate -> candidate.getStatus().equals(CandidateStatus.statusTypes.get(statusId)))
                        .count();
            }

            funnelGraphDto.addFunnelGraphElement(new FunnelGraphElement(CandidateStatus.statusTypes.get(statusId), CandidateStatus.statusTypes.get(statusId), countCandidates));


        }
        return funnelGraphDto;
    }

    private SummaryChartDto getSummaryChart(Map<Vacancy, List<Candidate>> vacanciesWithCandidates) {
        var summaryChartDto = new SummaryChartDto();
        for (var directionId : HrDirection.directionTypes.keySet()) {
            var direction = HrDirection.directionTypes.get(directionId);
            int numberAccepted = 0;
            double mediationTerm = 0;
            for (var vacancy: vacanciesWithCandidates.keySet()) {
                if (!vacancy.getDirection().equals(direction)) {
                    continue;
                }
                var candidates = vacanciesWithCandidates.get(vacancy);
                for (var candidate : candidates) {
                    if (candidate.getStatus().equals(CandidateStatus.ACCEPTED) && !vacancy.getIsOpen()) {
                        numberAccepted += 1;
                        mediationTerm += ((double) vacancy.getFinishDate().getTime() / (60*60*24*1000) - (double) vacancy.getStartDate().getTime() / (60*60*24*1000));
                    }
                }
            }
            if (numberAccepted > 0) {
                summaryChartDto.addSummaryChartElement(new SummaryChartElement(direction, numberAccepted, mediationTerm / numberAccepted));
            }
        }
        return summaryChartDto;
    }

    private BarChartVacancyDateDto getBarChartVacancyDate(Map<Vacancy, List<Candidate>> vacanciesWithCandidates) {
        var barChartVacancyDateDto = new BarChartVacancyDateDto();
        for (var vacancy : vacanciesWithCandidates.keySet()) {
            int numberAccepted = (int) vacanciesWithCandidates.get(vacancy).stream()
                    .filter(candidate -> candidate.getStatus().equals(CandidateStatus.ACCEPTED))
                    .count();
            if (!vacancy.getIsOpen() && numberAccepted > 0) {
                int closeDays = (int) (vacancy.getFinishDate().getTime() / (60*60*24*1000) - vacancy.getStartDate().getTime() / (60*60*24*1000));
                barChartVacancyDateDto.addBarChartVacancyElement(new BarChartVacancyDateElement(closeDays, numberAccepted));
            }
        }
        return barChartVacancyDateDto;
    }

    private DynamicGraphDto getDynamicGraphDto(Map<Vacancy, List<Candidate>> vacanciesWithCandidates) {
        var dynamicGraphDto = new DynamicGraphDto();
        var periods = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
        for (var period : periods) {
            var dynamicPeriods = new DynamicDtoPeriod();
            dynamicPeriods.setPeriod(period);
            for (var statusId : CandidateStatus.statusTypes.keySet()) {
                var status = CandidateStatus.statusTypes.get(statusId);
                var dynamicDtoStatus = new DynamicDtoStatusId();
                int countCandidates = 0;
                for (var vacancy : vacanciesWithCandidates.keySet()) {
                    for (var candidate : vacanciesWithCandidates.get(vacancy)) {
                        var statuses = statusService.finStatusByCandidateId(candidate.getId());
                        for (var canditateStatus : statuses) {
                            if (canditateStatus.getName().equals(status)) {
                                if (statusId.equals(0)) {
                                    var needStatus = statuses.stream()
                                            .filter(statusNeed -> statusNeed.getName().equals(CandidateStatus.INTERVIEW_1))
                                            .findFirst()
                                            .orElse(null);
                                    if (needStatus != null
                                            && (needStatus.getDate().getTime() - canditateStatus.getDate().getTime()) / (60 * 60 * 24 * 1000) <= period) {
                                        countCandidates += 1;
                                    }
                                }

                                else if (statusId.equals(1)) {
                                    var needStatus = statuses.stream()
                                            .filter(statusNeed -> statusNeed.getName().equals(CandidateStatus.INTERVIEW_2))
                                            .findFirst()
                                            .orElse(null);
                                    if (needStatus != null
                                            && (needStatus.getDate().getTime() - canditateStatus.getDate().getTime()) / (60 * 60 * 24 * 1000) <= period) {
                                        countCandidates += 1;
                                    }
                                }

                                else if (statusId.equals(2)) {
                                    var needStatus = statuses.stream()
                                            .filter(statusNeed -> statusNeed.getName().equals(CandidateStatus.OFFER))
                                            .findFirst()
                                            .orElse(null);
                                    if (needStatus != null
                                            && (needStatus.getDate().getTime() - canditateStatus.getDate().getTime()) / (60 * 60 * 24 * 1000) <= period) {
                                        countCandidates += 1;
                                    }
                                }
                                else if (statusId.equals(3)) {
                                    var needStatus = statuses.stream()
                                            .filter(statusNeed -> statusNeed.getName().equals(CandidateStatus.ACCEPTED))
                                            .findFirst()
                                            .orElse(null);
                                    if (needStatus != null
                                            && (needStatus.getDate().getTime() - canditateStatus.getDate().getTime()) / (60 * 60 * 24 * 1000) <= period) {
                                        countCandidates += 1;
                                    }
                                }
                            }
                        }
                    }
                }
                dynamicDtoStatus.setStatusId(statusId);
                dynamicDtoStatus.setCountCandidates(countCandidates);
                dynamicPeriods.addDynamicStatusId(dynamicDtoStatus);
            }
            dynamicGraphDto.addDynamicDtoPeriod(dynamicPeriods);
        }
        return dynamicGraphDto;
    }
}
