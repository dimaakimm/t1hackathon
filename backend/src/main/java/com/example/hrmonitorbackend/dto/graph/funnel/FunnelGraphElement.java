package com.example.hrmonitorbackend.dto.graph.funnel;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class FunnelGraphElement {
    private String id;
    private String label;
    private Integer value;
}
