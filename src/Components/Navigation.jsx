import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import "../Responsive.css"


export default function Navigation() {
  return (
    <div>
    
        <Routes>
            <Route element={<Layout/>}>

              <Route path="/" element={<Home/>} />

            </Route>
        </Routes>
    </div>
  )
}
