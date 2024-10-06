package com.example.hrmonitorbackend.dto.vacancy;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
public class VacancyDtoIn extends VacancyBaseDto {
    private Integer salary;
    private String direction;
    private Date startDate;
    private Date deadlineDate;
    private Boolean isOpen;
}


