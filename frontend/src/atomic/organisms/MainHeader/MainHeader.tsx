import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {CloseIcon, MenuItem, Text} from '@chakra-ui/icons'

import styles from "./MainHeader.module.scss"
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton.tsx";
import {Box, Button} from "@chakra-ui/react";
const MainHeader = () => {
    const [userName, setUserName] = useState<string>('userName');
    const [userSurname, setuserSurname] = useState<string>('userSurname');


    return (
        <Box mb={10} className={styles.header}>
            <div className={styles.headerLeft}>
                <Text fontSize='2xl' className={styles.userName}>{userName}</Text>
                <Text fontSize='2xl' className={styles.userSurname}>{userSurname}</Text>
            </div>
            <div className={styles.exitBtn}>
                <Button p={0} m={0} bg="none" backgroundColor='tomato' color="white">
                    <CloseIcon m={1}/>
                </Button>
            </div>
        </Box>
    );
};

export default MainHeader;