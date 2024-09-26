

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const user = new User({ username, password: hashedPassword });
        await user.save();
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // Find the user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        
        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        
        // Generate a token
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Todos Route
router.get('/todos', userMiddleware, async (req, res) => {
    try {
        // Retrieve todos for the authenticated user
        const todos = await Todo.find({ userId: req.user._id }); // Assuming `userId` is stored in `req.user` by `userMiddleware`
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    // Implement logout logic (e.g., invalidate token)
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;

