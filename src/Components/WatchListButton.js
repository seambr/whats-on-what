import React from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useWatchList } from "../Contexts/WatchListContext"

function WatchListButton({ movie }) {
	const { list, setList } = useWatchList()
	function isInWatchList() {
		if (list.includes(movie._id)) {
			return true
		}
		return false
	}

	return !isInWatchList() ? (
		<div
			className="save-to-watchlist"
			onClick={() => setList(oldList => [...oldList, movie._id])}
		>
			<AiOutlineStar size={25} color="white" />
		</div>
	) : (
		<div
			className="save-to-watchlist"
			onClick={() => setList(oldList => oldList.filter(id => id !== movie._id))}
		>
			<AiFillStar size={25} color="gold" />
		</div>
	)
}

export default WatchListButton
