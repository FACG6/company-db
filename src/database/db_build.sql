BEGIN;

DROP TABLE IF EXISTS departments ,employees;

 CREATE TABLE departments(department_id SERIAL PRIMARY KEY,
    department_name TEXT NOT NULL,
    department_description TEXT NOT NULL
);
CREATE TABLE employees(
    employee_id SERIAL PRIMARY KEY,
    employee_name TEXT NOT NULL,
    employee_age INTEGER ,
    employee_salary FLOAT NOT NULL,
    department_key INTEGER REFERENCES departments(department_id),
    img TEXT
);


INSERT INTO departments (department_name, department_description) 
VALUES ('Managment','the adminstration dpt.'),
       ('Marketing','the delling promoting dpt.'),
       ('Accounting and Finance','the planning, organizing and finance management dept'),
       ('Human resources management', 'Recruitment and training dpt.');

INSERT INTO employees (employee_name,employee_age,employee_salary,department_key,img)
VALUES ('ANIES',26,9000.555,3,'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/42516544_2142394079128542_4869724642798993408_n.jpg?_nc_cat=104&_nc_ht=scontent.fgza2-1.fna&oh=948c2c52f3a8e0912517d520136531fe&oe=5CFFF4DE'),
('ahmed',19,28.9000,1,'https://avatars2.githubusercontent.com/u/35656148?s=400&v=4'),
('jamalat',23,30.5000,2,'https://avatars3.githubusercontent.com/u/43421672?s=400&v=4'),
('nareman',23,40.5000,4,'https://avatars3.githubusercontent.com/u/42087907?s=400&v=4'),
('ahmedd',19,28.9000,1,'https://avatars2.githubusercontent.com/u/35656148?s=400&v=4'),
('jaaa',19,28.9000,1,'https://avatars2.githubusercontent.com/u/35656148?s=400&v=4');

 COMMIT;
