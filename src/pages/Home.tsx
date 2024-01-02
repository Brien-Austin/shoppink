import SmNavBar from "@/components/NavBar/SmNavBar";
import NavBar from "../components/NavBar/LgNavBar";
import Categories from "../components/categories/Categories";


export default function Home(){
    return (
        <>
        <div className="w-full h-1 bg-pink-700">
           
           
            
        </div>
   
     <h1 className="mx-16 sm:mx-5 mt-5 text-2xl  font-bold text-pink-600">Shop<span className="text-slate-800">Pink</span></h1>
    
 
        <div className="">
        <NavBar/>
        <SmNavBar/>
       <div className="mx-16 sm:mx-5">
       <h1 className="mt-4 lg:text-2xl sm:text-xl font-bold text-slate-800">Explore Categories</h1>
       <Categories/>
       </div>
        </div>
        </>
      
    )
}