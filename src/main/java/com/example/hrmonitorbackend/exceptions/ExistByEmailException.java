package com.example.hrmonitorbackend.exceptions;

public class ExistByEmailException extends RuntimeException {
    public <T> ExistByEmailException(Class<T> clazz, String email){
        super("User with email = " + email + " already exist");
    }
}