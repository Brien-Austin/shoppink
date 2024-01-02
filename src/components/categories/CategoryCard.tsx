import React from 'react'
import './category.css'
import { useDispatch } from 'react-redux';
import { selectCategory } from '@/store/features/categorySlice';
import { Link } from 'react-router-dom';
interface categoryProps{
    id: number;
    name : string,
    img : string
}

const CategoryCard:React.FC<categoryProps> = ({id,name,img}) => {
  const dispatch = useDispatch();
  const handleCategory=(name:string) => {
    dispatch(selectCategory(name))
  
  }
  return (
<>
  <Link to="/products"><div key={id} onClick={()=>handleCategory(name)} className='carousel relative cursor-pointer'>

    <img src={img} className='object-cover brightness-50 rounded lg:w-72 lg:h-48 sm:h-24 sm:w-24' alt="" />
    <h1 className='absolute inset-0  flex items-center justify-center text-white text-shadow lg:text-xl sm:text-[12px] text-center '>{name}</h1>
  </div>
  </Link>
</>

  )
}

export default CategoryCard