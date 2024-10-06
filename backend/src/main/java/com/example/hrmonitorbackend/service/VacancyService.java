package com.example.hrmonitorbackend.service;

import com.example.hrmonitorbackend.dto.graph.GraphAdminFilter;
import com.example.hrmonitorbackend.dto.graph.GraphUserFilter;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoShow;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.Vacancy;

import java.util.List;

public interface VacancyService {
    Vacancy findVacancyById(Long id);

    Vacancy createVacancy(Vacancy vacancy);

    List<Vacancy> findVacancyByUserId(Long userId);

    List<Vacancy> findVacancyByUserIdFilter(GraphUserFilter filter);

    List<Vacancy> findVacancyByAdminFilter(GraphAdminFilter filter);

    List<Vacancy> findAll();
}
