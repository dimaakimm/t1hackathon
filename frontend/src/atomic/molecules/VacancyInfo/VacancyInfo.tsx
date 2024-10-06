import { Box, Button, Flex, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { BellIcon, CloseIcon } from "@chakra-ui/icons";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import PriorityButton from "../../atoms/PrioritytButton/PrioritytButton";

interface VacancyInfoProps {
    isCreating?: boolean;
    recruterId?: string;
    vacancyId?: string;
}

export interface IVacancyType {
    direction: string
}

export const direction: IVacancyType[] = [
    { direction: "Hr" },
    { direction: "Frontend" },
    { direction: "Backend" },
    { direction: "ML" },
    { direction: "FullStack" }
];

const VacancyInfo = ({ isCreating = false, recruterId, vacancyId }: VacancyInfoProps) => {

    useEffect(() => {
        console.log(vacancyId)
        if (vacancyId) {
                const fetchedData = {
                    title: "vacancy-1-1",
                    type: "Frontend",
                    deadline: "2024-12-31",
                    description: "Описание вакансии"
                };
                formik.setValues({
                    title: fetchedData.title,
                    type: fetchedData.type,
                    deadline: fetchedData.deadline,
                    priority: 2,
                    description: fetchedData.description
                });
        }
    }, [vacancyId]);

    const formik = useFormik({
        initialValues: {
            title: '',
            type: '',
            deadline: '',
            priority: 0,
            description: ''
        },
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            // здесь можно добавить логику для отправки данных
        }
    });

    const [priority, setPriority] = useState<number>(0);

    return (
        <p>
                <form onSubmit={formik.handleSubmit}>
                    <Flex w={600} flexDirection={"column"} gap={4}>
                        <Flex justifyContent={"space-between"} alignItems={"center"}>
                            <PriorityButton count={priority} setCount={setPriority}></PriorityButton>
                            <CloseIcon boxSize={4} />
                        </Flex>

                        <Input
                            borderColor={'#5f5fff'}
                            name="title"
                            placeholder="Название вакансии"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />

                        <Flex justifyContent={"space-between"} gap={20}>
                            <Box w={"40%"}>
                                <FormLabel>Тип вакансии</FormLabel>
                                <Select
                                    borderColor={'#5f5fff'}
                                    name="type"
                                    placeholder="Выберите тип"
                                    value={formik.values.type}
                                    onChange={formik.handleChange}
                                >
                                    {direction.map(el => <option key={el.direction} value={el.direction}>{el.direction}</option>)}
                                </Select>
                            </Box>
                            <Box w={"40%"}>
                                <FormLabel>Дедлайн</FormLabel>
                                <Input
                                    borderColor={'#5f5fff'}
                                    name="deadline"
                                    type="date"
                                    value={formik.values.deadline}
                                    onChange={formik.handleChange}
                                />
                            </Box>
                        </Flex>

                        <Box>
                            <FormLabel>Описание</FormLabel>
                            <Textarea
                                borderColor={'#5f5fff'}
                                name="description"
                                rows={7}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </Box>

                        <Flex justifyContent={"end"}>
                            <PrimaryButton type="submit">Сохранить</PrimaryButton>
                        </Flex>
                    </Flex>
                </form>
        </p>
    );
};

export default VacancyInfo;
