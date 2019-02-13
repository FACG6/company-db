/* eslint-disable no-undef */
const empChoose = document.querySelector(".nav--choose-emp");
const depChoose = document.querySelector(".nav--choose-dep");
const container = document.querySelector(".container");

empChoose.addEventListener("click", event => {
  fetch({
    method: "GET",
    url: "/getEmployees",
    value: null,
    callback: renderEmployees
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
