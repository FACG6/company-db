/* eslint-disable no-undef */
const empChoose = document.querySelector(".nav--choose-emp");
const depChoose = document.querySelector(".nav--choose-dep");
const container = document.querySelector(".container");

empChoose.addEventListener("click", event => {
  while (container.firstChild) container.removeChild(container.firstChild);
  fetch({
    method: "GET",
    url: "/getEmployees",
    value: null,
    callback: renderEmployees
  });
});
depChoose.addEventListener("click", event => {
  while (container.firstChild) container.removeChild(container.firstChild);
  fetch({
    method: "GET",
    url: "/getDepartments",
    value: null,
    callback: renderDepartments
  });
});
const renderEmployees = (err, employees) => {
  employees.forEach(employee => {
    const div = document.createElement("div");
    div.classList.add("employees-list");
    const spans = [
      document.createElement("h4"),
      document.createElement("h4"),
      document.createElement("h4"),
      document.createElement("h4")
    ];
    spans.forEach((element, index) => {
      element.appendChild(
        document.createTextNode(
          Object.keys(employee)[index] +
            ":" +
            employee[Object.keys(employee)[index]]
        )
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
    spans.forEach((element, index) => {
      element.appendChild(
        document.createTextNode(
          Object.keys(employee)[index] +
            ":" +
            employee[Object.keys(employee)[index]]
        )
      );
      div.appendChild(element);
    });
    container.appendChild(div);
  });
};
