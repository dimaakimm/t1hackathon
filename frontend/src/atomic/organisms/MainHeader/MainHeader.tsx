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
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <Text fontSize='2xl' className={styles.userName}>{userName}</Text>
                    <Text fontSize='2xl' className={styles.userSurname}>{userSurname}</Text>
                </div>
                <div className={styles.exitBtn}>
                    <Button p={0} mr={5} w={110} h={'35px'} borderRadius={'7.5px'} backgroundColor='#5F5FFF' color="white" gap={15}>
                        Выход
                        <img src="../../../../public/arrow.svg" alt="exitBtn"/>
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default MainHeader;