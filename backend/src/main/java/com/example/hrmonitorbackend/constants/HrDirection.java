package com.example.hrmonitorbackend.constants;

import java.util.HashMap;
import java.util.Map;

public class HrDirection {
    public static final String HR = "hr";
    public static final String IT = "it";
    public static final String BUSINESS = "business";
    public static final String MARKETING = "marketing";
    public static final String FINANCE = "finance";
    public static final String SECURITY = "security";

    public static Map<Integer, String> directionTypes = new HashMap<>();

    static {
        directionTypes.put(0, HR);
        directionTypes.put(1, IT);
        directionTypes.put(2, BUSINESS);
        directionTypes.put(3, MARKETING);
        directionTypes.put(4, FINANCE);
        directionTypes.put(5, SECURITY);
    }

}
