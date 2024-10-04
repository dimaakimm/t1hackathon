
create table if not exists users
(
    id BIGSERIAL,
    email VARCHAR,
    password VARCHAR,
    role VARCHAR,
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

create table if not exists recruiter
(
    id BIGSERIAL,
    name VARCHAR,
    CONSTRAINT pk_recruiter primary key (id)
);

create table if not exists vacancy
(
    id BIGSERIAL,
    name VARCHAR,
    start_date DATE,
    finish_date DATE,
    direction VARCHAR,
    salary INT,
    recruiter_id BIGINT,
    CONSTRAINT pk_vacancy primary key (id),
    CONSTRAINT fk_vacancy_recruiter_id FOREIGN KEY (recruiter_id) REFERENCES recruiter (id) ON DELETE CASCADE
);


create table if not exists candidate
(
    id BIGSERIAL,
    name VARCHAR,
    interview VARCHAR,
    offer BOOLEAN,
    source VARCHAR,
    accept BOOLEAN,
    vacancy_id BIGINT,
    CONSTRAINT pk_candidate primary key (id),
    CONSTRAINT fk_candidate_vacancy_id FOREIGN KEY (vacancy_id) REFERENCES vacancy (id) ON DELETE CASCADE
);
