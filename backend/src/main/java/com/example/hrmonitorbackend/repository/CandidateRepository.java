package com.example.hrmonitorbackend.repository;

import com.example.hrmonitorbackend.model.Candidate;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    @Query("""
        select candidate from Candidate candidate
        where candidate.vacancy.id = :vacancyId
    """)
    List<Candidate> findByVacancyId(Long vacancyId);

    @Modifying
    @Transactional
    @Query("""
        update Candidate candidate set candidate.status = :status
        where candidate.id = :id
    """)
    void insertNewStatus(Long id, String status);

}
