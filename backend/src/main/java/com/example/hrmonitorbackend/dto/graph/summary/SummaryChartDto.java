package com.example.hrmonitorbackend.dto.graph.summary;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class SummaryChartDto {
    private List<SummaryChartElement> summaryChartElements = new ArrayList<>();

    public void addSummaryChartElement(SummaryChartElement summaryChartElement) {
        summaryChartElements.add(summaryChartElement);
    }

}
