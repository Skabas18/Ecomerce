import React from 'react'
import { CalendarDaysIcon, ArrowRightCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const { date, totalPrice, totalProducts } = props

    return (
        <div className='flex justify-between items-center mb-3 mt-3 border rounded-lg border-black w-80 h-20 px-3 py-6'>
            <div className='flex justify-between items-center w-fulls'>
                <div>
                    <li className='flex items-center'>
                        <CalendarDaysIcon className='h-6 w-6 text-black mr-2' />
                        <div>{date}</div>
                    </li>
                    <li className='flex items-center'>
                        <ShoppingBagIcon className='h-6 w-6 text-black mr-2' />
                        <div>{totalProducts}</div>
                    </li>
                </div>
            </div>
            <li className='flex items-center font-medium text-black text-2xl'>
                <div>$ {totalPrice}</div>
                <ArrowRightCircleIcon className='h-6 w-6 text-black ml-2' />

            </li>

        </div>
    )
}

export { OrdersCard }