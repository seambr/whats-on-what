import React, { useState } from "react"

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  function setValue(value) {
    try {
      const toBeStored = value instanceof Function ? value(storedValue) : value

      setStoredValue(value)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(toBeStored))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
