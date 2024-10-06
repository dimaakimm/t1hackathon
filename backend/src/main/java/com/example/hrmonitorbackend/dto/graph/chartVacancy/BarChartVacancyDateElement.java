package com.example.hrmonitorbackend.dto.graph.chartVacancy;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class BarChartVacancyDateElement {
    private Integer date;
    private Integer value;
}
