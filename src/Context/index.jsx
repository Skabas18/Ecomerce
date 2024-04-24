import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isPorductDetailOpen, setIsPorductDetailOpen] = useState(false);

    const openProductDetail = () =>{
        setIsPorductDetailOpen(true)
    }
    const closeProductDetail = () =>{
        setIsPorductDetailOpen(false)
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isPorductDetailOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider ,ShoppingCartContext}