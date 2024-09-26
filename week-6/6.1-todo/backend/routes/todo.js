let todos = []; // in-memory storage

// Get all todos
async function getAllTodo(req, res, next) {
    try {
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}

// Create a new todo
async function createTodo(req, res, next) {
    try {
        const { title, completed = false } = req.body;
        const newTodo = { id: todos.length + 1, title, completed };
        todos.push(newTodo);
        res.status(201).json(newTodo);
    } catch (error) {
        next(error);
    }
}

// Update a todo by ID
async function updateTodo(req, res, next) {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = todos.find(t => t.id === parseInt(id));

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        if (title !== undefined) todo.title = title;
        if (completed !== undefined) todo.completed = completed;

        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
}

// Delete a todo by ID
// Delete a todo by ID
async function deleteTodoById(req, res, next) {
    try {
        const { id } = req.params;
        const index = todos.findIndex(t => t.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todos.splice(index, 1); // Remove the todo from the list
        res.status(200).json({ message: `Todo with id ${id} deleted` });
    } catch (error) {
        next(error);
    }
}


// Export the functions
module.exports = {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodoById
};
