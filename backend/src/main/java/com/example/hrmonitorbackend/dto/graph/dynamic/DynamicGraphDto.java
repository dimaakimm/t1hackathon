package com.example.hrmonitorbackend.dto.graph.dynamic;

import com.example.hrmonitorbackend.dto.graph.dynamic.DynamicDtoElement;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@RequiredArgsConstructor
public class DynamicGraphDto {
    private List<DynamicDtoPeriod> dynamicDtoPeriods = new ArrayList<>();

    public void addDynamicDtoPeriod(DynamicDtoPeriod dynamicDtoPeriod) {
        dynamicDtoPeriods.add(dynamicDtoPeriod);
    }
}
