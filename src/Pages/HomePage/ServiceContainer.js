import React, { useContext, useState } from "react"
import { SubscriptionContext } from "./HomePage.js"
import { useSearch } from "../../Contexts/SearchContext.js"
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs"
import GenreTag from "../../Components/GenreTag.js"
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
		<div className="subscription-container">
			<div className="services">
				{services.map((s, i) => (
					<Service
						key={i}
						service={s}
						imgSource={`../logos/${s}-icon.png`}
					></Service>
				))}
			</div>
			{!show ? (
				<BsChevronCompactDown
					color="white"
					cursor="pointer"
					size={30}
					onClick={() => setShow(true)}
				></BsChevronCompactDown>
			) : (
				<>
					<div className="filters">
						{genreList.map(e => (
							<GenreTag text={e} fontSize="12px" clickable />
						))}
						{/* <Filter name='Rating' value={query.genre} onChange={(e)=>setQuery(old=>({...old,genre:e.target.value}))}></Filter> */}
					</div>
					<BsChevronCompactUp
						color="white"
						cursor="pointer"
						size={30}
						onClick={() => setShow(false)}
					></BsChevronCompactUp>
				</>
			)}
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
