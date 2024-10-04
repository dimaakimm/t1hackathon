package com.example.hrmonitorbackend.model;

import com.example.hrmonitorbackend.model.auth.Token;
import com.example.hrmonitorbackend.model.auth.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "vacancy")
public class Vacancy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "name")
    private Date start_date;

    @Column(name = "name")
    private Date finish_date;

    @Column(name = "direction")
    private String direction;

    @Column(name = "salary")
    private Integer salary;

    @ManyToOne
    @JoinColumn(name = "recruiter_id")
    private Recruiter recruiter;

}
