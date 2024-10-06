package com.example.hrmonitorbackend.service.impl;

import com.example.hrmonitorbackend.dto.graph.GraphAdminFilter;
import com.example.hrmonitorbackend.dto.graph.GraphUserFilter;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoShow;
import com.example.hrmonitorbackend.mapper.VacancyMapper;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.Vacancy;
import com.example.hrmonitorbackend.repository.VacancyRepository;
import com.example.hrmonitorbackend.service.CandidateService;
import com.example.hrmonitorbackend.service.VacancyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VacancyServiceImpl implements VacancyService {
    private final VacancyRepository vacancyRepository;
    @Override
    public Vacancy findVacancyById(Long id) {
        return vacancyRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public Vacancy createVacancy(Vacancy vacancy) {
        return vacancyRepository.save(vacancy);
    }

    @Override
    public List<Vacancy> findVacancyByUserId(Long userId) {
        return vacancyRepository.findVacanciesByUserId(userId);
    }

    @Override
    public List<Vacancy> findVacancyByUserIdFilter(GraphUserFilter filter) {
        return vacancyRepository.findVacanciesByUserIdFilter(filter.getUserId(),
                filter.getStartDate(), filter.getEndDate(), filter.getDirection());
    }

    @Override
    public List<Vacancy> findVacancyByAdminFilter(GraphAdminFilter filter) {
        return vacancyRepository.findVacanciesByAdminFilter(filter.getStartDate(), filter.getEndDate(),
                filter.getDirection());
    }

    @Override
    public List<Vacancy> findAll() {
        return vacancyRepository.findAll();
    }

}
