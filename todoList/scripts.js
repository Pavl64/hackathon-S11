const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', deleteTodo);
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.addEventListener('change', toggleComplete);

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(completeCheckbox);

    return todoItem;
}

function deleteTodo() {
    const todoItem = this.parentNode;
    todoList.removeChild(todoItem);
}

function toggleComplete() {
    const todoItem = this.parentNode;
    todoItem.classList.toggle('completed');
}

