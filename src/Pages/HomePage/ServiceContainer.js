import React, { useContext, useState } from "react"
import { SubscriptionContext } from "./HomePage.js"
import { useSearch } from "../../Contexts/SearchContext.js"
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs"
function ServiceContainer() {
  const [show, setShow] = useState(false)
  const { query, setQuery } = useSearch()
  const services = ["netflix", "prime", "hbo", "hulu", "disney"]
  return (
    <div className='subscription-container'>
      <div className='services'>
        {services.map((s, i) => (
          <Service
            key={i}
            service={s}
            imgSource={`../logos/${s}-icon.png`}></Service>
        ))}
      </div>
      {!show ? (
        <BsChevronCompactDown
          color='white'
          cursor='pointer'
          size={30}
          onClick={() => setShow(true)}></BsChevronCompactDown>
      ) : (
        <>
          <div className='filters'>
            <Filter
              name='Genre'
              value={query.genre}
              onChange={(e) =>
                setQuery((old) => ({ ...old, genre: e.target.value }))
              }
              options={["action", "adventure", "animation"]}
            />
            <Filter
              name='Type'
              value={query.type}
              onChange={(e) =>
                setQuery((old) => ({ ...old, type: e.target.value }))
              }
              options={["all", "movie", "series"]}
            />
            {/* <Filter name='Rating' value={query.genre} onChange={(e)=>setQuery(old=>({...old,genre:e.target.value}))}></Filter> */}
          </div>
          <BsChevronCompactUp
            color='white'
            cursor='pointer'
            size={30}
            onClick={() => setShow(false)}></BsChevronCompactUp>
        </>
      )}
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

function Filter({ name, value, onChange, options }) {
  return (
    <div className='filters-container'>
      <select className='filter-button' value={value} onChange={onChange}>
        <option selected disabled hidden>
          {name}
        </option>
        {options.map((option) => (
          <option value={option}>{option.toUpperCase()}</option>
        ))}
      </select>
    </div>
  )
}

export default ServiceContainer
