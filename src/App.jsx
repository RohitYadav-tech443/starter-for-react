import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/About'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       { path: '/', element: <Home /> },      // Home page
  //       { path: 'about', element: <About /> }, // About page
  //     ],
  //   },
  // ]);

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
  <div className="min-h-screen flex flex-wrap content-between bg-[url('https://tse4.mm.bing.net/th/id/OIP.M7NrizpKBx932bPC4LrCagHaC-?pid=Api&P=0&h=180')] bg-cover bg-center">
    <div className="w-full block">
      <Header />
        <main className="flex-1 px-4 py-6 ">
          <div className="max-w-7xl mx-auto">
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<AboutPage />} />
            </Routes> */}
            <Outlet />
          </div>
        </main>
      <Footer />
    </div>
  </div>
) : null

}

export default App