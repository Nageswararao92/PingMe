import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'
const Login = () => {
  return (
    // <div className='min-h-screen flex flex-col md:flex-row'>
    //   <img src={assets.bgImage}  alt="" className=' absolute top-0 left-0 z-1 h-full w-full object-cover    '></img>
    //   <div className='flex flex-1 flex-col items-start justify-between p-6 md:p-10  lg:p-40'>
    //     <img src={assets.logo} alt="" className='h-12 object-contain' />
    //     <div>
    //       <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
    //         <img src={assets.group_users} className='h-8 md:h-10' alt="" />
    //         <dir> 
    //           <div className='flex'>
    //             {Array(5).fill(0).map((_,i)=>(<Star key={i} className='size-4 md:size-4.5 text-transparent  fill-amber-500'></Star>))}
    //             <p>Used by +1200 customers</p>
    //           </div>
    //         </dir>
    //       </div>
    //       <h1 className='text-3xl md:text-6xl font-bold bg-gradient-to-r from-indigo-950 to bg-indigo-900 bg-clip-text bg-transparent'>More than just friends truly connect</h1>
    //       <p> Connect with global community on </p>
    //     </div>
        
    //   </div>
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10 '>
          <SignIn/>
        </div>
    // </div>
  )
}

export default Login
