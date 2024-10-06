import { AxiosPromise } from "axios";
import { GraphicEndpoints } from "../endpoints";
import { axiosInstance } from "../instance";
import { IMainGraphicData, IMainGraphicDataResponse, IPossibleFiltes } from "./types";
import { body } from "framer-motion/client";


// export interface IPossibleFiltes{
//     startDate: string,
//     endDate:string,
//     recruiterId: string
//     period: string,
//     department: string
// }

export const getGraphicData = (props: IPossibleFiltes): 
    AxiosPromise<IMainGraphicData> => axiosInstance.post(
        GraphicEndpoints.GET_GRAPHIC_INFO, props)
