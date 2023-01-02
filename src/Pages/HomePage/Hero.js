import React from "react"
// import CustomButton from "../../Components/CustomButton"
import "./ServiceContainer.css"
import "./Hero.css"

import Search from "./Search"

import { Link } from "react-router-dom"

function Hero() {
	return (
		<nav className="hero">
			<div className="hero-left">
				<Link to="/">
					<div className="hero__logo-container">
						<img src="../logos/whats-on-what-logo.svg" alt="What's On What" />
					</div>
				</Link>
			</div>

			<Search />
		</nav>
	)
}

export default Hero

// OLD HERO
// function Hero() {
//   const backdropPath =
//     "https://www.themoviedb.org/t/p/original/ko4N6wWp0UYlMmsVyfIfLyRAZtP.jpg"
//   return (
//     <div className='hero' style={{ backgroundImage: `url(${backdropPath})` }}>
//       <div className='hero__content'>
//         <span className='hero__title'>Guardians of The Galaxy</span>
//         <p className='hero__desc'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
//           voluptate voluptatem sequi eos provident quos, rem officia aliquid
//           voluptatum praesentium!
//         </p>
//         <div className='hero__btns'>
//           <CustomButton className='hero__btn btn__play'>
//             <span className='hero__btn__icon'>
//               <BsPlayFill color='white' size={30}></BsPlayFill>
//             </span>
//             <span className='hero__btn__text'>Play</span>
//           </CustomButton>
//           <CustomButton className='hero__btn btn__info' color='#555'>
//             <span className='hero__btn__icon'>
//               <BsInfo size={30} color='white'></BsInfo>
//             </span>

//             <span className='hero__btn__text'>More Info</span>
//           </CustomButton>
//         </div>
//       </div>
//       <ServiceContainer></ServiceContainer>
//       <div className='hero__fade-bottom'></div>
//     </div>
//   )
// }
