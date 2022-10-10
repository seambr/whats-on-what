const express = require("express")
const router = express.Router()
const Movie = require("../models/movie")
// localhost:3000/api/movies/5?services=["netflix","prime"]

router.get("/items", async (req, res) => {
  try {
    const PAGE_SIZE = 40
    const page = req.query.page
    const title = req.query.title || ""
    const services = JSON.parse(req.query.service)
    const startIndex = (page - 1) * PAGE_SIZE
    const type = req.query.type === "all" ? undefined : req.query.type

    const movies = await Movie.find({
      availibility: { $in: services },
      title: { $regex: `${title}`, $options: "i" },
      type: type ? type : { $exists: true }
    })

    const totalFound = movies.length
    if (startIndex > movies.length || startIndex < 0) {
      res.status(400).json({ message: "Page out of bounds" })
      return
    }
    //
    res.json({
      totalFound: totalFound,
      movies: movies.slice(startIndex, startIndex + PAGE_SIZE)
    })
  } catch (error) {
    res.status(500).json({ messsage: error.message })
  }
})

router.get("/search", async (req, res) => {
  try {
    const title = req.query.title || ""

    const movies = await Movie.find({
      title: { $regex: `${title}`, $options: "i" }
    })

    const totalFound = movies.length

    res.json({
      totalFound: totalFound,
      movies: movies.slice(0, 4)
    })
  } catch (error) {
    res.status(500).json({ messsage: error.message })
  }
})

router.get("/id/", async (req, res) => {
  try {
    console.log("query", req.query)
    const idList = JSON.parse(req.query.idList)
    if (!idList.length > 0) throw new Error("WatchList Empty")
    const movieList = await Movie.find({ _id: { $in: idList } })
    if (!movieList.length) {
      res.status(404).json({ message: "Not Found" })
    }
    res.json({ movies: movieList })
  } catch (error) {
    res.json({ message: error.message })
  }
})
router.use("/", (req, res) => {
  res.status(404).json({ message: "Not Found" })
})
module.exports = router
