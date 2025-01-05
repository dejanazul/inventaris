const express = require("express");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes")

dotenv.config()

const app = express()

// middleware
app.use(express.json())
app.use((req, res) => {
    res.status(404).json({ error: "Route not found!" })
})

// api routes
app.use("/barang", itemRoutes)
app.get("/", (req, res) => {
    res.send("Welcome to Inventaris API!")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))