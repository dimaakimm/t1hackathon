package com.example.hrmonitorbackend.dto.graph;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class GraphAdminFilter {
    private Date startDate;
    private Date endDate;
    private Integer closedPeriod;
    private String direction;
}