// day 16 task
const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todosElem = document.querySelector("#todos");

// day 18 task
const todosFromStorage = JSON.parse(localStorage.getItem("todos"))

let todos;
if (todosFromStorage) {
    todos = todosFromStorage;
} else {
    todos = [];
}

addTodoBtn.addEventListener("click", () => {
    // console.log(todoInput.value)

    todos.unshift({ task: todoInput.value });
    // console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodos();
})

function renderTodos() {
    if (!todos.length) {
        todosElem.innerHTML = "No todo. Please add your todos"
        return;
    }

    let html = "";
    todos.forEach((todo, index) => {
        html += `
            <li>
                ${todo.task}
                <button data-index=${index} class="delete-todo-btn">Delete</button>
            </li>
        `;
    })

    todosElem.innerHTML = html;
};
renderTodos();

// day 17 task
todosElem.addEventListener("click", (event) => {
    // console.log(event.target)

    if (event.target.className === "delete-todo-btn") {
        const index = event.target.getAttribute("data-index");

        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));

        renderTodos();
    }
})