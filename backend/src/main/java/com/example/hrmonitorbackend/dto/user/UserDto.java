package com.example.hrmonitorbackend.dto.user;

import com.example.hrmonitorbackend.dto.vacancy.VacancyDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private List<VacancyDto> vacancyDtoList;
}
