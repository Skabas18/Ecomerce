import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () =>{
  let router = useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-account',element: <MyAccount />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/*',element: <NotFound />},
    {path: '/sign-in',element: <SignIn />},

  ]);
  return router
}
const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
