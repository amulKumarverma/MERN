import express from "express"
const app=express();

// Middleware
app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});