package com.example.hrmonitorbackend.dto.candidate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CandidateDtoIn extends CandidateBaseDto {
    private String status;
    private String interviewType;
    private String source;
}
