import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../hooks/Firebase.init';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        emailErrors: "",
        passwordErrors: "",
        general: ""
    })

    const [user, loading] = useAuthState(auth);
    const [signInWithEmailAndPassword,user2 , loading2, hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user3, googleLoading, googleError] = useSignInWithGoogle(auth);


       //handle  email
    const handleWithEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, emailErrors: "" })
        }
        else {
            setErrors({ ...errors, emailErrors: "Invalid Email Provied" })
            setUserInfo({ ...userInfo, email: "" })
        }

    }

    //handle password
    const handleWithPassword = event => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value)
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordErrors: "" })
        }
        else {
            setErrors({ ...errors, passwordErrors: "Password must be 6 character's" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

  const handleLogin=(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(userInfo.email, userInfo.password)
  }
      
   const handleWithGoogle=()=>{
    signInWithGoogle(userInfo.email, userInfo.password)
   }

   const naviagte= useNavigate()
   const location = useLocation()
   const from = location.state?.from?.pathname || '/'
   if(user){
      naviagte(from ,{replace:true})
   }

    return (
        <div className='flex justify-center items-center h-full'>
        <div className='flex-col shadow-lg p-6 mt-6'>
            <div>
                <h1 className='text-3xl font-bold mt-2'>Login</h1>
                <p className=' font-semibold mt-2 mb-3 text-gray-700'>Doesn't have an account yet ? <Link className='text-red-400 font-semibold' to='/singup'>SingUp</Link> </p>
            </div>
            <div>
                <form onSubmit={handleLogin}>
                    <div>
                        
                        <input onChange={handleWithEmail} className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="email" name="email" placeholder='Email' />
                        {errors?.emailErrors && <p className='text-red-400 font-semibold'>{errors.emailErrors}</p>}
                    </div>
                    <div>
                        <div className='flex justify-between'>
                        </div>
                        <input onChange={handleWithPassword} className='w-full py-3 pl-3 mb-6 mt-1 rounded-sm border border-red-400' type="password" name="password" placeholder='password' />
                        {errors?.passwordErrors && <p className='text-red-400 font-semibold'>{errors.passwordErrors}</p>}
                    </div>
                    <div>
                        <input className='w-full bg-red-500 text-center py-3 font-bold font-serif text-white text-1xl rounded-sm cursor-pointer' type="submit" value="LOGIN" />
                    </div>
                    {loading}
                </form>
               
                <div className='flex justify-evenly items-center mt-2'>
                    <div className='border-b w-32 border-red-400'></div>
                    <div className='text-center p-2 font-semibold'>Or login with </div>
                    <div className='border-b w-32 border-red-400'></div>
                </div>
                <div className='flex justify-between gap-3 mt-6 mb-2'>
                    <button onClick={() => handleWithGoogle()} className='w-2/4 py-2 px-3 border border-red-400 text-xl font-medium'> <span className='flex items-center justify-center'>  Google</span>  </button>
                    <button className='w-2/4 py-2 px-3 border border-red-400 text-xl font-medium'><span className='flex items-center justify-center'><img className='md:w-[30px] mr-4 w-[20px]' src="https://img.icons8.com/color/2x/facebook-circled--v4.gif" alt="" /> Facebook</span></button>
                </div>

            </div>
        </div>

    </div>
    );
};

export default Login;