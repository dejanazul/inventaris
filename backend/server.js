const express = require("express");
const dotenv = require("dotenv");
const itemRoutes = require("./routes/itemRoutes")

dotenv.config()

const app = express()

// middleware
app.use(express.json())

// api routes
app.use("/barang", itemRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))