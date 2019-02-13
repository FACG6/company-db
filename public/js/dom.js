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

depChoose.addEventListener("click", event => {
  while (container.firstChild) container.removeChild(container.firstChild);
  fetch({
    method: 'GET',
    url: '/getDepartments',
    value: null,
    callback: renderDepartments,
  });
});

const renderEmployees = (err, employees) => {
  employees.forEach(employee => {
    const div = document.createElement("div");
    div.classList.add("employees-list");
    const fields = [
      document.createElement("h4"),
      document.createElement("h4"),
      document.createElement("h4"),
      document.createElement("h4")
    ];
    const spans = [
      document.createElement("span"),
      document.createElement("span"),
      document.createElement("span"),
      document.createElement("span")
    ];
    spans.forEach(element => {
      element.classList.add("field-span");
    });
    spans[0].appendChild(document.createTextNode("Name : "));
    spans[1].appendChild(document.createTextNode("Age : "));
    spans[2].appendChild(document.createTextNode("Salary : $"));
    spans[3].appendChild(document.createTextNode("Description : "));

    fields.forEach((element, index) => {
      element.appendChild(spans[index]);
      element.appendChild(
        document.createTextNode(employee[Object.keys(employee)[index]])
      );
      div.appendChild(element);
    });
    container.appendChild(div);
  });
};

const renderDepartments = (err, employees) => {
  employees.forEach(employee => {
    const div = document.createElement("div");
    div.classList.add("employees-list");
    const spans = [document.createElement("h4"), document.createElement("h4")];
    spans[0].appendChild(
      document.createTextNode("Name : " + employee[Object.keys(employee)[0]])
    );
    spans[1].appendChild(
      document.createTextNode(
        "Description : " + employee[Object.keys(employee)[0]]
      )
    );
    div.appendChild(spans[0]);
    div.appendChild(spans[1]);
    container.appendChild(div);
  });
};
