import SmNavBar from '@/components/NavBar/SmNavBar'
import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Products:React.FC = () => {
    const selected = useSelector((state:RootState)=>state.category.selectedCategory)
  return (
   <>
   <SmNavBar/>
    <div>Productsof category : {selected}</div>
    </>
  )
}

export default Products