
import { selectOption } from '@/store/features/navOptionSlice';
import { RootState } from '@/store/store';
import { Home as House ,List ,Bell,User,ShoppingBag} from "lucide-react";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const NavigationData = [
    {
        name : 'Home',
        link : '/',
        icon : <House/>
    },
    {
        name : 'Categories',
        link : '/categories',
        icon : <List/>
    },
    {
        name : 'Notifications',
        link : '/notifications',
        icon : <Bell/>
    },
    {
        name : 'Account',
        link : '/profile',
        icon : <User/>
    },
    {
        name : 'Cart',
        link : '/cart',
        icon : <ShoppingBag/>
    },
]

const SmNavBar:React.FC = () => {
    const dispatch = useDispatch();
    const selectedNav = useSelector((state:RootState)=>state.nav.selected)
    const handleNav = (option:string) =>{
        dispatch(selectOption(option))
    }
  return (
    <nav className=" lg:hidden sm:block fixed bottom-0 left-0 w-full border  text-white p-4 px-5">
    
    <div className='flex justify-center items-center gap-5 mx-5'>
        {NavigationData.map((data,index)=>(
           <Link to={data.link}onClick={()=>handleNav(data.name)} key={index}>
             <h1 className={`flex flex-col gap-1 ease-out  items-center  text-[10px] ${selectedNav ===data.name ? 'text-pink-600  active:scale-105 hover:scale-105 focus:scale-105' :'text-slate-700 active:scale-105 hover:scale-105 focus:scale-105'}`}> <span>{data.icon}</span> {data.name} </h1>
           </Link>
        ))}
   
   
    </div>
  </nav>
  )
}

export default SmNavBar