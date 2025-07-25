import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Order from './pages/Order'
import Placeorder from './pages/Placeorder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './pages/Product'
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/place-order' element={<Placeorder />}></Route>
        <Route path='/product/:productId' element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
