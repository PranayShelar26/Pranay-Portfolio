const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // This middleware is necessary to parse incoming JSON requests

const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolio-form", {})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Schema and Model
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', UserSchema);

// POST route to create a new user
app.post('/', async (req, res) => {
    const { username, email, message } = req.body; // Ensure req.body is correctly parsed

    if (!username || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    try {
        // Create a new user
        await User.create({ username, email, message });
        res.send('Thank You.');
    } catch (e) {
        res.status(500).send(e.message); // Return the error message
    }
});

// Default GET route
app.get("/", (req, res) => res.send("Hello World!"));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}!`));
