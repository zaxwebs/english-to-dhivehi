import React, { createContext, useState } from 'react'
import App from './App'

const Context = createContext(0)

export const ContextWrapper = () => {
  const [swapped, setSwapped] = useState(false)
  return (
    <Context.Provider value={{ swapped, setSwapped }}>
      <App />
    </Context.Provider>
  )
}

export default Context
