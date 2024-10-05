import React from 'react';
import { Text, TextProps } from "@chakra-ui/react";
const Title = (props: Readonly<TextProps>) => {
    return (
        <Text
            w="full"
            color="#343b4c"
            fontSize="24px"
            lineHeight="28px"
            fontWeight={500}
            {...props}
        >
            {props.children}
        </Text>
    );
};

export default Title;