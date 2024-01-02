import SmNavBar from "@/components/NavBar/SmNavBar";
import NavBar from "../components/NavBar/LgNavBar";
import Categories from "../components/categories/Categories";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import React from "react";

import { Home as House ,List ,Bell,User,ShoppingBag} from "lucide-react";


export const NavigationData = [
    {
        name : 'House',
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
        name : 'Home',
        link : '/profile',
        icon : <User/>
    },
    {
        name : 'Cart',
        link : '/cart',
        icon : <ShoppingBag/>
    },
]


const  Home:React.FC =()=>{
    const select = useSelector((state:RootState)=>state.nav.selected)
    return (
        <>
        <div className="w-full h-1 bg-pink-600">
            
           
           
            
        </div>
   
     <h1 className="mx-16 sm:mx-5 mt-5 text-2xl  font-bold text-pink-600 sm:block lg:hidden">Shop<span className="text-slate-800">Pink</span></h1>
    
 
        <div className="">
        <NavBar/>
        <SmNavBar/>
       <div className="mx-16 sm:mx-5">
       <h1 className="mt-4 lg:text-2xl sm:text-xl font-bold text-slate-800">Explore Categories</h1>
       <Categories/>
       <h1>{select}</h1>
      
       </div>
        </div>
        </>
      
    )
}
export default Home;