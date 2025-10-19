import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {
  const [state, setstate] = useState('Login')
  const { setshowLogin, backendUrl, settoken, setuser } = useContext(AppContext)

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          settoken(data.token)
          setuser(data.user)
          localStorage.setItem('token', data.token)
          setshowLogin(false)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          settoken(data.token)
          setuser(data.user)
          localStorage.setItem('token', data.token)
          setshowLogin(false)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <form
        onSubmit={submitHandler}
        className="relative w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-8 sm:p-10 text-gray-700 transition-all duration-300"
      >
        {/* Close Button */}
        <img
          onClick={() => setshowLogin(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
        />

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-gray-800">{state}</h1>
        <p className="text-center text-sm text-gray-500 mt-1">
          Welcome back! Please sign in to continue.
        </p>

        {/* Name Field (Sign Up Only) */}
        {state !== 'Login' && (
          <div className="flex items-center gap-3 border border-gray-300 px-5 py-3 rounded-full mt-6 hover:border-indigo-500 transition-colors duration-200">
            <img src={assets.profile_icon} alt="profile" width={28} />
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        {/* Email Field */}
        <div className="flex items-center gap-3 border border-gray-300 px-5 py-3 rounded-full mt-5 hover:border-indigo-500 transition-colors duration-200">
          <img src={assets.email_icon} alt="email" width={24} />
          <input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center gap-3 border border-gray-300 px-5 py-3 rounded-full mt-5 hover:border-indigo-500 transition-colors duration-200">
          <img src={assets.lock_icon} alt="lock" width={20} />
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {/* Forget Password */}
        <p className="text-sm text-indigo-600 mt-4 cursor-pointer hover:underline text-right">
          Forgot password?
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg 
                     shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {/* Switch Login/Signup */}
        {state === 'Login' ? (
          <p className="mt-6 text-center text-gray-700 text-sm">
            Don’t have an account?{' '}
            <span
              className="text-indigo-600 font-medium cursor-pointer hover:underline"
              onClick={() => setstate('Sign up')}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-6 text-center text-gray-700 text-sm">
            Already have an account?{' '}
            <span
              className="text-indigo-600 font-medium cursor-pointer hover:underline"
              onClick={() => setstate('Login')}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  )
}
