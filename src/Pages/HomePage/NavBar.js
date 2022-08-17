import React, { useContext, useState } from "react"
import "./NavBar.css"
import { CgProfile } from "react-icons/cg"
import { FcUsb } from "react-icons/fc"

function NavBar() {
  return (
    <>
      <div className='nav'>
        <div className='nav__left'>
          <img
            src='logo-small.png'
            className='nav__logo'
            alt="What's on What"></img>
        </div>

        <div className='nav__right'></div>
      </div>
    </>
  )
}

export default NavBar
