import React, {useMemo} from 'react';
import styles from './BarChartRecruiterMedian.module.scss'
import {ResponsiveBar} from "@nivo/bar";
import {Text} from "@chakra-ui/react";
import { IBarChartRecruiterMedian } from '../../../api/Graphic/types';
import { Recruiter } from '../../organisms/MainGraphics/MainGraphics';

interface BarChartRecruiterMedianData {
    dataBack: IBarChartRecruiterMedian[];
    recruiter: Recruiter | null;
    setRecruiter: React.Dispatch<React.SetStateAction<Recruiter | null>>;
}

const BarChartRecruiterMedian: React.FC<BarChartRecruiterMedianData> = (props) => {
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
    return props.dataBack && (
        <div className={styles.BarChartRecruiterMedian}>
            <Text fontSize={'18px'}  >Медианный срок закрытия вакансий по рекрутерам</Text>

            <ResponsiveBar
                data={props.dataBack}
                keys={[
                    'value',
                ]}
                indexBy="name"
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                layout="horizontal"
                colors={({ id, data }) => {
                   if (data.id === props.recruiter?.id)
                       return '#E6C6FF'
                    else
                       return `rgba(174, 174, 255,${data.value/maxValue > 0.3 ? data.value/maxValue : 0.3})`
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
                    console.log("click")
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