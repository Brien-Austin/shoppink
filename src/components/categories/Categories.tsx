import React from 'react'
import Categorycard from "./CategoryCard";
import { categoriesData } from "./dummy";
import './category.css'

const Categories:React.FC=()=>{
    return (
        <>
         <div className='flex lg:gap-10 sm:gap-5 carousel-container mt-4'>
     {
       
       categoriesData.map((data,index)=>(
       <div key={index} className='carousel shadow-md rounded'>
          <Categorycard  id={data.id}name = {data.name} img={data.link} />
       </div>
       ))
      
     }
     </div>
       

        </>
    )
}
export default Categories