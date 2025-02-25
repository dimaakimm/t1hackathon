# README
Хакатон: "Хакатон Т1: Нижний Новгород"
Команда: "Мы Вместе"
Трек: "HR-монитор: управление эффективностью"
## Demo
A live demo of the HR-monitoring app is available at [THIS LINK](https://disk.yandex.ru/d/4Rwy5Ec-dDarNA)
## Демонстрация функционала приложения доступна по [ССЫЛКЕ](https://disk.yandex.ru/d/4Rwy5Ec-dDarNA)
========
### Technologies used
* Spring Framework (Backend)
* Spring Security (Security)
* PostreSQL (DB)
* ReactJS (Frontend)
* Chakra UI (UI)
* Nivo (Charts)
### Installation and Usage
* Clone the repository or download the source code.
* Open the project in your preferred code editor.
##### Frontend
* Run ```npm install``` to install the necessary dependencies.
* Run ```npm run dev``` to start the development server.
##### Backend

* install apache maven
* open cmd go to the project directory
* Run ```mvn clean install```
* go to the directory with the compiled JAR file
* Run JAR file

##### Ml
* install the packages

```
pip install torch
pip install fitz
pip install PyMuPDF
pip install transformers
```

### Samples of ML summarizing candidate's resume
##### 1st Sample
<details><summary>Resume 1</summary>Осипов Артём Михайлович
Главный бухгалтер
Занятость: Полная
Желаемый график работы: Полный день
Желаемая зарплата: от 40 000 руб.
Контактная информация
Телефон: +7 (ХХХ) ХХХ-ХХ-ХХ
Электронная почта: email@yandex.ru
Личная информация
Гражданство: Российская Федерация
Место проживания: г. Улан-Удэ
Переезд: Невозможен
Дата рождения: 18.02.1990 г. (31 год)
Семейное положение: Не женат
Опыт работы
Период работы: 2015 г. — 2022 г. (7 лет)
Должность: Главный бухгалтер с функциями финансового директора
Организация: ОАО "Волновахский Комбинат Хлебопродуктов", г. Екатеринбург
Обязанности:
 Опыт работы в структуре системных предприятий холдинга.
 Составление и разработка штатного расписания, нормирование оплаты труда.
 Полное ведение бухгалтерского и налогового учета в программе 1С:7.
 Работа с первичной документацией.
Период работы: 2014 г. — 2015 г. (1 год)
Должность: Бухгалтер
Организация: ОАО "Волновахский Комбинат Хлебопродуктов", г. Екатеринбург
Обязанности:
 Полное ведение бухгалтерского учета в программе 1С: Предприятие 8,2.
 Работа с первичной документацией.
 Сверка взаиморасчетов с контрагентами.
 Проведение банковских операций.
 Подготовка и сдача отчетности в ПФР, МРИ ФНС, Фин.органы, статистику.
 Расчет и начисление заработной платы.
 Размещение на Гос.закупках.
 Работа с УФК.
 Работа в СУФД.
 Работа в Сбербанк-онлайн.
Образование
Учебное заведение: ФГБОУ высшего профессионального образования "Бурятская 
государственная сельскохозяйственная академия", г. Улан-Удэ
Год окончания: 2022 г.
Факультет: Бухгалтерский учет, анализ и аудит
Специальность: Бухгалтер
Форма обучения: Очная
О себе
Личные качества
Высокая работоспособность, самодисциплина и самомотивация, ответственный подход к 
выполнению поставленных задач. Самоорганизованность, стрессоустойчивость и 
творческий подход помогает браться за новые проекты и доводить дело до конца.
Хорошие коммуникационные навыки. Умею решать конфликтные ситуации и идти на 
компромисс. Удаленный процесс работы, не вызывает препятствий для выполнения 
поставленных задач.
Профессиональные навыки
Владение системами: Гарант, Консультант Плюс, Клиент-банк, 1С. Умение вести 
переговоры, деловая переписка, хорошее знание налогового, бухгалтерского, трудового 
законодательства.
Компьютерные навыки
Уверенный пользователь ПК. Легко справляюсь с любыми офисными приложениями. 
Есть опыт работы в 1С: Бухгалтерия, 1С: УНФ, 1С: ЗУП, СБИС. Опыт работы в системах: 
Гарант, Консультант Плюс, Клиент-банк. В случае с трудностями при работе с 
периферийными устройствами могу переустановить и заново настроить. На интуитивном 
уровне могу освоить любое приложение.
Курсы и тренинги
В 2015 году прошел и успешно завершил курс повышения квалификации 
"Профессиональный главный бухгалтер" в ООО "ОУГДБ ФНСЛ", г. Улан-Удэ. По 
окончании получил документ об успешном завершении, который приложен к резюме.
В 2014 году прошел полный курс "1С:Предприятие для бюджетных учреждений" в 
институте дополнительного профессионального образования и инноваций БГСХ, г. УланУдэ.
Дополнительная информация о себе
Имеется личный автомобиль, опыт вождения 4 года. В свободное время обустраиваю 
дачный участок, люблю проводить время в гармонии с природой
</details>
<details><summary>Summary to blocks</summary>
Главный бухгалтер ОАО «Волновахский Комбинат Хлебопродуктов», г. Екатеринбург Обязанности: Составление штатного расписания, нормирование оплаты труда, ведение бухгалтерского и налогового учета в программе 1С:7. Опыт работы в структуре системных предприятий холдинга: Работа с первичной документацией.
Екатеринбургская государственная сельскохозяйственная академия по бухгалтерскому учету, анализу и аудиту. Обязанности: Работа с первичной документацией, сверка взаиморасчетов с контрагентами и размещение на Госзакупках. Работа в Сбербанке-онлайн.
В Улан-Удэ прошел и завершил курс повышения квалификации «Профессиональный главный бухгалтер» в институте дополнительного профессионального образования и инноваций БГСХ. Дополнительная информация о себе Есть личный автомобиль, опыт вождения 4 года.
</details>
<details><summary>Summary of blocks</summary>
Обязанности: Составление штатного расписания, нормирование оплаты труда, ведение бухгалтерского и налогового учета в программе 1С:7. Опыт работы в структуре системных предприятий холдинга: Работа с первичной документацией, сверка взаиморасчетов с контрагентами и размещение на Госзакупках.
</details>

##### 2nd Sample 
<details><summary>Resume 2</summary>
Фомин Марк Кириллович
Повар
Занятость: Полная
Желаемый график работы: Полный день
Желаемая зарплата: от 45 000 руб.
Контактная информация
Телефон: +7 (ХХХ) ХХХ-ХХ-ХХ
Электронная почта: email@yandex.ru
Личная информация
Гражданство: Российская Федерация
Место проживания: г. Екатеринбург
Переезд: Невозможен
Дата рождения: 11.12.1989 г. (32 года)
Семейное положение: Женат (есть дети)
Опыт работы
Период работы: 2019 г. — по настоящее время (3 года)
Должность: Су шеф
Организация: Баден-Баден термы Уктус, г. Екатеринбург
Обязанности:
 Организация работы поваров, составление заявки, участие в разработке новых блюд, 
оформление и отдача блюд, работа на всех станциях, пицца, холодный, горячий цех, 
касса, бар.
Период работы: 2010 — 2019 (9 лет)
Должность: Шеф-повар
Организация: Ресторан Сезоны, отель "Рамада", г. Новосибирск
Обязанности:
 Разработка и составление меню, технологических карт, анализ продаж, контроль 
себестоимости, опытный пользователь программы IIKO, обучение персонала.
 Проведение и разбор инвентаризаций, работа с документацией.
 Поиск поставщиков и заключение договоров поставки продуктов. Приемка продуктов, 
контроль остатков на складах, контроль соблюдения правил ротации на складах.
 Составление маркетингового плана и плана продаж на год, составление календаря 
мероприятий.
 Организация и контроль работы шведской линии, зала аля карт, банкетной кухни, рум 
сервиса и летней площадки.
 Организация работы, составление меню пятиразового питания для частной школы на 
150 учеников и детского сада на 15 детей, согласование меню в Роспотребнадзоре.
 Проведение детских мастер классов, тематических вечеров кухни народов мира, 
винных дегустаций, свадьбы, банкеты, фуршеты.
Образование
Учебное заведение: Автоматизированные системы обработки информации и управления, 
г. Самара
Год окончания: 2007 (15 лет назад)
Факультет: Технология продуктов общественного питания
Специальность: Повар-технолог
Форма обучения: Очная
О себе
Личные качества
Умение быстро ориентироваться в ситуации, находить решение нестандартных задач. 
Способность к принятию решений, требовательность к себе и окружающим, стремление к 
организации четкого и сбалансированного производственного процесса. Без вредных 
привычек, с хорошим кулинарным и эстетическим вкусом.
Профессиональные навыки
Имеются навыки открытия заведения "с нуля". Опыт работы с иностранными шеф 
поварами.
Компьютерные навыки
Уверенный пользователь ПК. Свободно работаю с Microsoft Office, 1C: торговля и склад.
Курсы и тренинги
В 2010 году прошел полный курс в "Гильдии шеф поваров и шеф кондитеров сибири", г. 
Новосибирск
Дополнительная информация о себе
Увлекаюсь в свободное время велотуризмом и сплавами
</details>
<details><summary>Summary to blocks</summary>
Занятость: Полная Желаемая зарплата: от 45 000 руб. Дата рождения: 11.12.1989 г. (32 года) Семейное положение: Женат (есть дети) Опыт работы Период работы: 2010 — 2019 (9 лет) Должность: Су шеф Организация: Баден-Баден термы Уктус, г. Екатеринбург Обязанности: организация работы поваров, составление заявки и отдача блюд.
В Новосибирске работает опытный пользователь программы IIKO. Обязанности: Разработка и составление меню, анализ продаж, контроль себестоимости, обучение персонала, организация работы шведской линии, зала аля карт, рум сервиса и летней площадки.
В Самаре завершил карьеру шеф поваров и шеф кондитеров сибири. О себе Личные качества Умение быстро ориентироваться в ситуации, требовательность к себе и окружающим, стремление к организации четкого и сбалансированного производственного процесса.
</details>
<details><summary>Summary of blocks</summary>
Занятость: Полная Желаемая зарплата: от 45 000 руб. Дата рождения: 11.12.1989 г. (32 года) О себе Личные качества Умение быстро ориентироваться в ситуации, требовательность к себе и окружающим, стремление к организации четкого и сбалансированного производственного процесса.
</details>



