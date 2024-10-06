package com.example.hrmonitorbackend.mapper;

import com.example.hrmonitorbackend.dto.auth.AuthRequest;
import com.example.hrmonitorbackend.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.Named;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface AuthMapper {

    @Mapping(target = "password", qualifiedByName = "getEncodedPassword", source = "password")
    User fromAuthRequestToUser(AuthRequest authRequest);

    User fromAuthRequestToUserWithOutPassword(AuthRequest authRequest);

    @Named("getEncodedPassword")
    default String getEncodedPassword(String password) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }
}
