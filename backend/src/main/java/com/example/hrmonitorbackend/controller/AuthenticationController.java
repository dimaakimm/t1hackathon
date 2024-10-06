package com.example.hrmonitorbackend.controller;


import com.example.hrmonitorbackend.dto.auth.AuthRequest;
import com.example.hrmonitorbackend.dto.auth.AuthenticationResponse;
import com.example.hrmonitorbackend.exceptions.LoginException;
import com.example.hrmonitorbackend.mapper.AuthMapper;
import com.example.hrmonitorbackend.model.User;
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
    private final AuthMapper authMapper;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthRequest request) {
        return ResponseEntity.ok(authenticationService.register(authMapper.fromAuthRequestToUser(request)));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthRequest request) throws LoginException {
        return ResponseEntity.ok(authenticationService
                .authenticate(authMapper.fromAuthRequestToUserWithOutPassword(request)));
    }

}
