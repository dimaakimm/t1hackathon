package com.example.hrmonitorbackend.service;

import com.example.hrmonitorbackend.dto.candidate.CandidateDto;
import com.example.hrmonitorbackend.dto.candidate.CandidateDtoIn;
import com.example.hrmonitorbackend.dto.graph.GraphUserDto;
import com.example.hrmonitorbackend.dto.user.UserDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoShow;
import com.example.hrmonitorbackend.model.User;

import java.util.List;

public interface UserService {
    CandidateDto createCandidate(CandidateDtoIn candidate, Long vacancyId);

    VacancyDtoShow findVacancyByIdWithCandidates(Long id);

    UserDto showUserWithVacancies(Long userId);

    User findUserById(Long id);

    void changeCandidateStatus(Long candidateId, String status);

    List<User> findAll();

    void changeUserStatus(Long userId);

}
