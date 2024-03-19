import React, { createContext, useState } from 'react'

const ShoppingCartContext = createContext()
function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0);
    console.log("Count: ", count);
    return (
        <ShoppingCartContext.Provider value= {
            {
                count, setCount
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export  {ShoppingCartProvider, ShoppingCartContext}