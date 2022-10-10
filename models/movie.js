const mongoose = require("mongoose")
mongoose.set("debug", true)
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  posterLink: {
    type: String,
    required: true
  },
  availibility: {
    type: [String],
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("movie", movieSchema)
