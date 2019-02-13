const dbconnections = require('../database/db_connection');

const getDepartmentData = (cb) => {
  dbconnections.query(
    'select department_name,department_description from departments',
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    },
  );
};

const getDemptEmplys = (deptName, cb) => {
  dbconnections.query(
    `select employee_name, employee_age, employee_salary, departments.department_name from employees join departments ON employees.department_key = departments.department_id where departments.department_name = '${deptName}'`,
    (err, res) => {
      if (err) {
        cb(err);
      }
      else{
      
        cb(null,res.rows)
      }
    },
  );
};

const getEmployeeData = (cb) => {
  dbconnections.query(
    'select employee_name, employee_age, employee_salary, department_name from employees join departments on employees.department_key = departments.department_id',
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    },
  );
};

module.exports = { getDepartmentData, getEmployeeData, getDemptEmplys };
