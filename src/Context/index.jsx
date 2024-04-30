import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart . Increment quantity
    const [count, setCount] = useState(0);

    //Poduct Detail . Open/Close
    const [isPorductDetailOpen, setIsPorductDetailOpen] = useState(false);
    const openProductDetail = () =>{ setIsPorductDetailOpen(true) }
    const closeProductDetail = () =>{ setIsPorductDetailOpen(false) }

    //Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () =>{ setIsCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () =>{ setIsCheckoutSideMenuOpen(false) }
    
    //Poduct Detail . Show product
    const [productToShow, setProductToShow] = useState({})
    
    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts]= useState([])

    //Shopping Cart . Order
    const [order, setOrder]= useState([])


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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider ,ShoppingCartContext}