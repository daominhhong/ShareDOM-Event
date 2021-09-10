window.addEventListener("load", function () {
    // <div class="todo-item">
    //       <span class="todo-text">Learning english</span>
    //       <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
    // </div>
    const form = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    let todos = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];

    if (Array.isArray(todos) && todos.length > 0) {
        todos.forEach(item => createTodoItem(item));
    }

    function createTodoItem(title) {
        const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove" data-value="${title}"></i>
        </div>`;
        todoList.insertAdjacentHTML("beforeend", template);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const todoVal = this.elements["todo"].value;
        ///main code
        if (todoVal) {

            createTodoItem(todoVal);
            /// save vales
            todos.push(todoVal);
            localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
        }
        this.elements["todo"].value = "";
    })

    todoList.addEventListener("click", function (e) {
        if (e.target.matches(".todo-remove")) {
            // remove todo in DOM
            const todo = e.target.parentNode;
            todo.parentNode.removeChild(todo);
            // remove todo in localStorage
            const todoText = e.target.dataset.value;
            const index = todos.findIndex((item) => item === todoText);
            todos.splice(index, 1);
            localStorage.setItem("todoList", JSON.stringify(todos));
        }
    })
})