package com.example.hrmonitorbackend.mapper;

import com.example.hrmonitorbackend.dto.user.AllUserDto;
import com.example.hrmonitorbackend.dto.user.UserDto;
import com.example.hrmonitorbackend.dto.user.UserDtoSmall;
import com.example.hrmonitorbackend.dto.vacancy.VacancyDto;
import com.example.hrmonitorbackend.model.User;
import com.example.hrmonitorbackend.model.Vacancy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {
    VacancyMapper VACANCY_MAPPER = Mappers.getMapper(VacancyMapper.class);
    UserMapper USER_MAPPER = Mappers.getMapper(UserMapper.class);
    @Mapping(target = "vacancyDtoList", qualifiedByName = "convertVacancies", source = "vacancies")
    UserDto convertFromModelToUserDto(User user, List<Vacancy> vacancies);

    UserDtoSmall convertFromModelToUserDtoSmall(User user);

    @Named("convertVacancies")
    default List<VacancyDto> convertVacancies(List<Vacancy> vacancies) {
        return vacancies.stream()
                .map(VACANCY_MAPPER::convertFromModelToDto)
                .toList();
    }

    @Mapping(target = "recruters", qualifiedByName = "convertUsers", source = "users")
    AllUserDto convertFromModelToListUserDtoSmall(String message, List<User> users);

    @Named("convertUsers")
    default List<UserDtoSmall> convertUsers(List<User> users){
        List listUsers = new ArrayList();
        for (User user : users) {
            listUsers.add(USER_MAPPER.convertFromModelToUserDtoSmall(user));
        }
        return listUsers;
    }
}
