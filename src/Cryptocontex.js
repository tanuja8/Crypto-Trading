import React from 'react'
import { createContext } from 'react'
const  Crypto=createContext()

const Cryptocontex = ({children}) => {
  return (
    <Crypto.Provider>{children}</Crypto.Provider>
  )
}

export default Cryptocontex
