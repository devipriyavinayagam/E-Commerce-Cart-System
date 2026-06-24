import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import { CartProvider } from './CartContext'
import Navbar from './component/Navbar'

function App() {
  return (
    <CartProvider>
    <BrowserRouter basename="/E-Commerce-Cart-System">
      <Navbar />
      <h1 STYLE ={{color:'purple'}}> TESTING </h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )

}

export default App;

