// src/components/LoginPage.tsx

import React from 'react';
import { MainGraphics } from '../../organisms/MainGraphics';
import MainHeader from "../../organisms/MainHeader/MainHeader.tsx";
import {Flex} from "@chakra-ui/react";
import TasksBlock from '../../organisms/Tasks/Tasks.tsx';
import "./MainPage.scss";
import AdminTasks from '../../organisms/AdminTasks/AdminTasks.tsx';
import Title from '../../atoms/Title/Title.tsx';

const MainPage: React.FC = () => {



  return (
    <main>
        <MainHeader />
        <AdminTasks>
        </AdminTasks>
        {/* <TasksBlock /> */}
        <Flex overflowY="scroll" maxH="100%" direction="column" gap={4}>
            <MainGraphics/>
        </Flex>
    </main>
  );
};

export default MainPage;
