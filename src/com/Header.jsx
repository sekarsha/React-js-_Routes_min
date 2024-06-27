import React from 'react'
import {Link} from "react-router-dom"

const Header = ({cart}) => {
  return (
    <div className=' d-flex justify-content-between p-2 bg-body-secondary  pt-3'>
         
        <div> <h3 className=' fw-bold font-monospace'>Sha_Cart <i class="bi bi-emoji-sunglasses-fill"></i></h3> </div>
       
          <ul className=' d-flex  gap-5 align-items-center '>
            <li className=' nav-link fw-bold '><Link to={"/"} className='nav-link ' >Home</Link></li>

            <li className=' nav-link fw-bold d-flex align-items-center'>
              <Link to={"/Cart"} className='nav-link ' >View Cart </Link> 
              <span className=" translate-middle badge rounded-pill bg-danger mb-3">{cart.length}</span>
             </li>

          </ul>
        

    </div>
  )
}

export default Header