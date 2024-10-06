package com.example.hrmonitorbackend.dto.graph;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
public class GraphUserFilterDto {
    private Long userId;
//    private Date startDate;
//    private Date endDate;
    private Integer closedPeriod;
    private String direction;
}
