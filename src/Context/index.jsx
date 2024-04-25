import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart . Increment quantity
    const [count, setCount] = useState(0);

    //Poduct Detail . Open/Close
    const [isPorductDetailOpen, setIsPorductDetailOpen] = useState(false);
    const openProductDetail = () =>{ setIsPorductDetailOpen(true) }
    const closeProductDetail = () =>{ setIsPorductDetailOpen(false) }
    
    //Poduct Detail . Show product
    const [productToShow, setProductToShow] = useState({})
    
    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts]= useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isPorductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider ,ShoppingCartContext}