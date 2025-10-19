import React, { useContext } from 'react'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import { Route, Routes } from 'react-router'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Login from './component/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { showLogin } = useContext(AppContext)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fdfbfb] via-[#f3f4f6] to-[#fef3c7] text-gray-800 transition-colors duration-700">

      {/* Toast Notifications */}
      <ToastContainer position="bottom-center" autoClose={3000} theme="colored" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="px-4 sm:px-10 md:px-14 lg:px-28 py-2">
          <Navbar />
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && <Login />}

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-10 md:px-14 lg:px-28 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="px-4 sm:px-10 md:px-14 lg:px-28 py-6">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
