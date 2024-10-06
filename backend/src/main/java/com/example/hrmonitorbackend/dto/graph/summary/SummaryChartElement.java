package com.example.hrmonitorbackend.dto.graph.summary;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class SummaryChartElement {
    private String direction;
    private Integer numberAccepted;
    private Double medianTerm;
}
