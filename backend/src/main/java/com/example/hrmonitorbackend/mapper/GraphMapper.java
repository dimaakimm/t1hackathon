package com.example.hrmonitorbackend.mapper;

import com.example.hrmonitorbackend.dto.graph.GraphAdminDto;
import com.example.hrmonitorbackend.dto.graph.GraphAdminFilter;
import com.example.hrmonitorbackend.dto.graph.GraphUserDto;
import com.example.hrmonitorbackend.dto.graph.GraphUserFilter;
import com.example.hrmonitorbackend.dto.graph.admin.BarChartRecruiterMedianDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface GraphMapper {

    @Mapping(target = "userId", source = "id")
    GraphUserFilter convertFromAdminToUser(GraphAdminFilter graphAdminFilter, Long id);

    @Mapping(target = "barChartRecruiterMedianDto", source = "barChartRecruiterMedianDto")
    GraphAdminDto convertFromUserToAdminDto(GraphUserDto graphUserDto, BarChartRecruiterMedianDto barChartRecruiterMedianDto);

}
