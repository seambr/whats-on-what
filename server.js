require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(
	cors({
		origin: "*",
	})
)

mongoose.connect("mongodb://127.0.0.1:27017/moviedb", { useNewUrlParser: true })
const db = mongoose.connection

db.on("error", error => console.error(error))
db.once("open", () => console.log("Connected to Database"))

app.use(express.json())

const moviesRouter = require("./routes/movies")

app.use("/api/movies", moviesRouter)

app.listen(5000, () => console.log("Server started"))
