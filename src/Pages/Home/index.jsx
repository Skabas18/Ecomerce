import { useContext } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything  </div>
      )
    }
  }

  return (
    <Layout className='bg-amber-100'>
      <div className='flex items-center justify-center relative w-80'>
        <h1>Exclusive Products</h1>
      </div>
      <input type="text" placeholder='Search a product' className='border border-black rounded-lg w-80 p-4 mt-4 mb-4 focus:outline-none' onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid dap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
