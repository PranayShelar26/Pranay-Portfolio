const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize Express App
const app = express();

// Enable CORS for specific origins
const corsOptions = {
  origin: 'https://pranay-portfolio.vercel.app', // Ensure no trailing slash
  optionsSuccessStatus: 200,
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};

app.use(cors(corsOptions));
// CORS Configuration

app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB Atlas
<<<<<<< HEAD
mongoose.connect("mongodb+srv://admin:pranay33@portfolio-form.3buvy.mongodb.net/portfolio-form?retryWrites=true&w=majority")
=======
mongoose.connect("mongodb+srv://admin:pranay33@portfolio-form.3buvy.mongodb.net/portfolio-form?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
>>>>>>> c804326970d070aae42eb7d138ae4d0e5f545ddb
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
        res.status(201).send('Thank You.');
    } catch (e) {
        res.status(500).send(e.message); // Return the error message
    }
});

// Default GET route
app.get("/", (req, res) => res.send("Hello World!"));

// Export the Express app as a serverless function
module.exports = app;
