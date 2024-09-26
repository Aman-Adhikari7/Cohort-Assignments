
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, ExpiredToken } = require('../db/index');
const middleware = require('../middleware/user');

const router = Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: "Username and password are required"
        });
    }

    try {
        const find = await User.findOne({ username });
        if (find) {
            return res.status(400).json({
                error: "Username already taken. Please choose a unique username."
            });
        }

        const hash = await bcrypt.hash(password, 8);
        console.log(hash);

        const user = new User({
            username,
            password: hash
        });

        await user.save();

        return res.json("User created successfully");
    } catch (error) {
        return res.status(500).json({
            error: "Something went wrong: " + error
        });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: "Both username and password are required"
        });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                error: "User does not exist"
            });
        }

        // Await bcrypt comparison
        const hashed = await bcrypt.compare(password, user.password);
        if (!hashed) {
            return res.status(400).json({
                error: "Password is incorrect"
            });
        }

        const token = jwt.sign({ userID: user._id }, process.env.API_SECRET, { expiresIn: '1h' });

        return res.json({
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            error: "Login went wrong: " + error
        });
    }
});

// Logout Route
router.post('/logout', middleware, async (req, res) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(400).json({
                error: "No token provided"
            });
        }

        const exp = new ExpiredToken({
            token: token,
            createdAt: Date.now()
        });

        await exp.save();

        return res.json({ message: 'Logged out successfully' });
    } catch (error) {
        return res.status(500).json({
            error: 'Server error: ' + error
        });
    }
});

module.exports = router;
