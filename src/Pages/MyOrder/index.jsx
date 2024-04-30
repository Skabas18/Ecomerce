import React, { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    console.log(context.order?.slice(-1)[0]);
    return (
        <Layout>
            MyOrder
            <div className='flex flex-col w-80'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} />
                    )
                    )
                }
            </div>
        </Layout>
    )
}

export { MyOrder }