import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
 return !loading ? (
  // 
  <div className="min-h-screen flex flex-wrap content-between bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeF6ngCGone5UWQwEPdYbQwby6IEtjBEZfMg&s')] bg-cover bg-center">
    <div className="w-full block">
      <Header />
        <main className="flex-1 px-4 py-6 bg-white/70 shadow-blue-500">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      <Footer />
    </div>
  </div>
) : null

}

export default App