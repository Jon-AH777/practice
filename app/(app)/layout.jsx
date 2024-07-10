import React from 'react'
import Navbar from '../_components/Navbar'
const AppLaout = ({ children}) => {
  return (
    <div className='bg-gray-100'>
        <Navbar />
      {children}
    </div>
  )
}

export default AppLaout