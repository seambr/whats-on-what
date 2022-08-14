const express = require("express")
const router = express.Router()
const Movie = require("../models/movie")
// localhost:3000/api/movies/5?services=["netflix","prime"]

router.get("/:service/:page", async (req, res) => {
  const PAGE_SIZE = 5
  const page = req.params.page
  const service = req.params.service
  const startIndex = (page - 1) * PAGE_SIZE

  try {
    const movies = await Movie.find({ availibility: service })
    console.log(movies)
    if (startIndex > movies.length || startIndex < 0) {
      res.status(400).json({ message: "Page out of bounds" })
    }
    //
    res.json(movies.slice(startIndex, startIndex + PAGE_SIZE))
  } catch (error) {
    res.status(500).json({ messsage: error.message })
  }
})

router.use("/", (req, res) => {
  res.status(404).json({ message: "Not Found" })
})
module.exports = router
