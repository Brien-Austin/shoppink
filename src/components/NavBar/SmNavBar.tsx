import { Bell, Home, List, ShoppingBag, User } from 'lucide-react'
import React from 'react'

const SmNavBar:React.FC = () => {
  return (
    <nav className=" lg:hidden sm:block fixed bottom-0 left-0 w-full border  text-white p-4 px-5">
    
    <div className='flex justify-center items-center gap-5 mx-5'>
    <div className='flex flex-col gap-1 items-center text-black text-[10px]'><Home className='text-slate-600 text-[8px]'/>Home</div>
    <div className='flex flex-col gap-1 items-center text-black text-[10px]'><List className='text-slate-600 text-[8px]'/>Categories</div>
    <div className='flex flex-col gap-1 items-center text-black text-[10px]'><Bell className='text-slate-600 text-[8px]'/>Notifications</div>
    <div className='flex flex-col gap-1 items-center text-black text-[10px]'><User className='text-slate-600 text-[8px]'/>Account</div>
    <div className='flex flex-col gap-1 items-center text-black text-[10px]'><ShoppingBag className='text-slate-600 text-[8px]'/>Cart</div>
   
    </div>
  </nav>
  )
}

export default SmNavBar