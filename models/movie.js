const mongoose = require("mongoose")
mongoose.set("debug", true)
const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	tagline: {
		type: String,
		required: false,
	},
	summary: {
		type: String,
		required: false,
	},
	availibility: {
		type: [String],
		required: true,
	},
	mediaType: {
		type: String,
		required: true,
	},
	releaseYear: {
		type: String,
		required: false,
	},
	genres: {
		type: [String],
		required: false,
	},
	trailerLink: {
		type: String,
		required: false,
	},
	rating: {
		type: String,
		required: false,
	},
	runtime: {
		type: String,
		required: false,
	},
	score: {
		type: String,
		required: false,
	},
	backdropLink: {
		type: String,
		required: false,
	},
	posterLink: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
})

module.exports = mongoose.model("movie", movieSchema)
