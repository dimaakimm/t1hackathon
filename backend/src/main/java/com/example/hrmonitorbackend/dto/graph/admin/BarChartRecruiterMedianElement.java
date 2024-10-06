package com.example.hrmonitorbackend.dto.graph.admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class BarChartRecruiterMedianElement {
    private Long id;
    private String name;
    private Double value;
}
