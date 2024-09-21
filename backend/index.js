const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const corsOptions = {
  origin: 'https://pranay-portfolio.vercel.app', // No trailing slash
  optionsSuccessStatus: 200,
  methods: ['POST', 'GET'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Include allowed headers
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // This middleware is necessary to parse incoming JSON requests

const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://admin:pranay33@portfolio-form.3buvy.mongodb.net/portfolio-form?retryWrites=true&w=majority", {})
  .then(() => console.log('MongoDB Atlas connected'))
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
