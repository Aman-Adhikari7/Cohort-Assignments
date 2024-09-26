const jwt = require('jsonwebtoken'); // Make sure to install this dependency

const SECRET_KEY = 'your-secret-key'; // Replace with your actual secret key

function userMiddleware(req, res, next) {
    // Extract the token from the Authorization header
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Attach user info to the request object
        req.user = decoded; // The decoded token will typically contain user information

        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = userMiddleware;