package com.example.hrmonitorbackend.constants;

import java.util.HashMap;
import java.util.Map;

public class CandidateStatus {
    public static final String ALL = "all";
    public static final String REVIEW = "review";
    public static final String INTERVIEW_1 = "interview1";
    public static final String INTERVIEW_2 = "interview2";
    public static final String OFFER = "offer";
    public static final String ACCEPTED = "accepted";

    public static Map<Integer, String> statusTypes = new HashMap<>();
    public static Map<String, Integer> statusIds = new HashMap<>();

    static {
        statusTypes.put(0, REVIEW);
        statusTypes.put(1, INTERVIEW_1);
        statusTypes.put(2, INTERVIEW_2);
        statusTypes.put(3, OFFER);
        statusTypes.put(4, ACCEPTED);

        statusIds.put(REVIEW, 0);
        statusIds.put(INTERVIEW_1, 1);
        statusIds.put(INTERVIEW_2, 2);
        statusIds.put(OFFER, 3);
        statusIds.put(ACCEPTED, 4);

    }

}
