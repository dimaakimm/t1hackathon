import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Grid, Flex } from '@chakra-ui/react';
import useModal from '../../../utils/hooks/useModal';
import Modal from '../../atoms/Modal';
import TicketInfo from '../TicketInfo/TicketInfo';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import "./Kanban.scss"
import { getTickets } from '../../../api/kanban/index';
import { priorityColors } from '../../atoms/PrioritytButton/PrioritytButton';

interface Task {
  id: string;
  name: string;
}

interface TaskState {
  colomns: Column[]
}

interface Column{
  status: string,
  id: string,
  activeTasks:Task[]
  disabledTasks:Task[]
}

function KanbanBoard(props: {vacancyId: string}) {

  const [isShowingModal, toggleModal] = useModal();
  const [backTasks, setBackTasks] = useState<TaskState>();

  const [openTask, setOpenTask] = useState<string>();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await getTickets(props.vacancyId);
        if (response?.data) {
          setBackTasks(response?.data)
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, [])

  function abc(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash + str.charCodeAt(i)) % 4; // Ограничиваем результат числами от 0 до 3
    }
    return hash;
  }

  const onDragEnd = async (result: any) => {
    const { source, destination } = result;
    const newStatus = destination.droppableId.split("-")[0]
    const ticketId = result.draggableId

    if (!destination) {
      return; // Если задачу уронили за пределы допустимых зон.
    }

    const url = `http://localhost:8090/status/change/${ticketId}`;

  try {
    // Отправляем запрос методом PUT
    const response = fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });

    // const data = await response.json();
    // console.log('Status updated successfully', data);
    if(backTasks){
      const sourceColumnIndex = backTasks.colomns.findIndex(
        (column) => `${column.status}-active` === source.droppableId || `${column.status}-disabled` === source.droppableId
      );
    
      const destinationColumnIndex = backTasks.colomns.findIndex(
        (column) => `${column.status}-active` === destination.droppableId || `${column.status}-disabled` === destination.droppableId
      );
    
      const sourceColumn = backTasks.colomns[sourceColumnIndex];
      const destinationColumn = backTasks.colomns[destinationColumnIndex];
    
      const sourceTasks =
        source.droppableId.includes("active") ? sourceColumn.activeTasks : sourceColumn.disabledTasks;
    
      const destinationTasks =
        destination.droppableId.includes("active") ? destinationColumn.activeTasks : destinationColumn.disabledTasks;
    
      const [movedTask] = sourceTasks.splice(source.index, 1);
    
      destinationTasks.splice(destination.index, 0, movedTask);
    
      // Обновляем состояние
      const updatedColumns = backTasks.colomns.map((column, index) => {
        if (index === sourceColumnIndex) {
          return {
            ...column,
            activeTasks: column === sourceColumn && source.droppableId.includes("active") ? sourceTasks : column.activeTasks,
            disabledTasks: column === sourceColumn && source.droppableId.includes("disabled") ? sourceTasks : column.disabledTasks,
          };
        } else if (index === destinationColumnIndex) {
          return {
            ...column,
            activeTasks:
              column === destinationColumn && destination.droppableId.includes("active")
                ? destinationTasks
                : column.activeTasks,
            disabledTasks:
              column === destinationColumn && destination.droppableId.includes("disabled")
                ? destinationTasks
                : column.disabledTasks,
          };
        }
        return column;
      });
    
      setBackTasks({ colomns: updatedColumns });
    }
  } catch (error) {
    console.error('Error updating status:', error);
  }

    // const data = await fetch()
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid templateColumns="repeat(5, 1fr)" p={2}>
          {backTasks?.colomns?.filter(el => el.status != "all").map((column, columnIndex) => (
            <Box className='kanban-column' key={columnIndex} w="100%"  rounded="md" >
              <Heading
                size="md"
                m={"24px 0"}
                fontWeight={400}
                fontSize={"20px"}
                pb={2}
                ml={"30px"}
              >
                {column.status}
              </Heading>

              {/* Секция активных задач */}
              <Droppable droppableId={`${column.status}-active`} >
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    h={600}
                    p={"0 30px"}
                    borderBottom={"1.5px solid #EBEBEB"}
                    borderRight={"1.5px solid #EBEBEB"}
                    overflowY='auto'
                    className='kanban-bordered-box'
                  >
                    {column.activeTasks.map((task, taskIndex) => (
                      <Draggable key={task.id} draggableId={String(task.id)} index={taskIndex}>
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
                            bg="white"
                            rounded="md"
                            className='draggable ticket'
                            shadow="md"
                            h={134}
                            position='relative'
                            backgroundColor={priorityColors[abc(task.name)]}
                          >
                            <Text mb={"5px"} fontSize={'14px'}>{task.name}</Text>
                            <Text borderTop='1px solid #DDDDDD' paddingTop='10px' maxH='220px'>Конкретный текст описывающий вкратце кандидата</Text>
                            <Text color={'#A2A2A2'} position='absolute' bottom='10px'>Дедлайн: 05.07.24</Text>
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>

              {/* Секция отключённых задач */}
              <Droppable droppableId={`${column.status}-disabled`}>
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    h={300}
                    mb={4}
                    overflowY='auto'
                    borderRight={"1.5px solid #EBEBEB"}
                    p={"0 30px"}
                    className='kanban-bordered-box'
                    pt={"20px"}
                  >
                    {column.disabledTasks.map((task, taskIndex) => (
                      <Draggable key={task.id} draggableId={String(task.id)} index={taskIndex}>
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
                                bg="white"
                                rounded="md"
                                shadow="md"
                                className='draggable ticket'
                                h={134}
                                position='relative'
                                backgroundColor={priorityColors[abc(task.name)]}
                            >
                              <Text mb={"5px"} fontSize={'14px'}>{task.name}</Text>
                              <Text borderTop='1px solid #DDDDDD' paddingTop='10px' maxH='220px'>Конкретный текст описывающий вкратце кандидата</Text>
                              <Text color={'#A2A2A2'} position='absolute' bottom='10px'>Дедлайн: 05.07.24</Text>
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
