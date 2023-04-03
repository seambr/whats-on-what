import React from "react"
import "./FiltersButton.css"
function FiltersButton({ onClick }) {
	return (
		<div onClick={onClick} id="filters">
			<img src="../logos/FILTER_ICON.svg" alt="" />
		</div>
	)
}

export default FiltersButton
