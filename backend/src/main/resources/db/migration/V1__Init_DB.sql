
create table if not exists users
(
    id BIGSERIAL,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    role VARCHAR,
    active BOOLEAN DEFAULT False,
    CONSTRAINT pk_users primary key (id)
);

create table if not exists tokens
(
    id BIGSERIAL,
    access_token VARCHAR,
    logged_out BOOLEAN,
    user_id BIGINT,
    CONSTRAINT pk_tokens primary key (id),
    CONSTRAINT fk_token_user_id  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);


create table if not exists vacancy
(
    id BIGSERIAL,
    name VARCHAR,
    start_date DATE,
    deadline_date DATE,
    direction VARCHAR,
    salary INT,
    is_open BOOLEAN,
    finish_date DATE,
    user_id BIGINT,
    CONSTRAINT pk_vacancy primary key (id),
    CONSTRAINT fk_vacancy_user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);


create table if not exists candidate
(
    id BIGSERIAL,
    name VARCHAR,
    status VARCHAR,
    interview_type VARCHAR,
    source VARCHAR,
    is_disable BOOLEAN,
    vacancy_id BIGINT,
    CONSTRAINT pk_candidate primary key (id),
    CONSTRAINT fk_candidate_vacancy_id FOREIGN KEY (vacancy_id) REFERENCES vacancy (id) ON DELETE CASCADE
);

create table if not exists status
(
    id BIGSERIAL,
    name VARCHAR,
    date DATE,
    candidate_id BIGINT,
    CONSTRAINT pk_status primary key (id),
    CONSTRAINT fk_status_candidate_id FOREIGN KEY (candidate_id) REFERENCES candidate (id) ON DELETE CASCADE
);

insert into users (name, email, password, role)
values (CONCAT('hr-',1), CONCAT('hr', 1, '@example.com'), '123', 'USER');
insert into users (name, email, password, role)
values (CONCAT('hr-',2), CONCAT('hr', 2, '@example.com'), '123', 'USER');
insert into users (name, email, password, role)
values (CONCAT('hr-',3), CONCAT('hr', 3, '@example.com'), '123', 'USER');
insert into users (name, email, password, role)
values (CONCAT('hr-',4), CONCAT('hr', 4, '@example.com'), '123', 'ADMIN');


insert into vacancy (name, start_date, deadline_date, direction,
salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 1,'-', 1), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
'hr', 3000, TRUE, NULL, 1);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 2,'-', 2), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'hr', 3000, FALSE, TO_DATE('2024-10-10', 'YYYY-MM-DD'), 1);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 3,'-', 3), TO_DATE('2024-10-10', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'it', 3000, FALSE, TO_DATE('2024-10-30', 'YYYY-MM-DD'), 1);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 4,'-', 4), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'it', 3000, TRUE, NULL, 2);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 5,'-', 5), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'it', 3000, FALSE, TO_DATE('2024-10-10', 'YYYY-MM-DD'), 2);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 6,'-', 6), TO_DATE('2024-10-10', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'pr', 3000, FALSE, TO_DATE('2024-10-30', 'YYYY-MM-DD'), 2);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 7,'-', 7), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'pr', 3000, TRUE, NULL, 3);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 8,'-', 8), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
        'pr', 3000, FALSE, TO_DATE('2024-10-10', 'YYYY-MM-DD'), 3);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 9,'-', 9), TO_DATE('2024-11-20', 'YYYY-MM-DD'), TO_DATE('2024-12-31', 'YYYY-MM-DD'),
        'security', 3000, TRUE, NULL, 3);

insert into vacancy (name, start_date, deadline_date, direction,
                     salary, is_open, finish_date, user_id)
values (CONCAT('vacancy-', 10,'-', 10), TO_DATE('2024-11-20', 'YYYY-MM-DD'), TO_DATE('2024-12-31', 'YYYY-MM-DD'),
        'security', 3000, TRUE, NULL, 3);


insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
				values (CONCAT('candidate-', 1), 'review', 'phone','magazine',
				        false, 1);
insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 2), 'offer', 'phone','magazine',
        false, 1);
insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 3), 'accepted', 'phone','magazine',
        false, 2);
insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 4), 'offer', 'phone','magazine',
        false, 2);

insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 5), 'accepted', 'phone','magazine',
        false, 3);
insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 6), 'interview2', 'phone','magazine',
        false, 3);

insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 7), 'interview2', 'phone','magazine',
        true, 3);

insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 8), 'interview1', 'phone','magazine',
        true, 3);

insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 9), 'review', 'phone','magazine',
        true, 5);


insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 10), 'review', 'phone','magazine',
        true, 5);

insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 11), 'review', 'phone','magazine',
        true, 6);
insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 12), 'review', 'phone','magazine',
        true, 6);

insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
values (CONCAT('candidate-', 13), 'review', 'phone','magazine',
        true, 7);


insert into status (name, date, candidate_id)
                 values ('review', TO_DATE('2024-10-05', 'YYYY-MM-DD'), 1);
