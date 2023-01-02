import React, { useContext, useState } from "react"
import { BsBookmarksFill } from "react-icons/bs"
import { useSearch } from "../../Contexts/SearchContext.js"

import GenreTag from "../../Components/GenreTag.js"
import FiltersButton from "./FiltersButton.js"
import { Link } from "react-router-dom"
function ServiceContainer() {
	// ideally these serevices/genres wouldnt be hard coded, but i dont plan on expanding
	const genreList = [
		"Action",
		"Adventure",
		"Animation",
		"Comedy",
		"Crime",
		"Documentary",
		"Drama",
		"Family",
		"Fantasy",
		"History",
		"Horror",
		"Music",
		"Mystery",
		"Romance",
		"Science Fiction",
		"TV Movie",
		"Thriller",
		"War",
		"Western",
	]
	const services = ["netflix", "prime", "hbo", "hulu", "disney"]
	const [show, setShow] = useState(false)

	return (
		<div className="left-bar">
			<div className="services">
				{services.map((s, i) => (
					<Service
						key={i}
						service={s}
						imgSource={`../logos/${s}-icon.svg`}
					></Service>
				))}
			</div>
			<div className="divider" />
			<Link to="/watchlist">
				<BsBookmarksFill className="left-icon" size={30} />
			</Link>
			<FiltersButton />
		</div>
	)
}

function Service({ service, imgSource }) {
	const { query, setQuery } = useSearch()
	const numSubscribed = Object.keys(query.subscribedServices).filter(
		key => query.subscribedServices[key] === true
	)

	function updateServiceList() {
		if (query.subscribedServices[service] && numSubscribed.length === 1) return
		setQuery(old => ({
			...old,
			subscribedServices: {
				...old.subscribedServices,
				[service]: !old.subscribedServices[service],
			},
		}))
	}

	return (
		<div className="subscription-logo-container" onClick={updateServiceList}>
			<img
				className={query.subscribedServices[service] ? "selected" : ""}
				src={imgSource}
				alt={service}
			/>
		</div>
	)
}

function Filter({ name, value, onChange, options }) {
	return (
		<div className="filters-container">
			<select className="filter-select" value={value} onChange={onChange}>
				<option selected disabled hidden>
					{name}
				</option>
				{options.map(option => (
					<option value={option}>{option.toUpperCase()}</option>
				))}
			</select>
		</div>
	)
}

export default ServiceContainer
