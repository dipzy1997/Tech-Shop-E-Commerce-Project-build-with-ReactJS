import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "../Responsive.css"

export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>    
        <Footer/>
    </div>
  )
}

// in outlet portion content will change, header and footer will remain same