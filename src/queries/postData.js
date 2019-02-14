const dbconnections = require('../database/db_connection');

const postData = (data, cb) => {
  const deptIDS = {
    'Managment': 1,
    'Marketing': 2,
    'Accounting and Finance': 3,
    'Human resources management': 4,
  };
  dbconnections.query(`INSERT INTO employees (employee_name,employee_age, employee_salary, department_key,img) VALUES ('${data.name}','${data.age}','${data.salary}','${deptIDS[data.departments]}','${data.imgUrl}');`, (err, res) => {
    if (err) { cb(err); } else {
      cb(null, 'Employee Data add successfully');
    }
  });
};

module.exports = postData;
