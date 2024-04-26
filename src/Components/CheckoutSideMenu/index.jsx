import './CheckoutSideMenu.css'
import { useContext } from 'react'
import { OrderCard } from '../OrderCard'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)
    console.log('Cart products --->', context.cartProducts);

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => { context.closeCheckoutSideMenu() }} />
                </div>
            </div>
            <div className='px-6'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard id={product.id} title={product.title} imageUrl={product.image} price={product.price} />
                    )
                    )
                }
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }
