import {Box, Button, Flex, FormLabel, Input, Select, Text, Textarea} from "@chakra-ui/react";
import "./TicketInfo.scss";
import { BellIcon, CloseIcon } from "@chakra-ui/icons";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PriorityButton from "../../atoms/PrioritytButton/PrioritytButton";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Title from "../../atoms/Title/Title.tsx";

interface TicketInfoProps {
    isCreating?: boolean;
    ticketId?: string;
    vacancyId?: string;
}

export interface IStatus {
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

    useEffect(() => {
        console.log(vacancyId)
        console.log(isCreating)
        if (isCreating==false) {
                const fetchedData = {
                    title: "candidate-1",
                    type: "Frontend",
                    deadline: "2024-12-31",
                    description: "Конкретный текст описывающий вкратце кандидата"
                };
                formik.setValues({
                    fullName: fetchedData.title,
                    status: statuses[0].status,
                    resume: '',
                    priority: 2,
                    description: fetchedData.description
                });
        }
    }, [isCreating]);

    const [priority, setPriority] = useState<number>(0);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            status: '',
            resume: '',
            priority: 0, 
            description: ''
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            // Логика для отправки данных формы
        }
    });

    const handlePriorityChange = (newPriority: number) => {
        formik.setFieldValue('priority', newPriority);  // Обновляем значение priority в форме
    };

    return (
        <p>
            {true ? 
                <form onSubmit={formik.handleSubmit}>
                    <Flex w={600} flexDirection={"column"} gap={4}>
                        <Flex justifyContent={"space-between"} alignItems={"center"}>
                            <PriorityButton 
                            count={formik.values.priority} 
                            setCount={handlePriorityChange}></PriorityButton>
                            <CloseIcon boxSize={4}/>
                        </Flex>

                        <Input
                            borderColor={'#5f5fff'}
                            name="fullName"
                            placeholder="ФИО"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                        />

                        <Select
                            borderColor={'#5f5fff'}
                            name="status" 
                            placeholder="Выберите статус"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                        >
                            {statuses.map(el => <option key={el.status} value={el.status}>{el.status}</option>)}
                        </Select>


                        <Box mt={5}>
                        <FormLabel>Файл резюме</FormLabel>
                        <Input
                            borderColor={'#5f5fff'}
                            name="resume"

                            mb={6} 
                            type="file" 
                            onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files?.[0]?.name)}
                        />
                        </Box>
                        <Box mt={2}>
                            <FormLabel>Описание</FormLabel>
                            <Textarea
                                borderColor={'#5f5fff'}
                                name="description"
                                rows={7}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </Box>
                        <Box mt={3}>
                            <Text cursor={'pointer'} fontSize={'24px'} color={'#5F5FFF'}>Сгенерировать</Text>
                        </Box>

                        <Flex justifyContent={"end"}>
                            <PrimaryButton type="submit">Сохранить</PrimaryButton>
                        </Flex>
                    </Flex>
                </form>
            : 
                `Информация о тикете ${ticketId}`
            }
        </p>
    );
};

export default TicketInfo;
