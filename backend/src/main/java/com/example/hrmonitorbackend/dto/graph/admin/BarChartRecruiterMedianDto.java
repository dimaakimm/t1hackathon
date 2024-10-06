package com.example.hrmonitorbackend.dto.graph.admin;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class BarChartRecruiterMedianDto {
    private List<BarChartRecruiterMedianElement> barChartRecruiterMedianElementList = new ArrayList<>();

    public void addElement(BarChartRecruiterMedianElement element) {
        barChartRecruiterMedianElementList.add(element);
    }
}
