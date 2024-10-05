import { Box, Button, Flex, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { BellIcon, CloseIcon } from "@chakra-ui/icons";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

interface VacancyInfoProps {
    isCreating?: boolean;
    recruterId?: string;
    vacancyId?: string;
}

export interface IVacancyType{
    type: string
}
export const types: IVacancyType[] = [
    { type: "Hr" },
    { type: "Frontend" },
    { type: "Backend" },
    { type: "ML" },
    { type: "FullStask" }
];

const TicketInfo = ({ isCreating = false, recruterId, vacancyId }: VacancyInfoProps) => {



    return (
        <p>
            {isCreating &&
                <Flex w={600} flexDirection={"column"} gap={4}>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <BellIcon boxSize={6} color={"green.100"}/>
                        <CloseIcon boxSize={4}/>
                    </Flex>
                    <Input placeholder="Название вакансии"></Input>
                    <Flex justifyContent={"space-between"} gap={20}>
                        <Box w={"40%"}>
                            <FormLabel>Тип вакансии</FormLabel>
                            <Select placeholder="Выберите тип">
                                {types.map(el => <option value={el.type}>{el.type}</option>)}
                            </Select>
                        </Box>
                        <Box w={"40%"}>
                            <FormLabel>Дедлайн</FormLabel>
                            <Input type="date"></Input>
                        </Box>

                    </Flex>

                    <Box>
                        <FormLabel>Описание</FormLabel>
                        <Textarea rows={7}></Textarea>
                    </Box>
                    <Flex justifyContent={"end"}>
                        <PrimaryButton>Сохранить</PrimaryButton>
                    </Flex>
                </Flex>

            }
        </p>
    );
};

export default TicketInfo;