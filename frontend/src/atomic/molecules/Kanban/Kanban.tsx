import React, { useState } from 'react';
import { Box, Heading, Text, Grid, Flex } from '@chakra-ui/react';
import useModal from '../../../utils/hooks/useModal';
import Modal from '../../atoms/Modal';
import TicketInfo from '../TicketInfo/TicketInfo';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import "./Kanban.scss"

interface Task {
  id: string;
  content: string;
}

interface TaskState {
  columns: Column[]
}

interface Column{
  status: {
    status: string,
    id: number,
  }
  activeTasks:Task[]
  disabledTasks:Task[]
}

const initialTasks: TaskState = {
  columns: [
    {
      status: {
        status: 'To Do',
        id: 1
      },
      activeTasks: [
        { id: '1', content: 'Task 1' },
        { id: '2', content: 'Task 2' }
      ],
      disabledTasks: [
        { id: '6', content: 'Disabled Task 1' },
        { id: '7', content: 'Disabled Task 1' },
        { id: '8', content: 'Disabled Task 1' },
        { id: '9', content: 'Disabled Task 1' }
      ]
    },
    {
      status: {
        status: 'In Progress',
        id: 2
      },
      activeTasks: [
        { id: '3', content: 'Task 3' },
        { id: '4', content: 'Task 4' }
      ],
      disabledTasks: []
    },
    {
      status: {
        status: 'Done',
        id: 3
      },
      activeTasks: [
        { id: '5', content: 'Task 5' }
      ],
      disabledTasks: []
    }
  ]
};


function KanbanBoard() {
  const [tasks] = React.useState<TaskState>(initialTasks);
  const [isShowingModal, toggleModal] = useModal();

  const [openTask, setOpenTask] = useState<string>();

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    console.log(source, destination)
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {tasks.columns.map((column, columnIndex) => (
            <Box key={columnIndex} w="100%" bg="gray.100" p={4} rounded="md">
              <Heading
                size="md"
                mb={4}
                borderBottom="2px solid"
                borderColor="gray.300"
                pb={2}
              >
                {column.status.status}
              </Heading>

              {/* Секция активных задач */}
              <Droppable droppableId={`${columnIndex}-active`}>
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    h={400}
                    mb={4}
                    borderBottom="2px solid"
                    borderColor="gray.300"
                  >
                    {column.activeTasks.map((task, taskIndex) => (
                      <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => {
                              setOpenTask(task.id);
                              toggleModal();
                            }}
                            mb={4}
                            p={4}
                            bg="white"
                            rounded="md"
                            shadow="md"
                            className='draggable'
                          >
                            <Text>{task.content}</Text>
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>

              {/* Секция отключённых задач */}
              <Droppable droppableId={`${columnIndex}-disabled`}>
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    h={100}
                    mb={4}
                  >
                    {column.disabledTasks.map((task, taskIndex) => (
                      <Draggable key={task.id} draggableId={task.id} index={taskIndex}>
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => {
                              setOpenTask(task.id);
                              toggleModal();
                            }}
                            mb={4}
                            p={4}
                            bg="white"
                            rounded="md"
                            shadow="md"
                            className='draggable'
                          >
                            <Text>{task.content}</Text>
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          ))}
        </Grid>
      </DragDropContext>
    <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
      {openTask ? <TicketInfo ticketId={openTask}/> : <></>}
    </Modal>
    </>
  );
}

export default KanbanBoard;
