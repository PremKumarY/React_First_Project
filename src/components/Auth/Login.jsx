import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
     
    const SubmitEventhandeler = (e) => {
        e.preventDefault()
        console.log("Email is",email)
        console.log("Password is", password)

        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className="rounded-xl border-2 border-emerald-600 p-20" >
                
                <form onSubmit={(e) => {
                    SubmitEventhandeler(e)
                }} className='flex flex-col item-center justify-center'>

                    <input
                    value={email} 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    
                    required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400 ' type="email" name="email" placeholder='Enter Email' />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-gray-400 ' type="password" name="password"placeholder='Enter Password' />
                    <button className='text-white outline-none  border-non bg-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-white  mt-3'>Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login