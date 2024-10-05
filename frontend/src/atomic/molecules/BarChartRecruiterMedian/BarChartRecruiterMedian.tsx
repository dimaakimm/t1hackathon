import React from 'react';
import styles from './BarChartRecruiterMedian.module.scss'
import {ResponsiveBar} from "@nivo/bar";
const BarChartRecruiterMedian = ({...props}) => {
    const data = [
        {
            "name": "Michael",
            "id":234,
            value: 20,
        },
        {
            "name": "Oleg",
            "id":3,
            value: 34,
        },
        {
            "name": "Maria",
            "id":74,
            value: 13,
        },{
            "name": "Petr",
            "id":24,
            value: 28,
        },
        {
            "name": "Igor",
            "id":13,
            value: 13,
        },
        {
            "name": "Daria",
            "id":744,
            value: 3,
        },

    ]
    return (
        <div className={styles.BarChartRecruiterMedian}>
            <ResponsiveBar
                data={data}
                keys={[
                    'value',
                ]}
                indexBy="name"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                layout="horizontal"
                colors={({ id, data }) => {
                   if (data.id === props.recruiter?.id)
                       return 'hsl(198, 70%, 50%)'
                    else
                       return 'hsl(10, 70%, 70%)';
                }}
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
                    legend: 'Медианный срок закрытия',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0
                }}

                labelSkipWidth={12}
                labelSkipHeight={12}

                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
                onClick={(nodeData, e) => {
                    if (nodeData?.data.id === props.recruiter?.id) {
                        props.setRecruiter(null)
                    }
                    else {
                        props.setRecruiter({
                            id: nodeData.data.id,
                            name: nodeData.data.name,
                        })
                    }
                }}
            />
        </div>
    );
};

export default BarChartRecruiterMedian;