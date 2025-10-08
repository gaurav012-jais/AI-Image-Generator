import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {

    const [state,setstate]=useState('Login')
    const {setshowLogin,backendUrl,settoken,setuser}=useContext(AppContext)

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')


   const submitHandler = async (e) => {
  e.preventDefault();

  try {
    if (state === 'Login') {
      const { data } = await axios.post(backendUrl+'/api/user/login', { email, password });
      

      if (data.success) {
        settoken(data.token);
        setuser(data.user);
        localStorage.setItem('token', data.token);
        setshowLogin(false);
      } else {
        toast.error(data.message);
      }
    } else {
      const { data } = await axios.post(backendUrl+'/api/user/register', { name, email, password });
      // console.log("Register Response:", data);

      if (data.success) {
        settoken(data.token);
        setuser(data.user);
        localStorage.setItem('token', data.token);
        setshowLogin(false);
      } else {
        toast.error(data.message);
      }
    }
  } catch (error) {
    
    toast.error(error.message);
  }
};

    useEffect(()=>{
        document.body.style.overflow='hidden';

        return ()=>{
            document.body.style.overflow='unset';
        }
    },[])
  return (
    // absolute means fixed
    // absolute is used to give u a position where your login page is show if u not use absolute u get a your login page at the same page where your page is like if you open home page it will display on home page on a small space 
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

        <form onSubmit={submitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
            <p className='text-sm'>Welcome back! Please sign in to continue</p>

        {/* state here used to switch between login and sign up */}
            {
            state !=='Login' && 
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={ assets.profile_icon} alt='' width={40}/>
                <input onChange={e=>setname(e.target.value)} value={name} className='outline-none text-sm' type='text' placeholder='Full Name' required></input>
            </div>
            }

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={ assets.email_icon} alt='' width={30}/>
                <input onChange={e=>setemail(e.target.value)} value={email} className='outline-none text-sm' type='email' placeholder='Email' required></input>
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={ assets.lock_icon} alt='' width={20}/>
                <input onChange={e=>setpassword(e.target.value)} value={password} className='outline-none text-sm' type='password' placeholder='Password' required></input>
            </div>

            <p className='text-sm text-blue-600 cursor-pointer my-4'>Forget password</p>
            <button className='bg-blue-700 w-full text-white py-2 rounded-full'>{state==='Login'? 'login' : 'craete account'}</button>

            {
                state =='Login' ?
                <p className='mt-5 text-center text-black'>Don't have an account?
                <span className='text-blue-800 cursor-pointer' onClick={()=>setstate('Sign up')}>Sign up</span>
            </p>
            :
            
             <p className='mt-5 text-center text-black'>Already have an account?
                <span className='text-blue-800 cursor-pointer' onClick={()=>setstate("Login")}>Login</span>
            </p>

            }

           

           <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt='' className='top-5 right-5 cursor-pointer absolute'/> 
        </form>
    </div>
  )
}
