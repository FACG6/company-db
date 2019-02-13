const dbconnections = require('../database/db_connection');

const postData = (data, cb) => {
  const deptIDS = {
    Managment: 1,
    Marketing: 2,
    'Accounting and Finance': 3,
    'Human resources management': 4,
  };
  let deptId;
  for (let i = 0; i < Object.keys(deptIDS).length; i++) {
    if (deptIDS[i] === data[4]) {
      deptId = data[4];
    }
  }
  dbconnections.query(`INSERT INTO employees (employee_name, employee_age, employee_salary, department_name) VALUES (${data[1]},${data[2]},${data[3]},${deptId})`, (err, res) => {
    if (err) { cb(err); } else {
      cb(null, 'Employee Data add successfully');
    }
  });
};

module.exports = postData;
