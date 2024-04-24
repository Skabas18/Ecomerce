import { useContext } from 'react'
import './ProductDetail.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
function ProductDetail() {
  const context = useContext(ShoppingCartContext)
  return (
    <aside className={`${context.isPorductDetailOpen ? 'flex' :'hidden' } product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className='h-6 w-6 text-black' />
        </div>
      </div>
    </aside>
  )
}

export { ProductDetail }
