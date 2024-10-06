package com.example.hrmonitorbackend.mapper;


import com.example.hrmonitorbackend.dto.candidate.CandidateDtoSmall;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDto;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoIn;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDtoShow;
import com.example.hrmonitorbackend.dto.vacancy.VacancyElement;
import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.model.Vacancy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import  com.example.hrmonitorbackend.constants.CandidateStatus;

import javax.lang.model.element.Element;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface VacancyMapper {
    CandidateMapper CANDIDATE_MAPPER = Mappers.getMapper(CandidateMapper.class);

    Vacancy convertFromDtoToModel(VacancyDtoIn vacancyDtoIn);
    VacancyDto convertFromModelToDto(Vacancy vacancy);


    @Mapping(target = "colomns", qualifiedByName = "createVacancyElementList", source = "candidates")
    VacancyDtoShow convertFromModelToVacancyDtoShow(Vacancy vacancy, List<Candidate> candidates);

    @Named("createVacancyElementList")
    default  List<VacancyElement> createVacancyElementList(List<Candidate> candidates) {
        List<VacancyElement> list = new ArrayList<>();
        for (int i = 0; i < CandidateStatus.statusTypes.size(); i++) {
            var element = new VacancyElement();
            element.setStatus(CandidateStatus.statusTypes.get(i));
            element.setId(i);
            element.setActiveTasks(new ArrayList<>());
            element.setDisabledTasks(new ArrayList<>());

            for (Candidate candidate : candidates) {
                if (candidate.getStatus().equals(CandidateStatus.statusTypes.get(i))) {
                    if (candidate.getIsDisable() == false) {
                        element.getActiveTasks().add(CANDIDATE_MAPPER.convertFromModelToCandidateDtoSmall(candidate));
                    } else {
                        element.getDisabledTasks().add(CANDIDATE_MAPPER.convertFromModelToCandidateDtoSmall(candidate));
                    }

                }
            }
            list.add(element);

        }
        return list;
    }

}
