package com.example.hrmonitorbackend.service.impl;

import com.example.hrmonitorbackend.dto.user.AllUserDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoIn;
import com.example.hrmonitorbackend.mapper.UserMapper;
import com.example.hrmonitorbackend.mapper.VacancyMapper;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.User;
import com.example.hrmonitorbackend.model.Vacancy;
import com.example.hrmonitorbackend.repository.CandidateRepository;
import com.example.hrmonitorbackend.repository.UserRepository;
import com.example.hrmonitorbackend.repository.VacancyRepository;
import com.example.hrmonitorbackend.service.AdminService;
import com.example.hrmonitorbackend.service.UserService;
import com.example.hrmonitorbackend.service.VacancyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final UserService userService;
    private final VacancyService vacancyService;
    private final VacancyMapper vacancyMapper;

    private final UserRepository userRepository;

    private final UserMapper userMapper;
    @Override
    public VacancyDto createVacancy(VacancyDtoIn vacancyDtoIn, Long userId) {
        //TODO check for exist
        var vacancy = vacancyMapper.convertFromDtoToModel(vacancyDtoIn);
        vacancy.setUser(userService.findUserById(userId));
        return vacancyMapper.convertFromModelToDto(vacancyService.createVacancy(vacancy));
    }

    @Override
    public void changeUserStatus(Long userId) {
        userService.changeUserStatus(userId);
    }

    @Override
    public AllUserDto showAllUsers() {
        List<User> test = userRepository.findAll().stream().toList();

        ArrayList<User> answer = new ArrayList();
        for (User user : test) {
            if (user.getRole().name().equals("USER") && user.getActive()) {
                answer.add(user);
            }
        }

        return userMapper.convertFromModelToListUserDtoSmall("All users", answer);
    }

}
