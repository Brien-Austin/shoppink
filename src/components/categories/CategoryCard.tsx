import React from 'react'
import './category.css'
interface categoryProps{
    id: number;
    name : string,
    img : string
}
const CategoryCard:React.FC<categoryProps> = ({id,name,img}) => {
  return (
<>
  <div key={id} className='carousel relative'>

    <img src={img} className='object-cover brightness-50 rounded lg:w-72 lg:h-48 sm:h-24 sm:w-16' alt="" />
    <h1 className='absolute inset-0  flex items-center justify-center text-white text-shadow lg:text-md sm:text-sm whitespace-nowrap'>{name}</h1>
  </div>
</>

  )
}

export default CategoryCard