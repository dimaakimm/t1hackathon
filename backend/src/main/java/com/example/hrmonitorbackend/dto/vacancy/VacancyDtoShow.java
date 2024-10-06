package com.example.hrmonitorbackend.dto.vacancy;

import com.example.hrmonitorbackend.dto.candidate.CandidateDtoSmall;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@RequiredArgsConstructor
public class VacancyDtoShow extends VacancyBaseDto {
    private Long id;
    private Date startDate;
    private Date deadlineDate;
    private String direction;
    private int salary;
    private List<VacancyElement> colomns;
}
