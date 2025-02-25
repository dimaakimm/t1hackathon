import React from 'react';
import { Button, ButtonProps } from "@chakra-ui/react";
import arrow1 from "/src/assets/images/Vector.svg"
import "./PriorityButton.scss"
export const priorityColors = ["#F7F9FC", "#F1F1FF", "#DDDDFF", "#C9C9FF"]

interface PriorityButtonProps extends ButtonProps {
    count: number;
    setCount: (newCount: number) => void;
}

const PriorityButton: React.FC<PriorityButtonProps> = (props) => {
    const { count, setCount, ...buttonProps } = props;

    const numberArray = Array.from({ length: count }, (_, index) => index + 1);

    return (
        <Button
            px={0}
            py={1}
            mr={2}
            fontWeight={500}
            onClick={(e) => setCount((count+1) % 4)}
            // backgroundColor={"#fff"}
            className='btn'
            // _disabled={{ color: "#8089A2", bg: "#E3E7EF", pointerEvents: "none" }}
            {...buttonProps}
        >
            Важность: {numberArray.map((el, index) => 
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.59L5.1 6.80001L0 0.0100098H11.05C11.3192 0.0100098 11.5742 0.0702708 11.815 0.190793C12.0558 0.311316 12.2542 0.477388 12.41 0.68901L17 6.80001L12.41 12.911C12.2542 13.1232 12.0558 13.2895 11.815 13.4101C11.5742 13.5306 11.3192 13.5906 11.05 13.59H0Z" fill={priorityColors[el]}/>
                    </svg>
            )}
        </Button>
    );
};

export default PriorityButton;
