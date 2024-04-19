import React from "react";
import "./RatingStars.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useMemo } from "react";
function RatingStars({ rating, color }) {
  function getStars(rating) {
    const fiveRating = Math.round((rating / 10) * 5);
    const arr = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= fiveRating) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    return arr;
  }

  const starArray = useMemo(() => getStars(rating), [rating]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {starArray.map((e, i) => {
        if (e === 1) {
          return <AiFillStar color={color} key={i} />;
        } else {
          return <AiOutlineStar color={color} key={i} />;
        }
      })}
    </div>
  );
}

export default RatingStars;
