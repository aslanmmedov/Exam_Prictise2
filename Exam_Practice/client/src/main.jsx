import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import {HelmetProvider}  from "react-helmet-async"
import './index.css'
import App from './App.jsx'
import WishlistProvider from "./context/wishlistContext.jsx";

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BrowserRouter>,
  </HelmetProvider>
)
