package com.example.hrmonitorbackend.mapper;

import com.example.hrmonitorbackend.dto.candidate.CandidateDto;
import com.example.hrmonitorbackend.dto.candidate.CandidateDtoIn;
import com.example.hrmonitorbackend.dto.candidate.CandidateDtoSmall;
import com.example.hrmonitorbackend.model.Candidate;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CandidateMapper {

    Candidate convertFromDtoToModel(CandidateDtoIn candidateDtoIn);

    CandidateDto convertFromModelToDto(Candidate candidate);

    CandidateDtoSmall convertFromModelToCandidateDtoSmall(Candidate candidate);
}
