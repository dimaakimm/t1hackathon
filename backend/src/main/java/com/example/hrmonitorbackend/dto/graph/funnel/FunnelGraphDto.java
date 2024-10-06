package com.example.hrmonitorbackend.dto.graph.funnel;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class FunnelGraphDto {
    private List<FunnelGraphElement> funnelGraphElements = new ArrayList<>();

    public void addFunnelGraphElement(FunnelGraphElement funnelGraphElement) {
        funnelGraphElements.add(funnelGraphElement);
    }
}
