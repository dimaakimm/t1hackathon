package com.example.hrmonitorbackend.service;

import com.example.hrmonitorbackend.dto.user.AllUserDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoIn;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.User;
import com.example.hrmonitorbackend.model.Vacancy;

public interface AdminService {
    VacancyDto createVacancy(VacancyDtoIn vacancy, Long userId);

    void changeUserStatus(Long userId);

    AllUserDto showAllUsers();
}
