import React, {useEffect, useState} from 'react';
import styles from './MainGraphics.module.scss';
import { FunnelGraphic } from '../../molecules/FunnelGraphic';
import KanbanBoard from '../../molecules/Kanban/Kanban';
import Title from "../../atoms/Title/Title.tsx";
import BarGraphic from "../../molecules/BarGraphic/BarGraphic.tsx";
import {Box, Flex, Grid, Input} from "@chakra-ui/react";
import SummaryChart from "../../molecules/SummaryChart/SummaryChart.tsx";
import {Text} from "@chakra-ui/icons";
import BarGraphicVacancyToDate from "../../molecules/BarGraphicVacancyToDate/BarGraphicVacancyToDate.tsx";
import BarChartRecruiterMedian from "../../molecules/BarChartRecruiterMedian/BarChartRecruiterMedian.tsx";
import { getGraphicData } from '../../../api/Graphic/index.ts';

export interface Recruiter{
    name: string,
    id: number
}

const MainGraphics: React.FC = () => {

    const [funnelData, setFunnelData] = useState();
    const [summaryData, setSummaryData] = useState();
    const [vacancyToDateData, setVacancyToDateData] = useState();
    const [recruterData, setRecruterData] = useState();

    const [recruiter, setRecruiter] = useState<Recruiter | null>(null)
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString(); // Преобразует текущую дату в формат YYYY-MM-DDTHH:mm:ss.SSSZ
    };
    
    const formatDateToBackend = (date: Date | string): string => {
        const parsedDate = new Date(date);  // Создаем объект Date
        return parsedDate.toISOString();    // Преобразуем в ISO формат
    };
    
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(formatDateToBackend(getTodayDate()));
    
    // Ваша функция onChange, которая будет форматировать дату перед установкой:
    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = formatDateToBackend(e.target.value);
        setStartDate(formattedDate);
    };
    
    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = formatDateToBackend(e.target.value);
        setEndDate(formattedDate);
    };
    const [department, setDepartment] = useState<string | null>(null)
    const [closeDate, setCloseDate] = useState<number | null>(null)
    console.log(startDate)
    const generalData = {
        medianPeriod: 23.0,
        totalClosed: 3242,
        candidatesPerVacancy: 14.9
    }

    useEffect(() => {
        const fetchGraphic = async () => {
          try {
            console.log(recruiter)
            const defaultValues = {
                startDate: null,
                endDate: endDate,
                userId: recruiter?.id ? recruiter.id : null,
                closedPeriod: null,
                direction: "all"
            }

            const response = await getGraphicData(defaultValues);
            console.log(response.data)
            console.log(response.data.barChartRecruiterMedianDto.barChartRecruiterMedianElementList)
            setFunnelData(response.data.funnelGraphDto.funnelGraphElements)
            setSummaryData(response.data.summaryChartDto.summaryChartElements)
            setVacancyToDateData(response.data.barChartVacancyDateDto.barChartVacancyDateElements)
            setRecruterData(response.data.barChartRecruiterMedianDto.barChartRecruiterMedianElementList)
            // if (response?.data?.vacancyDtoList) {
            //   setVacancies(response.data.vacancyDtoList);
            // }
          } catch (error) {
            console.error("Error fetching vacancies:", error);
          }
        };
    
        fetchGraphic();
      }, [startDate, endDate, closeDate, department, recruiter]);

  return (
    <Box mb={"60px"} backgroundColor='white' p='30px' borderRadius='30px' mt={'30px'} >
        <Title >Статистика</Title>
        <Grid gridTemplateColumns={'1fr 1fr'} gap={'20px'} mt={'35px'}>
            <div className={styles.startDate}>
                <Text>Начало периода:</Text>
                <Input h={'70px'} border={null} backgroundColor={'#F7F9FC'} value={startDate?.slice(0, 10)} type='date' onChange={e => setStartDate(e.target.value)}></Input>
            </div>
            <div className={styles.endDate}>
                <Text>Конец периода:</Text>
                <Input h={'70px'} border={null} backgroundColor={'#F7F9FC'} value={endDate?.slice(0, 10)} type='date' onChange={e => setEndDate(e.target.value)}></Input>
            </div>
        </Grid>
        {/*<h1>Имя:{recruiter?.name} id:{recruiter?.id}</h1>*/}
        <Grid  gridTemplateColumns={'1fr 1fr 1fr'} gap={'20px'} mt={'30px'}>
            <Box borderRadius={'15px'} p={'30px'} h={'90px'} display={'flex'} justifyContent={'space-between'} backgroundColor={'#F7F9FC'} alignItems={'center'}>
                <Text>Медианный срок закрытия</Text>
                <h1 className={styles.h}>{generalData.medianPeriod}</h1>
            </Box>
            <Box borderRadius={'15px'} p={'30px'} h={'90px'} display={'flex'} justifyContent={'space-between'} backgroundColor={'#F7F9FC'} alignItems={'center'}>
                <Text>Закрыто вакансий всего</Text>
                <h1 className={styles.h}>{generalData.totalClosed}</h1>
            </Box>
            <Box borderRadius={'15px'} p={'30px'} h={'90px'} display={'flex'} justifyContent={'space-between'} backgroundColor={'#F7F9FC'} alignItems={'center'} gap={'40px'}>
            <Text>Среднее количество кандидатов на одну вакансию</Text>
                <h1 className={styles.h}>{generalData.candidatesPerVacancy}</h1>
            </Box>
        </Grid>
        <Grid gridTemplateColumns={"3fr 2fr 2fr"} pt={'20px'} gap={'20px'}>
            <BarGraphicVacancyToDate dataBack={vacancyToDateData} closeDate={closeDate} setCloseDate={setCloseDate}/>
            <BarChartRecruiterMedian dataBack={recruterData} recruiter={recruiter} setRecruiter={setRecruiter}/>
            <FunnelGraphic dataBack={funnelData}/>
        </Grid>
        <Grid gridTemplateColumns={"3fr 4fr"} pt={'20px'} gap={'20px'}>
            <SummaryChart dataBack={summaryData} setDepartment={setDepartment} department={department}/>
            <BarGraphic/>
        </Grid>
        {/*<Grid gridTemplateColumns={"2fr 3fr"} pt={'20px'} gap={'20px'}>
            <BarGraphicVacancyToDate closeDate={closeDate} setCloseDate={setCloseDate}/>
            <BarGraphic/>
        </Grid>
        <Grid gridTemplateColumns={"5fr 3fr"} pt={'20px'} gap={'20px'}>
            <SummaryChart setDepartment={setDepartment} department={department}/>
            <FunnelGraphic/>
        </Grid>*/}
    </Box>
  );
};

export default MainGraphics;
