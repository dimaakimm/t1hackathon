package com.example.hrmonitorbackend.controller;



import com.example.hrmonitorbackend.dto.user.AllUserDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoIn;
import com.example.hrmonitorbackend.mapper.VacancyMapper;
import com.example.hrmonitorbackend.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/vacancy/create")
    public VacancyDto createVacancy(@RequestBody VacancyDtoIn vacancyDtoIn,
                                      Long userId) {
        return adminService.createVacancy(vacancyDtoIn, userId);
    }

    @PostMapping("/user/change/status/{userId}")
    public void changeUserStatus(@PathVariable Long userId) {
        adminService.changeUserStatus(userId);
    }

    @GetMapping("/user/show/all/")
    public AllUserDto showAllUsers() {
        return adminService.showAllUsers();
    }
}
