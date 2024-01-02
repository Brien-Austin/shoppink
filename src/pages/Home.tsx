import SmNavBar from "@/components/NavBar/SmNavBar";
import NavBar from "../components/NavBar/LgNavBar";
import Categories from "../components/categories/Categories";


export default function Home(){
    return (
        <>
        <div className="w-full h-1 bg-pink-700">
           
            
        </div>
        <div className="">
        <NavBar/>
        <SmNavBar/>
       <div className="mx-16">
       <h1 className="mt-4 text-2xl font-bold text-slate-800">Explore Various Categories</h1>
       <Categories/>
       </div>
        </div>
        </>
      
    )
}