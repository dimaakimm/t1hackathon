package com.example.hrmonitorbackend.dto.vacancy;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
public class VacancyDto extends VacancyBaseDto {
    private Long id;
    private String direction;
    private Date deadlineDate;
    private Boolean isOpen;
}
