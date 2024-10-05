import React, {useMemo, useState} from 'react';
import styles from "./SummaryChart.module.scss"
const SummaryChart = ({...props}) => {
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
    return (
        <div className={styles.chartContainer}>
            <table className={styles.SummaryChart}>
                <tr>
                    <th style={parameter === "department" ? {backgroundColor:'grey'}: {}} onClick={()=>setParameter("department")}>Отдел</th>
                    <th style={parameter === "recievesNumber" ? {backgroundColor:'grey'}: {}} onClick={()=>setParameter("recievesNumber")}>Кол-во приемов</th>
                    <th style={parameter === "medianTerm" ? {backgroundColor:'grey'}: {}} onClick={()=>setParameter("medianTerm")}>Медианный срок закрытия</th>
                </tr>

                {data.map((row, index) =>
                    <tr style={{ backgroundColor: props.department===row.department ?  ('darkgrey') :(index % 2 === 0 ? '#f2f2f2' : 'white')}} onClick={()=>handleOnTrClick(row.department)}>
                        <td>{row.department}</td>
                        <td>{row.recievesNumber}</td>
                        <td>{row.medianTerm}</td>
                    </tr>)}
            </table>
        </div>
    );
};

export default SummaryChart;