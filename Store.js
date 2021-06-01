import React, { createContext, useContext, useReducer } from 'react'

export const Store = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <Store.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Store.Provider>
  )
}
export const useStateValue = () => useContext(Store)
