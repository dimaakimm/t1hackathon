package com.example.hrmonitorbackend.service;

import com.example.hrmonitorbackend.model.Status;

import java.util.List;

public interface StatusService {
    void saveStatus(Status status);

    List<Status> finStatusByCandidateId(Long candidateId);
}
