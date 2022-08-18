import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function PosterSkeleton({ count }) {
  return (
    <SkeletonTheme baseColor='rgb(20,20,20)' highlightColor='rgb(27,27,27)'>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <Skeleton
            key={i}
            width='100%'
            style={{
              boxShadow: "0 0 10px 2px black",
              aspectRatio: "2/3"
            }}></Skeleton>
        ))}
    </SkeletonTheme>
  )
}

export default PosterSkeleton
