import { Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Box, Flex, Button, FormLabel, Select, Input, Checkbox } from "@chakra-ui/react";
import KanbanBoard from "../../molecules/Kanban/Kanban";
import useModal from "../../../utils/hooks/useModal";
import { useEffect, useState } from "react";
import Modal from "../../atoms/Modal";
import VacancyInfo, { direction } from "../../molecules/VacancyInfo/VacancyInfo";
import Title from "../../atoms/Title/Title";
import "./Tasks.scss";
import { PlusSquareIcon , Text} from "@chakra-ui/icons";
import TicketInfo, { statuses } from "../../molecules/TicketInfo/TicketInfo";
import { getVacancies } from "../../../api/kanban/index";
import { IVacancy } from "../../../api/Kanban/types";
import { priorityColors } from "../../atoms/PrioritytButton/PrioritytButton";

function TasksBlock({recruterId}) {

  const [openIndex, setOpenIndex] = useState<number | null>(null); // индекс открытого элемента

  function handleAccordionChange(index: number | null) {
    if (index === openIndex) {
      setOpenIndex(null); // если кликнули на уже открытый элемент, закроем его
    } else {
      setOpenIndex(index); // устанавливаем индекс открытого элемента
    }
  }

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

  const [vacancies, setVacancies] = useState<IVacancy[]>([])
  const [filteredVacanies, setFilteredVacancies] = useState<IVacancy[]>([])

  const [fDirection, setFDirection] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [isShowClose, setIsShowClose] = useState<boolean>(false);
  const [ isAscPriorite, setIsAscPriorite] = useState<boolean>(false);

  function abc(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash + str.charCodeAt(i)) % 4; // Ограничиваем результат числами от 0 до 3
    }
    return hash;
  }

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await getVacancies(recruterId);
        if (response?.data?.vacancyDtoList) {
          setVacancies(response.data.vacancyDtoList);
        }
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };

    fetchVacancies();
  }, [recruterId]); 

  useEffect(() => {
    var tempV = [...vacancies]
    if(fDirection){
      tempV = tempV.filter(el => el.direction == fDirection)
    }
    if(search){
      tempV = tempV.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if(!isShowClose){
      tempV = tempV.filter(el => !el.isOpen==isShowClose)
    }
    // console.log(isShowClose, tempV)


    setFilteredVacancies(tempV)

  }, [vacancies, fDirection, search, isShowClose])

  return (
    <Box mb={10}>
      <Accordion allowToggle onChange={(index:number) => handleAccordionChange(index)}>
        <AccordionItem backgroundColor={"#fff"} key={-2}>
          <AccordionButton onClick={(e) => {clickOnCreateVacancy(e)}} className="accordionBtn" boxSizing={"border-box"} >
            <Flex p={3} justifyContent={"center"} flex="1" textAlign="left">
              <PlusSquareIcon color={'#5f5fff'} boxSize={6}/>
            </Flex>
          </AccordionButton>
        </AccordionItem>
        <AccordionItem backgroundColor={"#fff"} key={-1} p={0}>
          <AccordionButton p={0} className="accordionBtn" w={'fit-content'} flexDirection={'row'} alignItems={'start'}>
            <Flex className="filters-section"   display={'flex'} flexDirection={'column'} mr={'112px'}  width={'532px'} >
              <Box className="filters-title" pt={'10px'}>
                <Title>Фильтры</Title>
              </Box>

              <Flex  className="filters-block" display={'flex'} flexWrap={'wrap'} maxH={'100px'} p={0}>
                <FormLabel>По типу</FormLabel>
                <Select
                    onChange={(e) => setFDirection(e.target.value)}
                    placeholder="Выберите тип">
                  {direction.map(el => <option value={el.direction}>{el.direction}</option>)}
                </Select>
              </Flex>
              <Flex className="filters-block" >
                <FormLabel>По названию</FormLabel>
                <Input
                    value={search ? search : ""}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Название"></Input>
              </Flex>
              <Flex className="filters-checkbox">
                <Checkbox
                    isChecked={isShowClose}
                    onChange={(e) => setIsShowClose(e.target.checked)}
                >
                </Checkbox>
                <FormLabel mt={'104px'}>Отобразить закрытые</FormLabel>
              </Flex>
            </Flex >

            <Flex className="filters-section" flexDirection={'column'} p={0}>
              <Box className="filters-title" pt={'10px'}>
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

        {filteredVacanies.map((el, index) => 
          (
          <>
          <AccordionItem backgroundColor={"#fff"} borderRadius={'15px'} my={4} key={index} style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
          <AccordionButton className="accordionBtn" borderRadius={'15px'} boxSizing={"border-box"} py={0} px={0}>
          <Flex backgroundColor={priorityColors[abc(el.name)]} pl={'30px'} pr={"30px"} py={'15px'} borderRadius={'15px'} justifyContent={"space-between"} flex="1" textAlign="left" >
            <Flex  onClick={(e) => clickOnVacancy(e, el.id)} alignItems={"center"} w={"fit-content"}>
              {el.name}
            </Flex>
            <Flex alignItems={"center"} gap={5}>
            <Button bg={'transperent'} onClick={(e) => clickOnCreateTask(e, el.id)} className="accordionBtn" bgColor={"transparent !important"}>
            <Text color='#5F5FFF'>Добавить...</Text>
            </Button>
            <Button bg={'transperent'} onClick={(e) => clickOnCreateTask(e, 1)} className="accordionBtn" bgColor={"transparent !important"}>
                  <Text color='#5F5FFF'>Закрыть...</Text>
            </Button>
            <Box w={"fit-content"}>
              <AccordionIcon  boxSize={6}/>
            </Box>
            </Flex>
          </Flex>
          </AccordionButton>
          <AccordionPanel p={0}>
            <KanbanBoard vacancyId={el.id} />
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
        <VacancyInfo isCreating={true} recruterId={openVacancy}/>
      </Modal>

      <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
        {openVacancy ? <VacancyInfo vacancyId={openVacancy}/> : <></>}
      </Modal>
    </Box>
  );
}

export default TasksBlock;
