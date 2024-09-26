const API_URL = 'http://localhost:3001/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();
});

// Fetch todos from backend
function fetchTodos() {
    fetch(API_URL)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => addTodoToDOM(todo));
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = todo.title;
    li.className = todo.completed ? 'completed' : '';
    li.dataset.id = todo.id; // Store the ID in a data attribute

    li.addEventListener('click', () => {
        toggleTodo(todo.id, !todo.completed);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        deleteTodo(todo.id);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        const todoList = document.getElementById('todo-list');
        const todoItems = todoList.querySelectorAll('li');
        todoItems.forEach(item => {
            if (item.dataset.id === id.toString()) {
                todoList.removeChild(item);
            }
        });
    })
    .catch(error => console.error('Error deleting todo:', error));
}


// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    const todoInput = document.getElementById('todo-input');
    const newTodo = {
        title: todoInput.value,
        completed: false
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(todo => {
        addTodoToDOM(todo);
        todoInput.value = '';  // Clear input field
    })
    .catch(error => console.error('Error adding todo:', error));
});

// Toggle todo completion
function toggleTodo(id, completed) {
    fetch(`${API_URL}/${id}`, {
        method: 'PUT', // Change to PUT if using the backend PUT method
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed })
    })
    .then(() => {
        const todoListItems = document.querySelectorAll('#todo-list li');
        todoListItems.forEach(li => {
            if (li.textContent.includes(id)) {
                li.classList.toggle('completed');
            }
        });
    })
    .catch(error => console.error('Error updating todo:', error));
}


// Delete a todo


