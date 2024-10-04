package com.example.hrmonitorbackend.model;

import com.example.hrmonitorbackend.model.auth.Role;
import com.example.hrmonitorbackend.model.auth.Token;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "recruiter")
public class Recruiter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "recruiter")
    private List<Token> tokens;
}
