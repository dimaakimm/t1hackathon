import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import styles from "./BarGraphic.module.scss"
const BarGraphic = () => {
    const data = [
        {
            "date": "1",
            value: 200,
            "Кол-во закрытых вакансийColor": "hsl(198, 70%, 50%)",
            "Подавших резюме": 112,
            "Подавших резюмеColor": "hsl(153, 70%, 50%)",
            "Проешедших 1-ый этап": 139,
            "Проешедших 1-ый этапColor": "hsl(134, 70%, 50%)",
            "Проешедших 2-ой этап": 91,
            "Проешедших 2-ой этапColor": "hsl(278, 70%, 50%)",
            "Принятых": 132,
            "ПринятыхColor": "hsl(106, 70%, 50%)",
            "В ожидании": 63,
            "В ожиданииColor": "hsl(23, 70%, 50%)"
        },
        {
            "date": "2",
            value: 134,
            "Кол-во закрытых вакансийColor": "hsl(326, 70%, 50%)",
            "Подавших резюме": 26,
            "Подавших резюмеColor": "hsl(198, 70%, 50%)",
            "Проешедших 1-ый этап": 193,
            "Проешедших 1-ый этапColor": "hsl(130, 70%, 50%)",
            "Проешедших 2-ой этап": 169,
            "Проешедших 2-ой этапColor": "hsl(210, 70%, 50%)",
            "Принятых": 15,
            "ПринятыхColor": "hsl(358, 70%, 50%)",
            "В ожидании": 14,
            "В ожиданииColor": "hsl(273, 70%, 50%)"
        },
        {
            "date": "3",
            value: 183,
            "Кол-во закрытых вакансийColor": "hsl(40, 70%, 50%)",
            "Подавших резюме": 16,
            "Подавших резюмеColor": "hsl(172, 70%, 50%)",
            "Проешедших 1-ый этап": 31,
            "Проешедших 1-ый этапColor": "hsl(288, 70%, 50%)",
            "Проешедших 2-ой этап": 160,
            "Проешедших 2-ой этапColor": "hsl(146, 70%, 50%)",
            "Принятых": 96,
            "ПринятыхColor": "hsl(24, 70%, 50%)",
            "В ожидании": 45,
            "В ожиданииColor": "hsl(163, 70%, 50%)"
        },
        {
            "date": "4",
            value: 16,
            "Кол-во закрытых вакансийColor": "hsl(359, 70%, 50%)",
            "Подавших резюме": 18,
            "Подавших резюмеColor": "hsl(341, 70%, 50%)",
            "Проешедших 1-ый этап": 12,
            "Проешедших 1-ый этапColor": "hsl(252, 70%, 50%)",
            "Проешедших 2-ой этап": 65,
            "Проешедших 2-ой этапColor": "hsl(236, 70%, 50%)",
            "Принятых": 26,
            "ПринятыхColor": "hsl(272, 70%, 50%)",
            "В ожидании": 115,
            "В ожиданииColor": "hsl(303, 70%, 50%)"
        },
        {
            "date": "5",
            value: 156,
            "Кол-во закрытых вакансийColor": "hsl(206, 70%, 50%)",
            "Подавших резюме": 149,
            "Подавших резюмеColor": "hsl(43, 70%, 50%)",
            "Проешедших 1-ый этап": 179,
            "Проешедших 1-ый этапColor": "hsl(196, 70%, 50%)",
            "Проешедших 2-ой этап": 198,
            "Проешедших 2-ой этапColor": "hsl(222, 70%, 50%)",
            "Принятых": 74,
            "ПринятыхColor": "hsl(48, 70%, 50%)",
            "В ожидании": 60,
            "В ожиданииColor": "hsl(319, 70%, 50%)"
        },
        {
            "date": "6",
            value: 73,
            "Кол-во закрытых вакансийColor": "hsl(48, 70%, 50%)",
            "Подавших резюме": 194,
            "Подавших резюмеColor": "hsl(187, 70%, 50%)",
            "Проешедших 1-ый этап": 89,
            "Проешедших 1-ый этапColor": "hsl(140, 70%, 50%)",
            "Проешедших 2-ой этап": 7,
            "Проешедших 2-ой этапColor": "hsl(219, 70%, 50%)",
            "Принятых": 168,
            "ПринятыхColor": "hsl(153, 70%, 50%)",
            "В ожидании": 96,
            "В ожиданииColor": "hsl(125, 70%, 50%)"
        },
        {
            "date": "7",
            value: 40,
            "Кол-во закрытых вакансийColor": "hsl(153, 70%, 50%)",
            "Подавших резюме": 156,
            "Подавших резюмеColor": "hsl(78, 70%, 50%)",
            "Проешедших 1-ый этап": 143,
            "Проешедших 1-ый этапColor": "hsl(259, 70%, 50%)",
            "Проешедших 2-ой этап": 91,
            "Проешедших 2-ой этапColor": "hsl(37, 70%, 50%)",
            "Принятых": 112,
            "ПринятыхColor": "hsl(206, 70%, 50%)",
            "В ожидании": 82,
            "В ожиданииColor": "hsl(153, 70%, 50%)"
        }
    ]
    return (
        <div className={styles.BarGraphic}>
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
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
            />
        </div>
    );
};

export default BarGraphic;