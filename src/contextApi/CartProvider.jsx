import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, reducerFn } from '../data/cartReducer';
import productsData from "../data/productsData";

const cartContext = createContext();

export default function CartProvider({ children }) {

  const [state, dispatch] = useReducer(reducerFn, initialState);

  // Load products
  useEffect(() => {
    dispatch({ type: "set_products", payload: productsData });
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // FILTER LOGIC
  useEffect(() => {
    let tempProducts = [...state.products];

    // BRAND
    if (state.filters.brands.length > 0) {
      tempProducts = tempProducts.filter(p =>
        state.filters.brands.includes(p.brand.toLowerCase())
      );
    }

    // CATEGORY
    if (state.filters.categories.length > 0) {
      tempProducts = tempProducts.filter(p =>
        state.filters.categories.includes(p.category.toLowerCase())
      );
    }

    // PRICE
    tempProducts = tempProducts.filter(p =>
      p.finalPrice <= state.filters.price
    );

    // SORT
    switch (state.filters.sort) {
      case "latest":
        tempProducts.sort((a, b) => b.id - a.id);
        break;

      case "featured":
        tempProducts = tempProducts.filter(p => p.tag === "featured-product");
        break;

      case "top-rated":
        tempProducts.sort((a, b) =>
          b.ratings === a.ratings
            ? b.rateCount - a.rateCount
            : b.ratings - a.ratings
        );
        break;

      case "price-low":
        tempProducts.sort((a, b) => a.finalPrice - b.finalPrice);
        break;

      case "price-high":
        tempProducts.sort((a, b) => b.finalPrice - a.finalPrice);
        break;

      default:
        break;
    }

    dispatch({ type: "apply_filters", payload: tempProducts });

  }, [state.filters, state.products]);

  // MAX PRICE
  useEffect(() => {
    if (state.products.length > 0) {
      const max = Math.max(...state.products.map(p => p.finalPrice));
      dispatch({ type: "set_max_price", payload: max });
    }
  }, [state.products]);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export const useCartContext = () => useContext(cartContext);
