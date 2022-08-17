import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
function PosterSkeleton({ count }) {
  return Array(count)
    .fill(null)
    .map((_, i) => (
      <div
        key={i}
        className='movie-card-container'
        style={{
          backgroundColor: "#333",
          flex: "0.2"
        }}></div>
    ))
}

export default PosterSkeleton
