import { Box, Button, Flex, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import "./TicketInfo.scss"
import { BellIcon, CloseIcon } from "@chakra-ui/icons";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

interface TicketInfoProps {
    isCreating?: boolean;
    ticketId?: string;
    vacancyId?: string;
}

export interface IStatus{
    status: string
}

export const statuses: IStatus[] = [
    { status: "Рассмотрение" },
    { status: "Собеседование 1" },
    { status: "Собеседование 2" },
    { status: "Оффер" },
    { status: "Принят" }
];

const TicketInfo = ({ isCreating = false, ticketId, vacancyId }: TicketInfoProps) => {

    return (
        <p>
            {isCreating ? 
                <Flex w={600} flexDirection={"column"} gap={4}>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <BellIcon boxSize={6} color={"green.100"}/>
                        <CloseIcon boxSize={4}/>
                    </Flex>
                    <Input placeholder="ФИО"></Input>
                    <Select placeholder="Выберите статус">
                        {statuses.map(el => <option value={el.status}>{el.status}</option>)}
                    </Select>
                    Файл резюме: <Input mb={6} type="file"></Input>
                    <Flex flexDirection={"column"} gap={6} h={250} overflow={"auto"}>
                        {statuses.map( (status) => 
                            <Box>
                                <FormLabel>{status.status}</FormLabel>
                                <Textarea></Textarea>
                            </Box>
                        )}

                    </Flex>
                    <Flex justifyContent={"end"}>
                        <PrimaryButton>Сохранить</PrimaryButton>
                    </Flex>
                </Flex>
                 :
                `Информация о тикете ${ticketId}`
            }
        </p>
    );
};

export default TicketInfo;