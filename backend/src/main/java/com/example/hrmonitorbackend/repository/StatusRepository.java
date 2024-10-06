package com.example.hrmonitorbackend.repository;

import com.example.hrmonitorbackend.model.Status;
import com.example.hrmonitorbackend.model.Vacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatusRepository extends JpaRepository<Status, Long> {
    List<Status> findStatusByCandidateId(Long candidateId);
}
