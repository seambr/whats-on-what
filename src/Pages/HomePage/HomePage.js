import React, { useState } from "react"
import Hero from "./Hero"
import "./HomePage.css"
import Grid from "./MovieGrid"
import Rows from "./Rows"
import ServiceContainer from "./ServiceContainer"
import SearchProvider from "../../Contexts/SearchContext"
const SubscriptionContext = React.createContext()

function HomePage() {
  const [subscribedServices, setSubscribedServices] = useState({
    netflix: true,
    prime: false,
    hbo: false
  })

  return (
    <SearchProvider>
      <div className='home-page'>
        <SubscriptionContext.Provider
          value={{ subscribedServices, setSubscribedServices }}>
          <div className='fixed'>
            <Hero />
            <ServiceContainer></ServiceContainer>
          </div>
          <Grid></Grid>
          {/* <Rows rowCount={2} /> */}
        </SubscriptionContext.Provider>
      </div>
    </SearchProvider>
  )
}
export { SubscriptionContext }
export default HomePage
