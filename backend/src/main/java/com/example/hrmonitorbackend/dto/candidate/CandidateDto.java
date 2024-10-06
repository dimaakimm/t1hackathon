package com.example.hrmonitorbackend.dto.candidate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class CandidateDto extends CandidateBaseDto{
    private String status;
    private String interviewType;
}
