import React from 'react'
import Categorycard from "./CategoryCard";
import { categoriesData } from "./dummy";
import './category.css'

const Categories:React.FC=()=>{
    return (
        <>
         <div className='flex gap-10 carousel-container mt-4'>
     {
       
       categoriesData.map((data,index)=>(
       <div key={index} className='carousel border rounded'>
          <Categorycard  id={data.id}name = {data.name} img={data.link} />
       </div>
       ))
      
     }
     </div>
       

        </>
    )
}
export default Categories