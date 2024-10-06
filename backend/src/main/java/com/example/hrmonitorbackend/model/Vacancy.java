package com.example.hrmonitorbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;


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

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "finish_date")
    private Date finishDate;

    @Column(name = "deadline_date")
    private Date deadlineDate;

    @Column(name = "direction")
    private String direction;

    @Column(name = "salary")
    private Integer salary;

    @Column(name = "is_open")
    private Boolean isOpen;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
