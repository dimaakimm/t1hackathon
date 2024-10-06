import React from 'react';
import styles from './FunnelGraphic.module.scss';
import {ResponsiveFunnel} from "@nivo/funnel";
import {Box, Text} from "@chakra-ui/react";
import { IFunnelChartData } from '../../../api/Graphic/types';


interface FunnelGraphicProps {
    dataBack: IFunnelChartData[];
}

const FunnelGraphic: React.FC<FunnelGraphicProps> = ({ dataBack }) => {
    const data = [
        {
            id: "all",
            value: 65361,
            label: "Кандидатов всего"
        },
        {
            "id": "interview_passed",
            "value": 40605,
            "label": "Прошедших интервью"
        },
        {
            "id": "first_stage_passed",
            "value": 36201,
            "label": "Прошедших 1-ый этап"
        },
        {
            "id": "second_stage_passed",
            "value": 25597,
            "label": "Прошедших 2-ой этап"
        },
        {
            "id": "applied",
            "value": 20356,
            "label": "Принятых на работу"
        }
    ]
  return dataBack && (
    <Box className={styles.FunnelGraphic}>
        <Text fontSize={'18px'} pb={'10px'} pl={'15px'}>Воронка подбора</Text>
        <ResponsiveFunnel
            data={dataBack}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            valueFormat=">-.4s"
            /*colors={{ scheme: 'spectral' }}*/
            borderWidth={20}
           /* labelColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        3
                    ]
                ]
            }}*/
            beforeSeparatorLength={100}
            beforeSeparatorOffset={20}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
            colors={({ id }) => {
                // Выбираем цвет на основе имени
                switch (id) {
                    case 'all':
                        return '#E6C6FF';
                    case 'review':
                        return '#EAE7FF';
                    case 'interview1':
                        return '#FAF6C5';
                    case 'interview2':
                        return '#FAF6C5';
                    case 'offer':
                        return '#FDE2BF';
                    case 'accepted':
                        return '#A7E5F3';

                    default:
                        return '#000'; // По умолчанию черный цвет
                }
            }}
        />
    </Box>
  );
};

export default FunnelGraphic;