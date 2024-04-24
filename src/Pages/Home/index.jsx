import axios from 'axios';
import { useState, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { Layout } from '../../Components/Layout'
import { ProductDetail } from '../../Components/ProductDetail';
function Home() {
  const [items, setItems] = useState(null);
  const baseURL = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setItems(response.data)
      })
  }, [])
  return (
    <Layout className='bg-amber-100'>
      Home
      <div className='grid dap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
