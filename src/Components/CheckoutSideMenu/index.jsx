import './CheckoutSideMenu.css'
import { useContext } from 'react'
import { OrderCard } from '../OrderCard'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import { XMarkIcon } from '@heroicons/react/24/solid'
function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckOut = () => {
        const fechaActual = new Date()
        // Obtener el día, mes y año del objeto Date
        let dia = fechaActual.getDate();          // Día (1-31)
        let mes = fechaActual.getMonth() + 1;     // Mes (0-11, por eso sumamos 1)
        let año = fechaActual.getFullYear();      // Año completo

        // Asegurarse de que el día y el mes tengan dos dígitos
        dia = dia < 10 ? '0' + dia : dia;
        mes = mes < 10 ? '0' + mes : mes;
        // Formatear la fecha en el formato DD-MM-YYYY
        let fechaFormateada = dia + '-' + mes + '-' + año;

        const orderToAdd = {
            date: fechaFormateada,
            product: context.cartProducts,
            totalProducts:  context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])

    }
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => { context.closeCheckoutSideMenu() }} />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.image} price={product.price} handleDelete={handleDelete} />
                    )
                    )
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => { handleCheckOut() }}>Checkout</button>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }
