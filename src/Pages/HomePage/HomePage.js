import React, { useState } from "react"
import Hero from "./Hero"
import "./HomePage.css"
import Grid from "./MovieGrid"
import Rows from "./Rows"
import ServiceContainer from "./ServiceContainer"

const SubscriptionContext = React.createContext()

function HomePage() {
  const [subscribedServices, setSubscribedServices] = useState({
    netflix: true,
    prime: false,
    hbo: false,
    hulu: true
  })

  return (
    <div className='home-page'>
      <SubscriptionContext.Provider
        value={{ subscribedServices, setSubscribedServices }}>
        <ServiceContainer />
        <Grid />
        {/* <Rows rowCount={2} /> */}
      </SubscriptionContext.Provider>
    </div>
  )
}
export { SubscriptionContext }
export default HomePage