insert into status (name, date, candidate_id)
values ('review', TO_DATE('2024-10-05', 'YYYY-MM-DD'), 2);
insert into status (name, date, candidate_id)
values ('interview1', TO_DATE('2024-10-10', 'YYYY-MM-DD'), 2);
insert into status (name, date, candidate_id)
values ('review', TO_DATE('2024-10-05', 'YYYY-MM-DD'), 3);
insert into status (name, date, candidate_id)
values ('offer', TO_DATE('2024-10-09', 'YYYY-MM-DD'), 3);
insert into status (name, date, candidate_id)
values ('accept', TO_DATE('2024-10-10', 'YYYY-MM-DD'), 3);
insert into status (name, date, candidate_id)
values ('review', TO_DATE('2024-10-07', 'YYYY-MM-DD'), 4);
insert into status (name, date, candidate_id)
values ('interview1', TO_DATE('2024-10-08', 'YYYY-MM-DD'), 4);
insert into status (name, date, candidate_id)
values ('review', TO_DATE('2024-10-07', 'YYYY-MM-DD'), 5);
insert into status (name, date, candidate_id)
values ('interview1', TO_DATE('2024-10-12', 'YYYY-MM-DD'), 5);
insert into status (name, date, candidate_id)
values ('interview2', TO_DATE('2024-10-17', 'YYYY-MM-DD'), 5);
insert into status (name, date, candidate_id)
values ('offer', TO_DATE('2024-10-20', 'YYYY-MM-DD'), 5);
insert into status (name, date, candidate_id)
values ('accept', TO_DATE('2024-10-30', 'YYYY-MM-DD'), 5);
insert into status (name, date, candidate_id)
values ('interview1', TO_DATE('2024-10-21', 'YYYY-MM-DD'), 6);
insert into status (name, date, candidate_id)
values ('interview2', TO_DATE('2024-10-25', 'YYYY-MM-DD'), 7);
insert into status (name, date, candidate_id)
values ('review', TO_DATE('2024-10-11', 'YYYY-MM-DD'), 8);







-- do $$
-- declare
-- 	i INT := 1;
-- 	j INT := 1;
-- 	k INT := 1;
-- 	AMOUNT_USERS INT := 10;
-- 	AMOUNT_VACANCIES INT := 20;
-- 	AMOUNT_CANDIDATES INT := 40;
-- 	user_id INT;
-- 	vacancy_id INT;
-- 	candidate_id INT;
-- begin
-- 	insert into users (name, email, password, role)
-- 		values (CONCAT('hr-',i), CONCAT('hr', i, '@example.com'),
-- 		floor(RANDOM()*1000), 'ADMIN');
--
-- 	i := i + 1;
--
-- 	while i <= AMOUNT_USERS loop
-- 		insert into users (name, email, password, role)
-- 		values (CONCAT('hr-',i), CONCAT('hr', i, '@example.com'),
-- 		floor(RANDOM()*1000), 'USER') returning id into user_id;
-- 		j := 1;
-- 		while j <= AMOUNT_VACANCIES loop
-- 			insert into vacancy (name, start_date, deadline_date, direction,
-- 			salary, is_open, finish_date, user_id)
-- 			values (CONCAT('vacancy-', i,'-', j), TO_DATE('2024-10-5', 'YYYY-MM-DD'), TO_DATE('2024-10-31', 'YYYY-MM-DD'),
-- 			('{hr, it, business, marketing, finance, security}'::text[])[ceil(random()*5)],
-- 			RANDOM()*10000, (random() < 0.5), TO_DATE('2024-10-20', 'YYYY-MM-DD'), user_id) returning id into vacancy_id;
-- 			j := j +1;
-- 			k := 1;
-- 			while k <= AMOUNT_CANDIDATES loop
-- 				insert into candidate (name, status, interview_type, source, is_disable, vacancy_id)
-- 				values (CONCAT('candidate-', i,'-',j,'-',k), ('{review, interview1, interview2, offer, accepted}'::text[])[ceil(random()*5)], ('{phone, ordinary}'::text[])[ceil(random()*2)],
-- 				('{hh, magazine}'::text[])[ceil(random()*2)], (random() < 0.5), vacancy_id) returning id into candidate_id;
-- 				k := k + 1;
-- 				insert into status (name, date, candidate_id)
-- 				values (('{review, interview1, interview2, offer, accepted}'::text[])[ceil(random()*5)], ('{2024-10-11, 2024-10-23, 2024-10-20, 2024-10-27, 2024-10-08, 2024-10-15}'::date[])[ceil(random()*5)], candidate_id);
--                 insert into status (name, date, candidate_id)
--                 values (('{review, interview1, interview2, offer, accepted}'::text[])[ceil(random()*5)], ('{2024-10-11, 2024-10-23, 2024-10-20, 2024-10-27, 2024-10-08, 2024-10-15}'::date[])[ceil(random()*5)], candidate_id);
--                 insert into status (name, date, candidate_id)
--                 values (('{review, interview1, interview2, offer, accepted}'::text[])[ceil(random()*5)], ('{2024-10-11, 2024-10-23, 2024-10-20, 2024-10-27, 2024-10-08, 2024-10-15}'::date[])[ceil(random()*5)], candidate_id);
--                 insert into status (name, date, candidate_id)
--                 values (('{review, interview1, interview2, offer, accepted}'::text[])[ceil(random()*5)], ('{2024-10-11, 2024-10-23, 2024-10-20, 2024-10-27, 2024-10-08, 2024-10-15}'::date[])[ceil(random()*5)], candidate_id);
--                 insert into status (name, date, candidate_id)
--                 values (('{review, interview1, interview2, offer, accepted}'::text[])[ceil(random()*5)], ('{2024-10-11, 2024-10-23, 2024-10-20, 2024-10-27, 2024-10-08, 2024-10-15}'::date[])[ceil(random()*5)], candidate_id);
-- 			end loop;
-- 		end loop;
-- 		i := i + 1;
-- 	end loop;
-- end $$;
--
--
--
--
