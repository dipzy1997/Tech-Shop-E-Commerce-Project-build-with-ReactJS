import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'


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
