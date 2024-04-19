import React, { useState } from "react";

import "./HomePage.css";
import Grid from "./MovieGrid";

import ServiceContainer from "./ServiceContainer";

const SubscriptionContext = React.createContext();

function HomePage() {
  const [subscribedServices, setSubscribedServices] = useState({
    NETFLIX: true,
    PRIME: false,
    MAX: false,
    HULU: true,
  });

  return (
    <div className="home-page">
      <SubscriptionContext.Provider
        value={{ subscribedServices, setSubscribedServices }}
      >
        <Grid />
      </SubscriptionContext.Provider>
    </div>
  );
}
export { SubscriptionContext };
export default HomePage;
