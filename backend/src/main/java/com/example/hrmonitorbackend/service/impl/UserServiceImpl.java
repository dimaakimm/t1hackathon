package com.example.hrmonitorbackend.service.impl;

import com.example.hrmonitorbackend.dto.candidate.CandidateDto;
import com.example.hrmonitorbackend.dto.candidate.CandidateDtoIn;
import com.example.hrmonitorbackend.dto.graph.GraphUserDto;
import com.example.hrmonitorbackend.dto.user.UserDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoShow;
import com.example.hrmonitorbackend.mapper.CandidateMapper;
import com.example.hrmonitorbackend.mapper.UserMapper;
import com.example.hrmonitorbackend.mapper.VacancyMapper;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.Status;
import com.example.hrmonitorbackend.model.User;
import com.example.hrmonitorbackend.repository.UserRepository;
import com.example.hrmonitorbackend.service.CandidateService;
import com.example.hrmonitorbackend.service.StatusService;
import com.example.hrmonitorbackend.service.UserService;
import com.example.hrmonitorbackend.service.VacancyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final CandidateService candidateService;
    private final VacancyService vacancyService;
    private final StatusService statusService;
    private final VacancyMapper vacancyMapper;
    private final CandidateMapper candidateMapper;
    private final UserMapper userMapper;

    @Override
    public CandidateDto createCandidate(CandidateDtoIn candidateDtoIn, Long vacancyId) {
        //TODO check for exist
        var candidate = candidateMapper.convertFromDtoToModel(candidateDtoIn);
        var vacancy = vacancyService.findVacancyById(vacancyId);
        candidate.setVacancy(vacancy);
        candidate = candidateService.createCandidate(candidate);
        statusService.saveStatus(createStatusFromCandidate(candidate));
        return candidateMapper.convertFromModelToDto(candidate);
    }


    @Override
    public VacancyDtoShow findVacancyByIdWithCandidates(Long id) {
        var vacancy = vacancyService.findVacancyById(id);
        var candidates = candidateService.findCandidatesByVacancyId(id);
        return vacancyMapper.convertFromModelToVacancyDtoShow(vacancy, candidates);
    }

    @Override
    public UserDto showUserWithVacancies(Long userId) {
        var user = findUserById(userId);
        return userMapper.convertFromModelToUserDto(user, vacancyService.findVacancyByUserId(userId));
    }
    @Override
    public void changeUserStatus(Long userId) {
        User user = findUserById(userId);
        user.setActive(!user.getActive());
        userRepository.save(user);
    }


    @Override
    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public void changeCandidateStatus(Long candidateId, String status) {
        candidateService.changeCandidateStatus(candidateId, status);
        var candidate = candidateService.findById(candidateId);
        var statusModel = new Status();
        statusModel.setCandidate(candidate);
        statusModel.setName(status);
        statusModel.setDate(Date.valueOf(LocalDate.now()));
        statusService.saveStatus(statusModel);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    private Status createStatusFromCandidate(Candidate candidate) {
        var status = new Status();
        status.setName(candidate.getStatus());
        status.setCandidate(candidate);
        status.setDate(Date.valueOf(LocalDate.now()));
        return status;
    }
}
