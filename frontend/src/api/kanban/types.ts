
export interface IVacancy{
    name: string,
    id: string,
    direction: string,
    deadlineDate: string,
    isOpen: boolean
}

export interface IUserVacancies{
    id: string,
    name: string,
    vacancyDtoList: IVacancy[]
}

export interface IUserVacancyResponse{
    data: IUserVacancies
}

// export interface IVacancyTickets{
//     name: string,
//     id: string,
//     startDate: string,
//     endDate: string,
//     direction: string,
//     candidates: {

//     }
// }