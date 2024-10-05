import React from 'react';
import styles from './FunnelGraphic.module.scss';
import {ResponsiveFunnel} from "@nivo/funnel";

const FunnelGraphic: React.FC = () => {
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
  return (
    <div className={styles.FunnelGraphic}>
      {/* <h2>Воронка подбора</h2> */}
        <ResponsiveFunnel
            data={data}
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
        />
    </div>
  );
};

export default FunnelGraphic;