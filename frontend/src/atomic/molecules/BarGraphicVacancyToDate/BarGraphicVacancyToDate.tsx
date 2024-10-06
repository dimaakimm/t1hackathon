import React, {useMemo} from 'react';
import styles from "./BarGraphicVacancyToDate.module.scss"
import {ResponsiveBar} from "@nivo/bar";
import Title from "../../atoms/Title/Title.tsx";
import {Text} from "@chakra-ui/react";
import { IBarGraphicVacancyToDate } from '../../../api/Graphic/types.ts';

interface IVacancyToDate {
    dataBack: IBarGraphicVacancyToDate[];
    closeDate: string | null;
    setCloseDate: React.Dispatch<React.SetStateAction<string | null>>;
}

const BarGraphicVacancyToDate: React.FC<IVacancyToDate> = (props) => {
    const data = [
        {
            date: 1,
            value: 200,
        },
        {
            date: 2,
            value: 134,
        },
        {
            date: 3,
            value: 183,
        },
        {
            date: 4,
            value: 16,
        },
        {
            date: 5,
            value: 156,
        },
        {
            date: 6,
            value: 73,
        },
        {
            date: 7,
            value: 40,
        },
        {
            date: 8,
            value: 183,
        },
        {
            date: 9,
            value: 16,
        },
        {
            date: 10,
            value: 156,
        },
        {
            date: 11,
            value: 73,
        },
        {
            date: 12,
            value: 40,
        }
    ]
    const findMaxValue = (dataArray) => {
        let maxValue = -Infinity; // Начальное значение максимального значения
        dataArray.forEach((item) => {
            if (item.value > maxValue) {
                maxValue = item.value; // Обновление максимального значения
            }
        });

        return maxValue;
    };
    const maxValue = useMemo(()=> {
            return findMaxValue(data)
        }, [data])
        console.log(props.dataBack)
    return props.dataBack && (
        <>

        <div className={styles.BarGraphicVacancyToDate}>
            <Text fontSize={'18px'}  >Распределение вакансий по сроку закрытия</Text>
            <ResponsiveBar
                data={props.dataBack}
                keys={[
                    'value',
                ]}
                indexBy="date"
                margin={{ top: 40, right: 20, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'Принятых'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'Проешедших 1-ый этап'
                        },
                        id: 'lines'
                    }
                ]}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'временной период',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'кол-во анкет',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                colors={({ id, data }) => {
                    if (data.date === props.closeDate)
                        return '#E6C6FF'
                    else {
                        return `rgba(174, 174, 255,${data.value/maxValue > 0.3 ? data.value/maxValue : 0.3})`
                    }

                }}
                onClick={(nodeData, e) => {
                    if (nodeData?.data.date === props.closeDate) {
                        props.setCloseDate(null)
                    }
                    else {
                        props.setCloseDate(nodeData?.data.date)
                    }
                }}
            />
        </div>

            </>
    );
};

export default BarGraphicVacancyToDate;