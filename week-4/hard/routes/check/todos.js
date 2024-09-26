const { Router } = require("express");
const adminMiddleware = require("../../middleware/user");
const { Todo } = require("../../database/index"); // Import the Todo model

const router = Router();

// Create Todo
router.post('/', adminMiddleware, async (req, res) => {
    const { title, description } = req.body;
    
    try {
        // Create a new todo
        const todo = new Todo({
            title,
            description,
            userId: req.user._id // Assuming userId is set by adminMiddleware
        });
        
        await todo.save();
        
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create todo' });
    }
});

// Update Todo
router.put('/:id', adminMiddleware, async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    
    try {
        // Find and update the todo
        const todo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
        
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
});

// Delete Todo
router.delete('/', adminMiddleware, async (req, res) => {
    try {
        // Delete all todos
        await Todo.deleteMany({ userId: req.user._id });
        
        res.json({ message: 'All todos deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todos' });
    }
});

// Delete Todo by ID
router.delete('/:id', adminMiddleware, async (req, res) => {
    const { id } = req.params;
    
    try {
        // Find and delete the todo
        const todo = await Todo.findByIdAndDelete(id);
        
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});

// Fetch All Todos
router.get('/', adminMiddleware, async (req, res) => {
    try {
        // Fetch all todos for the authenticated user
        const todos = await Todo.find({ userId: req.user._id });
        
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

// Fetch Todo by ID
router.get('/:id', adminMiddleware, async (req, res) => {
    const { id } = req.params;
    
    try {
        // Find the todo by ID
        const todo = await Todo.findById(id);
        
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todo' });
    }
});

module.exports = router;
