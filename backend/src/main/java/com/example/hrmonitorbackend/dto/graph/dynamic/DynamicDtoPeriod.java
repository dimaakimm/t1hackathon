package com.example.hrmonitorbackend.dto.graph.dynamic;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class DynamicDtoPeriod {
    private Integer period;
    private List<DynamicDtoStatusId> dynamicDtoStatusIds = new ArrayList<>();

    public void addDynamicStatusId(DynamicDtoStatusId dynamicDtoStatusId) {
        dynamicDtoStatusIds.add(dynamicDtoStatusId);
    }
}
