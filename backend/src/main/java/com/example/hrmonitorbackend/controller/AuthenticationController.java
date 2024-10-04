package com.example.hrmonitorbackend.controller;


import com.example.hrmonitorbackend.dto.auth.AuthRequest;
import com.example.hrmonitorbackend.dto.auth.AuthenticationResponse;
import com.example.hrmonitorbackend.service.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "Регистрация и логин")
public class AuthenticationController {
    private final AuthenticationService authenticationService;


    @PostMapping("/register")
    public String register(
            @RequestBody AuthRequest request) {
        return "go";
    }

}
