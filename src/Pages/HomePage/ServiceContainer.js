import React, { useContext } from "react"
import { SubscriptionContext } from "./HomePage.js"
import { useSearch } from "../../Contexts/SearchContext.js"
function ServiceContainer() {
  return (
    <div className='subscription-container'>
      <div className='services'>
        <Service
          service='netflix'
          imgSource='../logos/netflix-logo.png'></Service>
        <Service service='prime' imgSource='../logos/prime-logo.png'></Service>
        <Service service='hbo' imgSource='../logos/hbo-logo.webp'></Service>
        <Service service='hulu' imgSource='../logos/hulu-logo.png'></Service>
      </div>
      <div className='filters'>
        <Filters name='Genre'></Filters>
        <Filters name='Type'></Filters>
        <Filters name='Rating'></Filters>
      </div>
    </div>
  )
}

function Service({ service, imgSource }) {
  const { query, setQuery } = useSearch()
  const numSubscribed = Object.keys(query.subscribedServices).filter(
    (key) => query.subscribedServices[key] === true
  )
  function updateServiceList() {
    if (query.subscribedServices[service] && numSubscribed.length === 1) return
    setQuery((old) => ({
      ...old,
      subscribedServices: {
        ...old.subscribedServices,
        [service]: !old.subscribedServices[service]
      }
    }))
  }

  return (
    <div className='subscription-logo-container' onClick={updateServiceList}>
      <img
        className={query.subscribedServices[service] ? "selected" : ""}
        src={imgSource}
        alt={service}
      />
    </div>
  )
}

function Filters({ name }) {
  return (
    <div className='filters-container'>
      <select className='filter-button'>
        <option selected disabled hidden>
          {name}
        </option>
        <option value='action'>Action</option>
        <option value='action'>Fantasy</option>
        <option value='action'>Sci-Fi</option>
      </select>
    </div>
  )
}

export default ServiceContainer
