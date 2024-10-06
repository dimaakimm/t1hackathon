import { AxiosPromise } from "axios"
import { axiosInstance } from "../instance"
import { KanbanEndpoints } from "../endpoints"
import { IUserVacancies, IUserVacancyResponse } from "./types"

export const getVacancies = (userId: string): AxiosPromise<IUserVacancies> => axiosInstance.get(KanbanEndpoints.GET_VACANCIES + userId)


//TODO Пока что не готово
export const getTickets = (vacancyId: string): AxiosPromise => axiosInstance.get(KanbanEndpoints.GET_TICKET + vacancyId)