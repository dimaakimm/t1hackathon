package com.example.hrmonitorbackend.service.impl;

import com.example.hrmonitorbackend.model.Candidate;
import com.example.hrmonitorbackend.repository.CandidateRepository;
import com.example.hrmonitorbackend.service.CandidateService;
import com.example.hrmonitorbackend.service.VacancyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CandidateServiceImpl implements CandidateService {
    private final CandidateRepository candidateRepository;
    private final VacancyService vacancyService;
    @Override
    public Candidate createCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    @Override
    public List<Candidate> findCandidatesByVacancyId(Long vacancyId) {
        return candidateRepository.findByVacancyId(vacancyId);
    }

    @Override
    public void changeCandidateStatus(Long id, String status) {
        candidateRepository.insertNewStatus(id, status);
    }

    @Override
    public Candidate findById(Long id) {
        //TODO
        return candidateRepository.findById(id).orElseThrow(RuntimeException::new);
    }
}
