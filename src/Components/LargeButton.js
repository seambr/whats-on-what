import React from "react"
import "./LargeButton.css"
function LargeButton({ className, text, link }) {
	return (
		<a
			href={link}
			rel="noopener noreferrer"
			target="_blank"
			style={{ textDecoration: "none" }}
		>
			<button className={`btn-large ${className}`}>Watch Trailer</button>
		</a>
	)
}

export default LargeButton
