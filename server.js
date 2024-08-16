// Import the express
import express from "express";

// Create an instance of an Express application
const app = express();

// Define a route handler for the root URL ('/')
// This will respond with "Hello World with ES6 Modules!" when accessed
app.get("/", (req, res) => {
	res.send("Hello World with ES6 Modules!");
});

// Define a route handler for the root URL ('/home')
// This will respond with "Home page" when accessed
app.get("/home", (req, res) => {
	res.send("Home page");
});

// Start the server and have it listen on port 3000
// When the server starts, it will log a message to the console
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
