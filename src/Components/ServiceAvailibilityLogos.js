import React from "react"

function ServiceAvailibilityLogos({ availibility, rounded }) {
	return (
		<>
			{availibility.map(e => (
				<img
					src={`../logos/${e}-icon.png`}
					alt={e}
					key={e}
					style={{
						borderRadius: rounded ? "12px" : 0,
						bottom: "0",
						marginTop: "2em",
					}}
				/>
			))}
		</>
	)
}

export default ServiceAvailibilityLogos
