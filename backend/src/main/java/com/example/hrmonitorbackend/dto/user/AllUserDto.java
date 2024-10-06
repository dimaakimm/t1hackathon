package com.example.hrmonitorbackend.dto.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class AllUserDto {
    String message;
    private List<UserDtoSmall> recruters;
}
