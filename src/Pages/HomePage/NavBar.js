import React, { useContext, useState } from "react"
import "./NavBar.css"
import { CgProfile } from "react-icons/cg"
import { FcUsb } from "react-icons/fc"
import { SubscriptionContext } from "./HomePage.js"
function NavBar() {
  const { subscribedServices, setSubscribedServices } =
    useContext(SubscriptionContext)

  return (
    <>
      <div className='nav'>
        <div className='nav__left'>
          <img
            src='logo-small.png'
            className='nav__logo'
            alt="What's on What"></img>
          <ul className='nav__menu'>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Documentaries</li>
          </ul>
        </div>
        <div className='nav__right'>
          <CgProfile
            size={35}
            title='profile'
            className='nav__profile'></CgProfile>
        </div>
        <div className='subscription-container'>
          <div
            className='subscription-logo-container'
            onClick={() =>
              setSubscribedServices((old) => ({
                ...old,
                Netflix: !old.Netflix
              }))
            }>
            <img
              className={subscribedServices.netflix ? "selected" : ""}
              src='../logos/netflix-logo.png'
              alt=''
            />
          </div>
          <div
            className='subscription-logo-container'
            onClick={() =>
              setSubscribedServices((old) => ({
                ...old,
                Prime: !old.Prime
              }))
            }>
            <img
              className={subscribedServices.prime ? "selected" : ""}
              src='../logos/prime-logo.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
