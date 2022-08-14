import React, { useState } from "react"
import Hero from "./Hero"
import "./HomePage.css"
import Grid from "./MovieGrid"
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
        <Grid></Grid>
        {/* <Rows rowCount={2} /> */}
      </SubscriptionContext.Provider>
    </div>
  )
}
export { SubscriptionContext }
export default HomePage
