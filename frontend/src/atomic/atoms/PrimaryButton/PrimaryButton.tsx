import React from 'react';
import {Button, ButtonProps} from "@chakra-ui/react";

const PrimaryButton = (props: Readonly<ButtonProps>) => {
    return (
        <Button
            px={2}
            py={1}
            fontWeight={500}
            colorScheme={"blue"}
            _disabled={{ color: "#8089A2", bg: "#E3E7EF", pointerEvents: "none" }}
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default PrimaryButton;