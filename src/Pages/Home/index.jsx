import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layaout'
import Card from '../../Components/Card/index.jsx'
import axios from "axios";
function Home() {
  const [items, setItems] = useState(null);
  const getUrl = 'https://fakestoreapi.com/products';
  useEffect(() => {
    axios.get(getUrl).then((response) => {
      console.log(response)
      setItems(response.data)
    })
  }, [])
  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((item) => {
            return <Card key={item.id} data={item} />
          })
        }
      </div>
    </Layout>
  )
}

export default Home