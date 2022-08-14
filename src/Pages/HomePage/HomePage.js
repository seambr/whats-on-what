import React, { useState } from "react"
import Hero from "./Hero"
import "./HomePage.css"
import NavBar from "./NavBar"
import Rows from "./Rows"
const SubscriptionContext = React.createContext()

function HomePage() {
  const [subscribedServices, setSubscribedServices] = useState({
    Netflix: false,
    Prime: false
  })

  return (
    <div className='home-page'>
      <SubscriptionContext.Provider
        value={{ subscribedServices, setSubscribedServices }}>
        <NavBar />
        <Hero />
        <Rows rowCount={2} />
      </SubscriptionContext.Provider>
    </div>
  )
}
export { SubscriptionContext }
export default HomePage
