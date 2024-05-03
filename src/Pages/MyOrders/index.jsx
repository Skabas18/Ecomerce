import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { OrdersCard } from '../../Components/OrdersCard'


function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout className='bg-amber-100'>
            <div className='flex items-center justify-center relative w-80'>
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard date={order.date} totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}

export { MyOrders }