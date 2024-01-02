import React from 'react'

const SmNavBar:React.FC = () => {
  return (
    <nav className=" lg:hidden sm:block fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
    
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
  </nav>
  )
}

export default SmNavBar