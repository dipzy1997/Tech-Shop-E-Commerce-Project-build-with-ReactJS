import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import $ from "jquery";

window.$ = window.jQuery = $;
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import {BrowserRouter} from "react-router-dom"
import { HashRouter } from "react-router-dom";
import CartProvider from './contextApi/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <HashRouter>
      
        <App />
    
    </HashRouter>
  </CartProvider>
)
