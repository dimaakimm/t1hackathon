import React from 'react';
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import TasksBlock from '../Tasks/Tasks';
import { PlusSquareIcon } from '@chakra-ui/icons';

interface IRecruter {
    id: number;
    name: string;
}

const AdminTasks: React.FC = () => {
    const hrs: IRecruter[] = [
        { id: 1, name: "Рекрутер 1" },
        { id: 2, name: "Рекрутер 2" },
        { id: 3, name: "Рекрутер 3" }
    ];

    return (
        <Tabs>
            <TabList>
                {hrs.map((el, index) => 
                    <>
                    <Tab key={el.id}>{el.name}</Tab>
                    {index === hrs.length-1 && 
                        <Tab key={el.id}>
                            <Flex justifyContent={"center"} flex="1" textAlign="left">
                                <PlusSquareIcon boxSize={6}/>
                            </Flex>
                        </Tab>
                    }
                    </>
                )}
            </TabList>
            <TabPanels>
                {hrs.map(el => 
                    <TabPanel key={el.id}>
                        <TasksBlock/> {/* Закрывающий тег добавлен */}
                    </TabPanel>
                )}
            </TabPanels>
        </Tabs>
    );
};

export default AdminTasks;
