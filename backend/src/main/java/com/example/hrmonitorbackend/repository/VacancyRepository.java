package com.example.hrmonitorbackend.repository;

import com.example.hrmonitorbackend.model.Vacancy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Repository
public interface VacancyRepository extends JpaRepository<Vacancy, Long> {
    @Query("""
        select vacancy from Vacancy vacancy
        where vacancy.user.id = :userId
    """)
    List<Vacancy> findVacanciesByUserId(Long userId);

    @Query("select vacancy from Vacancy vacancy " +
            "where vacancy.user.id = :userId " +
            "and (vacancy.startDate between :startDate and :endDate or :startDate = null) " +
            "and vacancy.direction = :direction or :direction = 'all'")
    List<Vacancy> findVacanciesByUserIdFilter(@Param("userId") long userId,
                                              @Param("startDate") Date startDate,
                                              @Param("endDate") Date endDate,
                                              @Param("direction") String direction);

    @Query("select vacancy from Vacancy vacancy " +
            "where (vacancy.startDate between :startDate and :endDate or :startDate = null) " +
            "and (vacancy.direction = :direction or :direction = 'all')")
    List<Vacancy> findVacanciesByAdminFilter(@Param("startDate") Date startDate,
                                              @Param("endDate") Date endDate,
                                              @Param("direction") String direction);
}
