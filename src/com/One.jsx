import React, { useContext } from 'react'
import { cart_context } from '../App'

const One = ({ product }) => {


  const { cart, setcart } = useContext(cart_context)
  const name = product.title.length > 10 ? product.title.substring(0, 10) + "..." : product.title

  const handleAddToCart = () => {
    setcart([...cart, product])
  }
  const handleRemoveCart = () => {
    setcart(cart.filter((c) => c.id !== product.id))
  }



  return (
    <div className=' col border border-black p-2 m-1'>
      <div >
        <div className=' d-flex justify-content-center'>
          <img src={product.images[0]} alt="" width={"200px"} height={"200px"} />

        </div>

        <div className=' d-flex justify-content-center p-3 align-items-center  p-1 sha' style={{ height: "180px" }}  >
          <div>
          <h5>{product.brand}</h5>
          <h6 className=' m-0'>{name}</h6>
          <p className=' m-0' style={{ fontSize: "11px" }}>{product.description}</p>
          <h5>${product.price}</h5>
          </div>
          
        </div>

        <div className=' mt-2 mb-2 '>
          {
            cart.includes(product) ? <button className=' btn btn-sm btn-warning' onClick={handleRemoveCart}>Remove from cart</button> : <button className='btn btn-sm btn-primary' onClick={handleAddToCart}>Add to cart</button>
          }
        </div>




      </div>




    </div>
  )
}

export default One