const tape = require('tape');
const runDbBuild = require('../src/database/db_build');
const { getDepartmentData, getEmployeeData, getDemptEmplys } = require('../src/queries/getData.js');
const postData=require('../src/queries/postData.js');
tape('test getDepartmentData ', (t) => {
  runDbBuild((err, res) => {
    if (err) t.error(err, 'Error');
    const expected = [{ department_name: 'Managment', department_description: 'the adminstration dpt.' }, { department_name: 'Marketing', department_description: 'the delling promoting dpt.' }, { department_name: 'Accounting and Finance', department_description: 'the planning, organizing and finance management dept' }, { department_name: 'Human resources management', department_description: 'Recruitment and training dpt.' }];
    getDepartmentData((err, result) => {
      if (err) t.error(err);
      t.deepEqual(result, expected, 'test is getDepartmentData done');
      t.end();
    });
  });
});

tape('test getDemptEmplys ', (t) => {
  runDbBuild((err, res) => {
    if (err) t.error(err, 'Error');
    const expected = [{
 employee_name: 'ahmed', employee_age: 19, employee_salary: 28.9, department_name: 'Managment' 
}, {
 employee_name: 'ahmedd', employee_age: 19, employee_salary: 28.9, department_name: 'Managment' 
}, {
 employee_name: 'jaaa', employee_age: 19, employee_salary: 28.9, department_name: 'Managment' 
}];

    getDemptEmplys('Managment', (error, result) => {
      if (error) {t.error(error);}

      t.deepEqual(result, expected, 'test getDemptEmplys done');
      t.end();
    });
  });
});


tape('test  postData Emplys ', (t) => {
  runDbBuild((err, res) => {
    if (err) t.error(err, 'Error');
    const expected =  'Employee Data add successfully';

   postData ({name:'testname', age:12, salary:555, departments:'Managment'}, (error, result) => {
      if (error) {t.error(error);}
      t.equal(result, expected, 'test of  postData is done');
      t.end();
    });
  });
});

tape.onFinish(() => {
  process.exit(0);
});
