package com.example.hrmonitorbackend.dto.candidate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CandidateDtoSmall extends CandidateBaseDto {
    private Long id;
    private String status;
    private Boolean isDisable;
}
