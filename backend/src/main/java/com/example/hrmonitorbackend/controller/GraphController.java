package com.example.hrmonitorbackend.controller;


import com.example.hrmonitorbackend.dto.graph.*;
import com.example.hrmonitorbackend.service.GraphService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequiredArgsConstructor
public class GraphController {
    private final GraphService graphService;

    @PostMapping("/graph/get/user")
    public GraphUserDto getAllUserGraphs(@RequestBody GraphUserFilter filter) {
        return graphService.getUserGraphsByFilter(filter);
    }

    @PostMapping("/graph/get/admin")
    public GraphAdminDto getAllAdminGraphs(@RequestBody GraphUserFilter filter) {
        return graphService.getAdminGraphsByFilter(filter);
    }
    
}
