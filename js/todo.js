const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((todos) => displayTodos(todos));
};

//!{userId: 10, id: 192, title: 'ut quas possimus exercitationem sint voluptates', completed: false}

const displayTodos = (todos) => {
  //? ----> Getting the container and empty it
  const todoContainer = document.getElementById("todo_list");
  todoContainer.innerHTML = "";
  //? ---> Getting each of the object from the array of the object

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.innerHTML = `
    <div class="todo_card">
        <p>${
          todo.completed == true
            ? `<i class="fa-solid fa-square-check"></i>`
            : `<i class="fa-regular fa-square-check"></i>`
        }</p>
        <h4>${todo.title}</h4>
      </div>`;
    todoContainer.appendChild(todoItem);
  });
};

loadTodo();
