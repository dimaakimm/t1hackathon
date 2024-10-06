package com.example.hrmonitorbackend.service;

import com.example.hrmonitorbackend.dto.graph.GraphAdminDto;
import com.example.hrmonitorbackend.dto.graph.GraphAdminFilter;
import com.example.hrmonitorbackend.dto.graph.GraphUserDto;
import com.example.hrmonitorbackend.dto.graph.GraphUserFilter;

public interface GraphService {
    GraphUserDto getUserGraphsByFilter(GraphUserFilter filter);

    GraphAdminDto getAdminGraphsByFilter(GraphUserFilter filter);
}
