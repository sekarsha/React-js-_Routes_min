import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './com/Header'
import Home from './com/Home'
import Cart from './com/Cart'
import { createContext, useState } from 'react'

export const cart_context = createContext();



function App() {


  const [cart, setcart] = useState([])

  return (
    <>

      <cart_context.Provider  value={{cart,setcart}}>
        <BrowserRouter>
          <Header cart={cart} />
          <div className=' container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Cart' element={<Cart/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </cart_context.Provider>


    </>
  )
}

export default App
