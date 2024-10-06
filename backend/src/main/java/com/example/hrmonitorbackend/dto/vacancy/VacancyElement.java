package com.example.hrmonitorbackend.dto.vacancy;
import com.example.hrmonitorbackend.dto.candidate.CandidateDtoSmall;
import com.example.hrmonitorbackend.dto.vacancy.VacancyBaseDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@RequiredArgsConstructor
public class VacancyElement {
    private String status;

    private Integer id;

    private List<CandidateDtoSmall> activeTasks;
    private List<CandidateDtoSmall> disabledTasks;
}