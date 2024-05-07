import './App.css'
import { Home } from '../Home'
import { SignIn } from '../SignIn'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { MyAccount } from '../MyAccount'
import { Navbar } from '../../Components/Navbar'
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { useContext } from 'react'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut


  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },

    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])
  return routes
}
const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export { App }
