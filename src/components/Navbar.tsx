import React from 'react'
import Home from '../pages/Home'

const Navbar = () => {

  return (
    <>

<div className=' h-20 border-2 mx-4 mt-4 bg-black rounded-3xl flex justify-evenly items-center          '>
<div className='text-gray-200 flex w-full text-lg '>

<div className='flex justify-evenly items-center w-5/12'>
<div className='cursor-pointer '>Home</div>
<div className='cursor-pointer'>About</div>
</div>
 
    <div className='cursor-pointer w-2/12 flex justify-center items-center'>
    <svg width="70" height="70" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5 6.97918V33.5M33.5 33.5L57.2292 20.317M33.5 33.5L9.77083 20.317M33.5 33.5V60.0208M57.2292 46.6829L35.6692 34.7051C34.8775 34.2653 34.4816 34.0454 34.0624 33.9591C33.6913 33.8828 33.3087 33.8828 32.9376 33.9591C32.5184 34.0454 32.1225 34.2653 31.3308 34.7051L9.77083 46.6829M58.625 44.8301V22.1699C58.625 21.2133 58.625 20.7351 58.4841 20.3085C58.3594 19.9311 58.1556 19.5847 57.8862 19.2925C57.5818 18.9621 57.1637 18.7299 56.3275 18.2653L35.6692 6.78846C34.8775 6.34861 34.4816 6.12868 34.0624 6.04246C33.6913 5.96615 33.3087 5.96615 32.9376 6.04246C32.5184 6.12868 32.1225 6.34861 31.3308 6.78846L10.6725 18.2653C9.83629 18.7299 9.4182 18.9621 9.11377 19.2925C8.84444 19.5847 8.64062 19.9311 8.51594 20.3085C8.375 20.7351 8.375 21.2133 8.375 22.1699V44.8301C8.375 45.7867 8.375 46.265 8.51594 46.6915C8.64062 47.0689 8.84444 47.4153 9.11377 47.7075C9.41821 48.0379 9.83629 48.2702 10.6725 48.7347L31.3308 60.2116C32.1225 60.6514 32.5184 60.8713 32.9376 60.9576C33.3087 61.0339 33.6913 61.0339 34.0624 60.9576C34.4816 60.8713 34.8775 60.6514 35.6692 60.2116L56.3275 48.7347C57.1637 48.2702 57.5818 48.0379 57.8862 47.7075C58.1556 47.4153 58.3594 47.0689 58.4841 46.6915C58.625 46.265 58.625 45.7867 58.625 44.8301Z" stroke="white" stroke-width="2" stroke-divnecap="round" stroke-divnejoin="round"/>
</svg>

    </div>
   
    <div className='flex justify-evenly items-center w-5/12'>
<div className='cursor-pointer '>Projects</div>
<div className='cursor-pointer'>Services</div>
</div> 

  
</div>
    </div>

<Home/>
   
    
    
 
    </>
    
  )
}

export default Navbar