import { Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Box, Flex, Button, FormLabel, Select, Input, Checkbox } from "@chakra-ui/react";
import KanbanBoard from "../../molecules/Kanban/Kanban";
import useModal from "../../../utils/hooks/useModal";
import { useState } from "react";
import Modal from "../../atoms/Modal";
import VacancyInfo, { types } from "../../molecules/VacancyInfo/VacancyInfo";
import Title from "../../atoms/Title/Title";
import "./Tasks.scss";
import { PlusSquareIcon } from "@chakra-ui/icons";
import TicketInfo, { statuses } from "../../molecules/TicketInfo/TicketInfo";

function TasksBlock() {
  const [isShowingModal, toggleModal] = useModal();
  const [isChecked, setIsChecked] = useState(false);

  const [openVacancy, setOpenVacancy] = useState<string>();

  function clickOnVacancy(e: React.MouseEvent, vacancy: string){
    e.stopPropagation();
    setOpenVacancy(vacancy)
    toggleModal()
  }

  function clickOnCreateTask(e: React.MouseEvent, vacancy: string){
    e.stopPropagation();
    setOpenVacancy(vacancy)
    togleCreateTask()
  }

  function clickOnCreateVacancy(e: React.MouseEvent){
    e.stopPropagation();
    setOpenVacancy("Рекрутер 1")
    togleCreateVacancy()
  }

  const [isShowingCreateTask, togleCreateTask] = useModal()
  const [isShowingCreateVacancy, togleCreateVacancy] = useModal()

  const vacancies = ["Вакансия 1", "Вакансия 2", "Вакансия 3"]

  return (
    <Box mb={10}>
      <Accordion allowToggle>
        {vacancies.map((el, index) => 
          (
          <>
          {index === 0 && 
          <>
            <AccordionItem backgroundColor={"#fff"} key={-2}>
              <AccordionButton onClick={(e) => {clickOnCreateVacancy(e)}} className="accordionBtn" boxSizing={"border-box"} >
                <Flex p={3} justifyContent={"center"} flex="1" textAlign="left">
                  <PlusSquareIcon boxSize={6}/>
                </Flex>
              </AccordionButton>
            </AccordionItem>
            <AccordionItem backgroundColor={"#fff"} key={-1}>
            <AccordionButton className="accordionBtn" w={'fit-content'} flexDirection={'column'} alignItems={'start'}>
                <Flex className="filters-section" p={2}>
                <Box className="filters-title" >
                  <Title>Фильтры</Title>
                </Box>
                <Flex className="filters-block">
                  <FormLabel>По типу</FormLabel>
                  <Select placeholder="Выберите тип">
                    {types.map(el => <option value={el.type}>{el.type}</option>)}
                  </Select>
                </Flex>
                <Flex className="filters-block">
                  <FormLabel>По названию</FormLabel>
                  <Input placeholder="Название"></Input>
                </Flex>
                <Flex className="filters-checkbox">
                  <Checkbox 
                    isChecked={isChecked} 
                    onChange={(e) => setIsChecked(e.target.checked)}
                  >
                  </Checkbox>
                  <FormLabel>Отобразить закрытые</FormLabel>
                </Flex>
                </Flex >

                <Flex className="filters-section" p={2}>
                  <Box className="filters-title" >
                  <Title >Сортировка</Title>
                  </Box>

                  <Flex className="filters-block">
                    <FormLabel>По количеству тикетов в статусе</FormLabel>
                    <Select placeholder="Статус">
                      {statuses.map(el => <option value={el.status}>{el.status}</option>)}
                    </Select>
                  </Flex>

                  <Flex className="filters-block">
                    <FormLabel>По приоритету</FormLabel>
                    <Select placeholder="Приоритет">
                      <option>Сначалы высокий</option>
                      <option>Сначалы невысокий</option>
                    </Select>
                  </Flex>
                  
                {/* <Flex className="filters-block">
                  <FormLabel>По дедлайну</FormLabel>
                  <Input type="date"></Input>
                </Flex> */}
              </Flex>
            </AccordionButton>
            </AccordionItem>
          </>
          }
          <AccordionItem backgroundColor={"#fff"} key={index}>
          <AccordionButton className="accordionBtn" boxSizing={"border-box"} >
          <Flex p={1} justifyContent={"space-between"} flex="1" textAlign="left">
            <Flex onClick={(e) => clickOnVacancy(e, el)} alignItems={"center"} w={"fit-content"}>
              {el}
            </Flex>
            <Flex alignItems={"center"} gap={5}>
              <Button onClick={(e) => clickOnCreateTask(e, el)} className="accordionBtn">
                <PlusSquareIcon boxSize={6}/>
              </Button>
              <Box w={"fit-content"}>
                <AccordionIcon boxSize={6}/>
              </Box>
            </Flex>
          </Flex>
          </AccordionButton>
          <AccordionPanel>
            <KanbanBoard />
          </AccordionPanel>
        </AccordionItem>
        </>
        )
        )}
      </Accordion>

      <Modal show={isShowingCreateTask} onCloseButtonClick={togleCreateTask} >
        {openVacancy ? <TicketInfo isCreating={true} vacancyId={openVacancy}/> : <></>}
      </Modal>

      <Modal show={isShowingCreateVacancy} onCloseButtonClick={togleCreateVacancy}>
        <VacancyInfo isCreating={true} vacancyId={openVacancy}/>
      </Modal>

      <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
        {openVacancy ? <VacancyInfo vacancyId={openVacancy}/> : <></>}
      </Modal>
    </Box>
  );
}

export default TasksBlock;
