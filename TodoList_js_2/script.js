const form = document.querySelector("form");

const deleteItem = (item, parent) => {
    parent.removeChild(item)
}

const createTodo = (event) => {
    event.preventDefault();

    const input  = document.querySelector("input");

    const newLi = document.createElement("li");

    newLi.innerHTML = input.value

    const newBtn = document.createElement("button");

    newBtn.addEventListener("click", () => deleteItem(newLi, ul));
    
    newLi.appendChild(newBtn);
    
    const ul = document.querySelector("ul");
    
    ul.appendChild(newLi);
    
    input.value = "";
}

form.addEventListener("submit", (event)=> createTodo(event));





