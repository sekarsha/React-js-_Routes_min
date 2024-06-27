import React, { useState } from 'react'
import data from "../assets/data.json"
import One from './One';
import Cart from './Cart';




const Home = () => {

  const [product] = useState(data);

  return (
    <div className=' container'>
      <div className="row">
        {product.map((product) => (

          <One key={product.id} product={product} />

        ))}

        
      </div>

    </div>
  )
}

export default Home