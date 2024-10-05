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

const MainGraphics: React.FC = () => {
    const f = async() => {
        console.log(12345)
        const data = await fetch('http/localhost:8090/user-controller/changeCandidateStatus/vacancy/show')
        console.log(data.body)
    }
    useEffect(() => {
        f()
    }, []);
    interface Recruiter{
        name: string,
        id: number
    }
    const getTodayDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Январь - 0, Февраль - 1, и так далее
        const yyyy = today.getFullYear();
        const todayDate = yyyy + '-' + mm + '-' + dd;
        return todayDate
    }

    const [recruiter, setRecruiter] = useState<Recruiter | null>({name:'Ivan', id:0})
    const [startDate, setStartDate] = useState<Date>(getTodayDate())
    const [endDate, setEndDate] = useState<Date>(getTodayDate())
    const [department, setDepartment] = useState<string | null>(null)
    const [closeDate, setCloseDate] = useState<number | null>(null)
    const generalData = {
        medianPeriod: 23.0,
        totalClosed: 3242,
        candidatesPerVacancy: 14.9
    }
  return (
    <div className={styles.MainGraphics}>
        <Title>Статистика</Title>
        <h1>Имя:{recruiter?.name} id:{recruiter?.id}</h1>
        <div className={styles.generalInfo}>
            <div className={styles.box}>
                <Text>Медианный срок закрытия</Text>
                <h1>{generalData.medianPeriod}</h1>
            </div>
            <div className={styles.box}>
                <Text>Закрыто вакансий всего</Text>
                <h1>{generalData.totalClosed}</h1>
            </div>
            <div className={styles.box}>
                <Text>Среднее количество кандидатов на одну вакансию</Text>
                <h1>{generalData.candidatesPerVacancy}</h1>
            </div>
            <div className={styles.box}>
                <div className={styles.startDate}>
                    <Text>Начало периода:</Text>
                    <Input value={startDate} type='date' onChange={e=>setStartDate(e.target.value)}></Input>
                </div>
                <div className={styles.endDate}>
                    <Text>Конец периода:</Text>
                    <Input value={endDate} type='date' onChange={e=>setEndDate(e.target.value)}></Input>
                </div>
            </div>
        </div>
        <Grid gridTemplateColumns={"1fr 1fr"} className={styles.graphicsLayout}>
            <FunnelGraphic/>
            <BarGraphic/>
        </Grid>
        <Grid gridTemplateColumns={"1fr 1fr"} className={styles.graphicsLayout}>
            <SummaryChart setDepartment={setDepartment} department={department}/>
            <BarGraphicVacancyToDate closeDate={closeDate} setCloseDate={setCloseDate}/>
        </Grid>
        <Flex justifyContent={"center"} className={styles.graphicsLayout}>
            <BarChartRecruiterMedian recruiter={recruiter} setRecruiter={setRecruiter}/>
        </Flex>

    </div>
  );
};

export default MainGraphics;
