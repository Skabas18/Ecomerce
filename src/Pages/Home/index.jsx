import { useContext } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
function Home() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout className='bg-amber-100'>
      Home
      <div className='grid dap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
