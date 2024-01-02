
import { Heart, Search, ShoppingBag, User } from 'lucide-react';
import React from 'react';

const Navbar:React.FC = () => {
  return (
    <nav className="p-5 w-screen sm:hidden lg:block px-20 shadow">
      <div className="container mx-auto  flex justify-between items-center">
    <div className='flex items-center space-x-16'>
    <div className=" "><h1 className='text-2xl text-pink-600 '>ShopPink</h1></div>
    <div className='w-96 h-12 flex border rounded border-slate-300'>
        <input className="w-full outline-none rounded px-3" placeholder='Electronics, Clothes , Jwelleries' />
     <div className='flex justify-center items-center p-3'>
     <Search className='text-slate-500'/>
     </div>
    </div>

    </div>
        <div className="flex items-center space-x-8 ">
          <a href="#" className="text-black transition delay-50 hover:bg-pink-50 p-2 rounded text-md hover:text-pink-500">
            
          </a>
          <a href="#" className="flex text-sm flex-col items-center gap-0 text-black hover:bg-pink-50 p-2 rounded text-md hover:text-pink-500  ">
          <User className="text-gray-700" size={18}/>  <h1 className='text-[12px]'>Profile</h1>
          </a>
               
          <a href="#" className="flex text-sm flex-col items-center gap-0 text-black hover:bg-pink-50 p-2 rounded text-md hover:text-pink-500  ">
          <Heart className="text-gray-700" size={18}/>  <h1 className='text-[12px]'>Wishlist</h1>
          </a>
         
          <a href="#" className="flex text-sm flex-col items-center gap-0 text-black hover:bg-pink-50 p-2 rounded text-md hover:text-pink-500  ">
          <ShoppingBag  className="text-gray-700"size={18}/>  <h1 className='text-[12px]'>Cart</h1>
          </a>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
