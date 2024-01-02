import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Categories from './pages/Categories'

export default function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/categories' element={<Categories/>}/>
    </Routes>
  
    </>
  )
}