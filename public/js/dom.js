/* eslint-disable no-undef */
const empChoose = document.querySelector('.nav--choose-emp');
const depChoose = document.querySelector('.nav--choose-dep');
const container = document.querySelector('.container');

empChoose.addEventListener('click', (event) => {
  while (container.firstChild) container.removeChild(container.firstChild);
  fetch({
    method: 'GET',
    url: '/getEmployees',
    value: null,
    callback: renderEmployees,
  });
});

depChoose.addEventListener('click', (event) => {
  while (container.firstChild) container.removeChild(container.firstChild);
  fetch({
    method: 'GET',
    url: '/getDepartments',
    value: null,
    callback: renderDepartments,
  });
});

const renderEmployees = (err, employees) => {
  employees.forEach((employee) => {
    const div = document.createElement('div');
    const contentDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    console.log(employee);
    img.src = employee[Object.keys(employee)[4]];
    imgDiv.appendChild(img);
    img.classList.add('emp-photo');
    imgDiv.classList.add('emp-photo-div');
    div.classList.add('employees-list');
    const fields = [
      document.createElement('h4'),
      document.createElement('h4'),
      document.createElement('h4'),
      document.createElement('h4'),
    ];
    const spans = [
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
      document.createElement('span'),
    ];
    spans.forEach((element) => {
      element.classList.add('field-span');
    });
    spans[0].appendChild(document.createTextNode('Name : '));
    spans[1].appendChild(document.createTextNode('Age : '));
    spans[2].appendChild(document.createTextNode('Salary : $'));
    spans[3].appendChild(document.createTextNode('Description : '));

    fields.forEach((element, index) => {
      element.appendChild(spans[index]);
      element.appendChild(
        document.createTextNode(employee[Object.keys(employee)[index]]),
      );
      contentDiv.appendChild(element);
    });
    div.appendChild(imgDiv);
    div.appendChild(contentDiv);
    container.appendChild(div);
  });
};

const renderDepartments = (err, employees) => {
  employees.forEach((employee) => {
    const div = document.createElement('div');
    div.classList.add('employees-list');
    const spans = [document.createElement('h4'), document.createElement('h4')];
    spans[0].appendChild(
      document.createTextNode(`Name : ${employee[Object.keys(employee)[0]]}`),
    );
    spans[1].appendChild(
      document.createTextNode(
        `Description : ${employee[Object.keys(employee)[0]]}`,
      ),
    );
    div.appendChild(spans[0]);
    div.appendChild(spans[1]);
    container.appendChild(div);
  });
};
