import React from "react"
import "./RatingStars.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useMemo } from "react"
function RatingStars({ rating, color }) {
	console.log(rating)
	function getStars(rating) {
		const fiveRating = Math.round((rating / 100) * 5)
		const arr = []
		for (let i = 0; i < 5; i++) {
			if (i + 1 <= fiveRating) {
				arr.push(1)
			} else {
				arr.push(0)
			}
		}
		return arr
	}

	const starArray = useMemo(() => getStars(rating), [rating])

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			{starArray.map(e => {
				if (e === 1) {
					return <AiFillStar color={color} />
				} else {
					return <AiOutlineStar color={color} />
				}
			})}
		</div>
	)
}

export default RatingStars
