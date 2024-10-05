import React from 'react';
import styles from "./BarGraphicVacancyToDate.module.scss"
import {ResponsiveBar} from "@nivo/bar";
const BarGraphicVacancyToDate = ({...props}) => {
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
    return (
        <div className={styles.BarGraphicVacancyToDate}>
            <ResponsiveBar
                data={data}
                keys={[
                    'value',
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
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                colors={({ id, data }) => {
                    if (data.date === props.closeDate)
                        return 'hsl(198, 70%, 50%)'
                    else
                        return 'hsl(10, 70%, 70%)';
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
    );
};

export default BarGraphicVacancyToDate;