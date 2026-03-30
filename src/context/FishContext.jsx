import { createContext, useContext, useState } from 'react'

const FishContext = createContext(null)

export function FishProvider({ children }) {
  const [fishMode, setFishMode] = useState(false)
  const [caughtFrame, setCaughtFrame] = useState(null) // which frame the cat is in

  const activateFish = () => setFishMode(true)
  const deactivateFish = () => {
    setFishMode(false)
    setCaughtFrame(null)
  }
  const catchFish = (frameId) => {
    setCaughtFrame(frameId)
    setFishMode(false)
  }

  return (
    <FishContext.Provider
      value={{ fishMode, caughtFrame, activateFish, deactivateFish, catchFish }}
    >
      {children}
    </FishContext.Provider>
  )
}

export const useFish = () => useContext(FishContext)
