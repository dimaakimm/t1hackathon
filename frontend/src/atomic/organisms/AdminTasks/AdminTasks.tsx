import React from 'react';
import {Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import TasksBlock from '../Tasks/Tasks';
import { PlusSquareIcon } from '@chakra-ui/icons';
import Title from "../../atoms/Title/Title.tsx";

interface IRecruter {
    id: number;
    name: string;
}

const AdminTasks: React.FC = () => {
    const hrs: IRecruter[] = [
        { id: 0, name: "Рекрутер 1" },
        { id: 1, name: "Рекрутер 2" },
        { id: 2, name: "Рекрутер 3" }
    ];

    return (
        <Box backgroundColor='white' p={'30px'} borderRadius='30px'>
            <Title paddingBottom='40px' fontSize='30px'>Вакансии</Title>
            <Tabs>
                <TabList borderBottom='3px solid #5F5FFF'>
                    {hrs.map((el, index) =>
                        <>
                        <Tab mr={4} p={0} key={el.id}>{el.name}</Tab>
                        {index === hrs.length-1 &&
                            <Tab key={el.id}>
                                <Flex justifyContent={"center"} flex="1" textAlign="left">
                                    <PlusSquareIcon color='#5F5FFF'  boxSize={6}/>
                                </Flex>
                            </Tab>
                        }
                        </>
                    )}
                </TabList>
                <TabPanels >
                    {hrs.map(el =>
                        <TabPanel key={el.id} p={0}>
                            <TasksBlock recruterId={el.id}/> {/* Закрывающий тег добавлен */}
                        </TabPanel>
                    )}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default AdminTasks;
