const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize Express App
const app = express();
const allowedOrigins = ["https://pranay-portfolio.vercel.app"];
 
// Enable CORS for specific origins
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
// CORS Configuration

app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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
app.post('/api/users', async (req, res) => {
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
