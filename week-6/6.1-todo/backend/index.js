const express = require('express');
const cors = require('cors');
const { getAllTodo, createTodo, updateTodo, deleteTodoById } = require('./routes/todo');
const app = express();
const PORT = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Get all todos
app.get('/todos', getAllTodo);

// Add a new todo
app.post('/todos', createTodo);

// Update a todo
app.put('/todos/:id', updateTodo);


// Delete a todo
app.delete('/todos/:id', deleteTodoById);

// Search todos by title (query parameter 'q')
app.get('/todos/search', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(query));
    res.status(200).json(filteredTodos);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
