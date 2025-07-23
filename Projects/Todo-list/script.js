const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todosElem = document.querySelector("#todos");

const todos = [];

todosElem.addEventListener("click", (event) => {
    // console.log(event.target)
    if (event.target.className === "delete-todo-btn") {
        const index = event.target.getAttribute("data-index");

        todos.splice(index, 1);

        renderTodos();
    }

})

addTodoBtn.addEventListener("click", () => {
    // console.log(todoInput.value)

    todos.unshift({ task: todoInput.value });
    // console.log(todos);

    renderTodos();
})

function renderTodos() {
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