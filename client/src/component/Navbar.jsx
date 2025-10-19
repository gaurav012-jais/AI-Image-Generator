import { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'

function Navbar() {
  const { user, setshowLogin, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-10 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm sticky top-0 z-20">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="App Logo"
          className="w-28 sm:w-32 lg:w-40 hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Right Section */}
      <div>
        {user ? (
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Credits Button */}
            <button
              onClick={() => navigate('/buy')}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 sm:px-6 py-2 rounded-full 
                        hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <img src={assets.credit_star} alt="credits" className="w-5" />
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                Credits left: <span className="text-indigo-700">{credit}</span>
              </p>
            </button>

            {/* User Name */}
            <p className="text-gray-600 max-sm:hidden font-medium">
              Hi, <span className="text-indigo-600">{user.name}</span>
            </p>

            {/* Profile Dropdown */}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-10 rounded-full border border-gray-300 shadow-sm cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute hidden group-hover:block top-12 right-0 bg-white border border-gray-200 rounded-xl shadow-md py-2 px-3 text-sm z-20 transition-all duration-300">
                <ul className="space-y-1">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // When not logged in
          <div className="flex items-center gap-3 sm:gap-6">
            <p
              onClick={() => navigate('/buy')}
              className="cursor-pointer text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
            >
              Pricing
            </p>
            <button
              onClick={() => setshowLogin(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 py-2 sm:px-10 text-sm rounded-full font-medium 
                        hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
