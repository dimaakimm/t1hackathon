import React, {useMemo, useState} from 'react';
import styles from "./SummaryChart.module.scss"
import Title from "../../atoms/Title/Title.tsx";
import {Text} from "@chakra-ui/react";
import { ISummaryChartData } from '../../../api/Graphic/types.ts';

interface SummaryChartData {
    dataBack: ISummaryChartData[];
    department: string | null;
    setDepartment: React.Dispatch<React.SetStateAction<string | null>>;
}

const SummaryChart: React.FC<SummaryChartData> = (props) => {
    interface Parametr{
        parameter: "department" | "recievesNumber" | "medianTerm"
    }
    const [parameter, setParameter]= useState<Parametr> ("department")

    const data = [
        {
            department: 'hr',
            recievesNumber: 26,
            medianTerm: 2.6
        },
        {
            department: 'it',
            recievesNumber: 226,
            medianTerm: 5.6
        },
        {
            department: 'piar',
            recievesNumber: 126,
            medianTerm: 234.6
        },
        {
            department: 'marketing',
            recievesNumber: 324,
            medianTerm: 324.1
        },
        {
            department: 'support',
            recievesNumber: 12,
            medianTerm: 2.2
        },
        {
            department: 'finance',
            recievesNumber: 0,
            medianTerm: 12.3
        },
        {
            department: 'business',
            recievesNumber: 26,
            medianTerm: 2.6
        },
        {
            department: 'clerk',
            recievesNumber: 226,
            medianTerm: 5.6
        },
        {
            department: 'fundrising',
            recievesNumber: 126,
            medianTerm: 234.6
        },
        {
            department: 'logistic',
            recievesNumber: 324,
            medianTerm: 324.1
        },
        {
            department: 'drivers',
            recievesNumber: 12,
            medianTerm: 2.2
        },
        {
            department: 'cleaning',
            recievesNumber: 0,
            medianTerm: 12.3
        }
    ]
    const sortedData = useMemo(()=>{
        if (parameter === "department"){
            return data.sort((a, b) => (a.department > b.department) ? 1 : -1);
        }
        if (parameter === "recievesNumber"){
            return data.sort((a, b) => b.recievesNumber - a.recievesNumber);
        }
        if (parameter === "medianTerm"){
            return data.sort((a, b) => b.medianTerm - a.medianTerm);
        }
    }, [data, parameter])
    const handleOnTrClick = (newDepartment)=>{
        if (newDepartment === props.department){
            props.setDepartment(null)
        }
        else{
            props.setDepartment(newDepartment)
        }
    }
    return props.dataBack && (
        <div className={styles.chartContainer}>
            <Text fontSize={'18px'} pb={'24px'}>Статистика по типу вакансий</Text>
            <table className={styles.SummaryChart}>
                <tr>
                    <th style={parameter === "department" ? {backgroundColor:'#C9C9FF',borderRadius: '15px 0 0 0'}: {borderRadius: '15px 0 0 0', backgroundColor:'#f1f1ff'}}  onClick={()=>setParameter("department")}>Отдел</th>
                    <th style={parameter === "recievesNumber" ? {backgroundColor:'#C9C9FF'}: {backgroundColor:'#f1f1ff'}} onClick={()=>setParameter("recievesNumber")}>Кол-во приемов</th>
                    <th style={parameter === "medianTerm" ? {backgroundColor:'#C9C9FF', borderRadius: '0 15px 0 0'}: {borderRadius: '0 15px 0 0', backgroundColor:'#f1f1ff'}} onClick={()=>setParameter("medianTerm")}>Медианный срок закрытия</th>
                </tr>

                {props.dataBack.map((row, index) =>
                    <tr style={{ backgroundColor: props.department===row.department ?  ('#E6C6FF') :(index % 2 === 0 ? '#fafafa' : 'white')}} onClick={()=>handleOnTrClick(row.department)}>
                        <td>{row.direction}</td>
                        <td>{row.numberAccepted}</td>
                        <td>{row.medianTerm}</td>
                    </tr>)}
            </table>
        </div>
    );
};

export default SummaryChart;