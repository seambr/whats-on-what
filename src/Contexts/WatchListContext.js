import React, { useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const WatchListContext = React.createContext()
export function useWatchList() {
  return useContext(WatchListContext)
}
function WatchListProvider(props) {
  const [list, setList] = useLocalStorage("watchlist", [])

  return (
    <WatchListContext.Provider value={{ list, setList }}>
      {props.children}
    </WatchListContext.Provider>
  )
}

export default WatchListProvider
