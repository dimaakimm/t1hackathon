import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import styles from "./BarGraphic.module.scss"
import {Text} from "@chakra-ui/react";
const BarGraphic = () => {
    const data = [
        {
            "date": "1",
            value: 200,
            "Подавших резюме": 112,
            "Проешедших 1-ый этап": 139,
            "Проешедших 2-ой этап": 91,
            "Принятых": 132,
            "В ожидании": 63,
        },
        {
            "date": "2",
            value: 134,
            "Подавших резюме": 26,
            "Проешедших 1-ый этап": 193,
            "Проешедших 2-ой этап": 169,
            "Принятых": 15,
            "В ожидании": 14,
        },
        {
            "date": "3",
            value: 183,
            "Подавших резюме": 16,
            "Проешедших 1-ый этап": 31,
            "Проешедших 2-ой этап": 160,
            "Принятых": 96,
            "В ожидании": 45,
        },
        {
            "date": "4",
            value: 16,
            "Подавших резюме": 18,
            "Проешедших 1-ый этап": 12,
            "Проешедших 2-ой этап": 65,
            "Принятых": 26,
            "В ожидании": 115,
        },
        {
            "date": "5",
            value: 156,
            "Подавших резюме": 149,
            "Проешедших 1-ый этап": 179,
            "Проешедших 2-ой этап": 198,
            "Принятых": 74,
            "В ожидании": 60,
        },
        {
            "date": "6",
            value: 73,
            "Подавших резюме": 194,
            "Проешедших 1-ый этап": 89,
            "Проешедших 2-ой этап": 7,
            "Принятых": 168,
            "В ожидании": 96,
        },
        {
            "date": "7",
            value: 40,
            "Подавших резюме": 156,
            "Проешедших 1-ый этап": 143,
            "Проешедших 2-ой этап": 91,
            "Принятых": 112,
            "В ожидании": 82,
        }
    ]
    return (
        <div className={styles.BarGraphic}>
            <Text fontSize={'18px'}  >Результативность рекрутера по дням</Text>
            <ResponsiveBar
                data={data}
                keys={[
                    'Кол-во закрытых вакансий',
                    'Подавших резюме',
                    'Проешедших 1-ый этап',
                    'Проешедших 2-ой этап',
                    'Принятых',
                    'В ожидании'
                ]}
                indexBy="date"
                margin={{ top: 50, right: 0, bottom: 50, left: 0 }}

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
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                colors={({ id, data }) => {
                    // Выбираем цвет на основе имени
                    switch (id) {
                        case 'Кол-во закрытых вакансий':
                            return '#EAE7FF';
                        case 'Подавших резюме':
                            return '#E6C6FF';
                        case 'Проешедших 1-ый этап':
                            return '#FAF6C5';
                        case 'Проешедших 2-ой этап':
                            return '#FDE2BF';
                        case 'Принятых':
                            return '#A7E5F3';
                        case 'В ожидании':
                            return '#DCF9FF';
                        default:
                            return '#000'; // По умолчанию черный цвет
                    }
                }}
            />
        </div>
    );
};

export default BarGraphic;