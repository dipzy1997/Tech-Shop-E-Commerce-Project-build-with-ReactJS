import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, reducerFn } from '../data/cartReducer';
import productsData from "../data/productsData"

const cartContext = createContext();



export default function CartProvider({children}) {

const [state, dispatch] = useReducer(reducerFn, initialState);



useEffect(()=>{
    dispatch({type: "set_products", payload: productsData,})
},[]);

useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(state.cart))
},[state.cart]);



  return (
   <cartContext.Provider value={{state, dispatch}}>
        {children}
   </cartContext.Provider>
  )
}

export const useCartContext = () => useContext(cartContext);