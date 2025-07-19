import React, { use, useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import Orders from './pages/Orders'
import Login from "./components/Login"
import List from './pages/List'
import { ToastContainer, toast } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"


const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")
  // const [token, setToken] = useState("")

  // console.log("Sending token: ", token)
  useEffect(() => {
    localStorage.setItem("token", token)
    // setToken(response.data.token);
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === "" ?
        <Login setToken={setToken} /> :
        <>
          <Navbar setToken={setToken} />
          <hr className='text-gray-200' />

          <div className="flex w-full">
            <Sidebar />

            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>

      }

    </div>
  )
}

export default App
