package com.example.hrmonitorbackend.dto.graph;

import com.example.hrmonitorbackend.dto.graph.admin.BarChartRecruiterMedianDto;
import com.example.hrmonitorbackend.dto.graph.chartVacancy.BarChartVacancyDateDto;
import com.example.hrmonitorbackend.dto.graph.dynamic.DynamicGraphDto;
import com.example.hrmonitorbackend.dto.graph.funnel.FunnelGraphDto;
import com.example.hrmonitorbackend.dto.graph.summary.SummaryChartDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class GraphAdminDto extends GraphUserDto{
    private BarChartRecruiterMedianDto barChartRecruiterMedianDto;
}
