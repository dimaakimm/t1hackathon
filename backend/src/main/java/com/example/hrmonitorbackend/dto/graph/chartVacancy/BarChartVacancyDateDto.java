package com.example.hrmonitorbackend.dto.graph.chartVacancy;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class BarChartVacancyDateDto {
    private List<BarChartVacancyDateElement> barChartVacancyDateElements = new ArrayList<>();

    public void addBarChartVacancyElement(BarChartVacancyDateElement barChartVacancyDateElement) {
        barChartVacancyDateElements.add(barChartVacancyDateElement);
    }

}
