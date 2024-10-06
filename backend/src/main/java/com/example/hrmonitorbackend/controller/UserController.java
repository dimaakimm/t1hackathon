package com.example.hrmonitorbackend.controller;

import com.example.hrmonitorbackend.dto.candidate.CandidateDto;
import com.example.hrmonitorbackend.dto.candidate.CandidateDtoIn;
import com.example.hrmonitorbackend.dto.candidate.CandidateMoveDtoIn;
import com.example.hrmonitorbackend.dto.user.UserDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoShow;
import com.example.hrmonitorbackend.mapper.CandidateMapper;
import com.example.hrmonitorbackend.mapper.VacancyMapper;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.service.CandidateService;
import com.example.hrmonitorbackend.service.UserService;
import com.example.hrmonitorbackend.service.VacancyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/candidate/create")
    public CandidateDto createCandidate(@RequestBody CandidateDtoIn candidateDtoIn,
                                        Long vacancyId) {
        return userService.createCandidate(candidateDtoIn, vacancyId);
    }

    @PutMapping("/status/change/{candidateId}")
    public void changeCandidateStatus(@PathVariable("candidateId") Long candidateId,
                                      @RequestBody CandidateMoveDtoIn candidateMoveDtoIn) {
        userService.changeCandidateStatus(candidateId, candidateMoveDtoIn.getStatus());
    }

    @GetMapping("/vacancy/show/{vacancyId}")
    public VacancyDtoShow showVacancy(@PathVariable("vacancyId") Long vacancyId) {
        return userService.findVacancyByIdWithCandidates(vacancyId);
    }


    @GetMapping("/vacancy/show/user/{userId}")
    public UserDto showUserWithVacancies(@PathVariable("userId") Long userId) {
        return userService.showUserWithVacancies(userId);
    }


}
