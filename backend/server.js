const express = require("express");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes")

dotenv.config()

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log("Request IP: ", req.ip);
    next();
})

// routes utama
app.get("/", (req, res) => {
    res.send("Welcome to Inventaris API!")
})

// api routes
app.use("/barang", itemRoutes)

// middleware 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found!" })
})

module.exports = app;
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))