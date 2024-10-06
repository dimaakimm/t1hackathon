package com.example.hrmonitorbackend.service.impl;

import com.example.hrmonitorbackend.model.Status;
import com.example.hrmonitorbackend.repository.StatusRepository;
import com.example.hrmonitorbackend.service.StatusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StatusServiceImpl implements StatusService {
    private final StatusRepository statusRepository;

    @Override
    public void saveStatus(Status status) {
        statusRepository.save(status);
    }

    @Override
    public List<Status> finStatusByCandidateId(Long candidateId) {
        return statusRepository.findStatusByCandidateId(candidateId);
    }


}
