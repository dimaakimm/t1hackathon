package com.example.hrmonitorbackend.service;

import com.example.hrmonitorbackend.model.Candidate;

import java.util.List;

public interface CandidateService {
    Candidate createCandidate(Candidate candidate);

    List<Candidate> findCandidatesByVacancyId(Long vacancyId);

    void changeCandidateStatus(Long id, String status);

    Candidate findById(Long id);
}
