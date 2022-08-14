import React, { useContext, useEffect, useState } from "react"
import SliderRow from "./SliderRow"
import "./Rows.css"
import axios from "axios"
import { SubscriptionContext } from "./HomePage.js"
function Rows({ rowCount }) {
  const { subscribedServices, setSubscribedServices } =
    useContext(SubscriptionContext)
  const [movieArray, setMovieArray] = useState([])
  const [width, setWidth] = useState(window.innerWidth)
  function changeWidth(e) {
    if (Math.abs(width - width.innerWidth) < 100) return
    setWidth(window.innerWidth)
  }
  // Width Event Listener
  useEffect(() => {
    window.addEventListener("resize", changeWidth)
    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  useEffect(() => {
    // localhost:3000/api/movies/1?services=["Netflix","Prime"]

    axios({
      method: "GET",
      url: `http://localhost:5000/api/movies/Prime/1`
    })
      .then((res) => setMovieArray(res.data))
      .catch((err) => console.error(err))
  }, [subscribedServices])

  const chunkSize = 10
  const rowsArr = []
  for (let i = 0; i < movieArray.length; i += chunkSize) {
    const chunk = movieArray.slice(i, i + chunkSize)
    rowsArr.push(chunk)
  }

  return (
    <>
      <div className='rows'>
        {rowsArr.map((row, index) => (
          <SliderRow
            key={index}
            rowIndex={index}
            rowTitle='Originals'
            row={row}
            width={width}
          />
        ))}
      </div>
    </>
  )
}

export default Rows
