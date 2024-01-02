import SmNavBar from "@/components/NavBar/SmNavBar";
import NavBar from "../components/NavBar/LgNavBar";
import Categories from "../components/categories/Categories";
/*import { useSelector } from "react-redux";
import { RootState } from "@/store/store";*/
import React from "react";





const  Home:React.FC =()=>{
   /* const select = useSelector((state:RootState)=>state.nav.selected)*/
    return (
        <>
      
   
     <h1 className="mx-16 sm:mx-5 mt-5 text-2xl  font-bold sm:block lg:hidden text-slate-800">Shop<span className="text-pink-600 ">Pink</span></h1>
    
 
        <div className="">
        <NavBar/>
        <SmNavBar/>
       <div className="mx-16 sm:mx-5">
       <h1 className="mt-8 lg:text-xl sm:text-md font-[500] text-slate-800">Explore Categories</h1>
       <Categories/>
       
      
       </div>
        </div>
        </>
      
    )
}
export default Home;