import React, { useState } from "react"
const PREFIX = "whats-on-what"
function useLocalStorage(key, initialValue) {
  const prefixedKey = `${PREFIX}-key`
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const value = window.localStorage.getItem(prefixedKey)
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
  
      return initialValue
    }
  })

  function setValue(value) {
    try {
      const toBeStored = value instanceof Function ? value(storedValue) : value

      setStoredValue(value)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(prefixedKey, JSON.stringify(toBeStored))
      }
    } catch (error) {
     
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
