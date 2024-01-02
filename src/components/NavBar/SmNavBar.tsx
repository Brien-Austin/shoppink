import { selectOption } from '@/store/features/navOptionSlice';
import { Bell, Home, List, ShoppingBag, User } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

const SmNavBar:React.FC = () => {
    const dispatch = useDispatch();
    const handleNav = (option:string) =>{
        dispatch(selectOption(option))
    }
  return (
    <nav className=" lg:hidden sm:block fixed bottom-0 left-0 w-full border  text-white p-4 px-5">
    
    <div className='flex justify-center items-center gap-5 mx-5'>
    <Link to={"/"}><div onClick={()=>handleNav('Home')} className='flex flex-col gap-1 items-center text-black text-[10px]'><Home className='text-slate-600 text-[8px]'/>Home</div></Link>
    <Link to={"/categories"}><div  onClick={()=>handleNav('Categories')} className='flex flex-col gap-1 items-center text-black text-[10px]'><List className='text-slate-600 text-[8px]'/>Categories</div></Link>
    <Link to={"/notifications"}><div  onClick={()=>handleNav('Notifications')} className='flex flex-col gap-1 items-center text-black text-[10px]'><Bell className='text-slate-600 text-[8px]'/>Notifications</div></Link>
    <Link to={"/profile"}><div  onClick={()=>handleNav('Account')} className='flex flex-col gap-1 items-center text-black text-[10px]'><User className='text-slate-600 text-[8px]'/>Account</div></Link>
    <Link to={"/cart"}><div  onClick={()=>handleNav('Cart')} className='flex flex-col gap-1 items-center text-black text-[10px]'><ShoppingBag className='text-slate-600 text-[8px]'/>Cart</div></Link>
   
    </div>
  </nav>
  )
}

export default SmNavBar