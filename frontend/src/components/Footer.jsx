import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-[#1b0521] px-10 lg:px-[160px] py-5 lg:py-8 flex flex-col gap-6 justify-center'>
        <div className='text-white text-center text-4xl font-semibold '> 
            Pranay
        </div>
        
        <div className=' items-center text-gray-400' >
            <ul className='flex flex-row justify-center gap-5 lg:gap-8'> 
                <li>
                    <a href='#Home' className=' text-xl lg:text-xl transition-all   duration-200 ease-in-out hover:text-white'> Home</a>
                </li>
                
                <li>
                    <a href='#Projects' className=' text-xl lg:text-xl transition-all   duration-200 ease-in-out hover:text-white'>Projects</a>
                </li>
                
                <li>
                    <a href='#aboutme' className=' text-xl lg:text-xl transition-all   duration-200 ease-in-out hover:text-white'>About </a>
                </li>
                
                <li>
                    <a href='#Contact' className=' text-xl lg:text-xl transition-all    duration-200 ease-in-out hover:text-white'>Contact</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex flex-row justify-center gap-5 lg:gap-6'>
            <li><a href="https://www.linkedin.com/in/pranay-shelar-381070284" target="_blank" className="  text-3xl text-gray-400  transition-all duration-300 ease-in-out  hover:text-white fab fa-linkedin"></a></li>
                  <li><a href="https://github.com/PranayShelar26" target="_blank" className="  text-gray-400 text-3xl transition-all duration-300 ease-in-out  hover:text-white fab fa-github" ></a></li>
                  <li><a href="" target="_blank" className="  text-gray-400 text-3xl transition-all duration-300 ease-in-out h hover:text-white fab fa-instagram"></a></li>

            </ul>
        </div>
        <div className='text-gray-500 text-l text-center pt-1'>
            <i className="fa fa-copyright"></i> 2024. Created by <span className='text-gray-200 '>Pranay Shelar</span>
        </div>
        
            
    
      </div>
    </>
  )
}

export default Footer
