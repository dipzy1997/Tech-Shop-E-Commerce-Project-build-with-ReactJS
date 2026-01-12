import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import "../Responsive.css"
import AllProduct from '../InnerPageComponent/AllProduct'
import Cart from '../BodyComponent/Cart'


export default function Navigation() {
  return (
    <div>
    
        <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/allProducts" element={<AllProduct/>} />

            </Route>
            

        </Routes>
    </div>
  )
}
