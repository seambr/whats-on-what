import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "./SliderRow.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper"
function SliderRow({ row, rowIndex, rowTitle, width, isLast }) {
  function getSlidesPerView() {
    return 8
  }

  return (
    <div className='row'>
      <span className='row__title'>{rowTitle}</span>
      <Swiper
        speed={1000}
        slidesPerView={getSlidesPerView()}
        spaceBetween={10}
        slidesPerGroup={getSlidesPerView()}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'>
        {row.map((movie, movieIndex) => (
          <SwiperSlide key={movieIndex} className='pane'>
            <Temp movie={movie} isLast={isLast}></Temp>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderRow

function Temp({ movie, children, isLast }) {
  return (
    <div className='temp'>
      <img
        className='temp__img'
        src={movie.posterLink}
        alt={movie.title}
        loading='lazy'
      />
    </div>
  )
}
