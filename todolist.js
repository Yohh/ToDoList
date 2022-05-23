const form = document.querySelector("form");
const taskInput = document.querySelector("#taskInput");
const toDo = document.querySelector("#toDo");
const newTask = document.querySelector("li");

form.onsubmit = function (event) {
  event.preventDefault();
  const newLine = document.createElement("div");
  newLine.classList.add("newLine");
  newLine.style.display = "flex";
  newLine.style.justifyContent = "space-between";
  toDo.appendChild(newLine);
  const newTask = document.createElement("li");
  newTask.innerHTML = taskInput.value;
  newLine.appendChild(newTask);
  const button = document.createElement("input");
  button.type = "submit";
  button.value = "remove";
  newLine.appendChild(button);
  newTask.onsubmit = function () {
    toDo.removeChild(newTask);
  };
  taskInput.value = "";
};

// button.onclick = toDo.removeChild(newTask);
