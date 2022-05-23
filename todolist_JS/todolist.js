const form = document.querySelector("form");
const taskInput = document.querySelector("#taskInput");
const toDo = document.querySelector("#toDo");

form.onsubmit = function (event) {
  event.preventDefault();
  if (taskInput.value == "") {
    alert("no task found");
  } else {
    const newLine = document.createElement("form");
    newLine.classList.add("newLine");
    newLine.style.display = "flex";
    newLine.style.justifyContent = "space-between";
    newLine.style.alignItems = "center";
    toDo.appendChild(newLine);
    const newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    newLine.appendChild(newTask);
    const button = document.createElement("input");
    button.type = "submit";
    button.value = "";
    button.classList.add("remove");
    newLine.appendChild(button);
    newLine.onsubmit = function () {
      newLine.remove();
    };
    taskInput.value = "";
  }
};
