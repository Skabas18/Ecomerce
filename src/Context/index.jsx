import axios from 'axios';
import { createContext, useState, useEffect } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart . Increment quantity
    const [count, setCount] = useState(0);

    //Poduct Detail . Open/Close
    const [isPorductDetailOpen, setIsPorductDetailOpen] = useState(false);
    const openProductDetail = () => { setIsPorductDetailOpen(true) }
    const closeProductDetail = () => { setIsPorductDetailOpen(false) }

    //Checkout Side Menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false) }

    //Poduct Detail . Show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart . Order
    const [order, setOrder] = useState([])

    //Get products
    const [items, setItems] = useState(null);

    //Get products
    const [filteredItems, setFilteredItems] = useState(null);

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log("searchByTitle: ", searchByTitle);

    const baseURL = "https://fakestoreapi.com/products";
    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setItems(response.data)
            })
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            setFilteredItems,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider, ShoppingCartContext }