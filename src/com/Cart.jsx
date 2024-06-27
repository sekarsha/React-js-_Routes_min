import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { cart_context } from '../App';


const Cart = ({product}) => {
  
   const {cart,setcart}=useContext(cart_context)

  const [total, settotal] = useState(0);
    
 useEffect(()=>{
  
  settotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
 },[cart])

   

  


  return (
    <div >
      

      {cart.map((product) => (

        <div className=' p-3 m-2 border border-black d-flex  align-content-center align-items-center'>
          
          <img src={product.images[0]} width={"150px"} height={"100px"} alt="" />
          <div className=' ms-2'>
            <h6>Product Name : {product.title}</h6>
            <h6> Product Price :${product.price}</h6>
            <button className='btn btn-sm  btn-warning' onClick={()=>{setcart(cart.filter((c) => c.id !== product.id))}}>Add to cart</button>
          </div>

        </div>
      ))}



      <div>
        <h3 className=' fw-bold'>Total Amount : ${total}</h3>
      </div>



    </div>
  )
}

export default Cart