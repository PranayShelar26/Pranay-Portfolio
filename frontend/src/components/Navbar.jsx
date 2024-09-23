import React, { useState } from 'react';
const Navbar=()=>{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar=()=>{
        setSidebarOpen(false)
    }
    return(
        <>
        <div className=" md:flex md:justify-center md:items-center  align-middle">
        <div className="bg-black w-screen bg-opacity-90 backdrop-blur-sm  navbar-gradient-shadow shadow-lg shadow-red-700  py-1 md:top-0  px-5 flex flex-row md:justify-between items-center md:px-[40px] md:w-full md:mx-auto fixed z-20">
        <button onClick={toggleSidebar} className='md:hidden mr-4 text-white hover:text-gray-300'>
                    <span className="material-symbols-outlined text-[40px]">
                    menu
                    </span> 
                    </button>
            <div className="logo md:py-1 md:pl-[35px]  "><a href='#Home' className="text-[22px] md:text-xl tracking-wide hover:text-violet-500 uppercase transition-all ease-in-out duration-200 font-NotoSans font-semibold  text-white">Pranay</a>  </div>

            <div  className="text-md md:text-[18px] uppercase tracking-wide ">
                <ul className="md:flex flex-col hidden md:visible md:flex-row md:py-4 font-medium font-NotoSans text-white" >
                    <li className="md:px-6" ><a href="#Home" className="group text-gray-400 hover:text-white transition duration-300">
                                            Home<span className="block max-w-0 group-hover:max-w-full mt-[2px] transition-all duration-500 h-[0.200rem] bg-gradient-to-r from-violet-700 to-violet-500"></span></a></li>
                    <li className="md:px-6"><a href="#Projects" className="group text-gray-400 hover:text-white transition duration-300">
                                            Project<span className="block max-w-0 group-hover:max-w-full mt-[2px] transition-all duration-500 h-[0.200rem] bg-gradient-to-r from-violet-700 to-violet-500"></span></a></li>
                    <li className="md:px-6"><a href="#aboutme" className="group text-gray-400 hover:text-white transition duration-300">
                                            About Me<span className="block max-w-0 group-hover:max-w-full mt-[2px] transition-all duration-500 h-[0.200rem] bg-gradient-to-r from-violet-700 to-violet-500"></span></a></li>
                    <li className="md:px-6"><a href="#Contact" className="group  text-gray-400 hover:text-white transition duration-300">
                                            Contact Me<span className="block max-w-0 group-hover:max-w-full mt-[2px] transition-all duration-500 h-[0.200rem] bg-gradient-to-r from-violet-700 to-violet-500"></span></a></li>
                </ul>
            </div>

            {/* <div className="text-md md:text-lg">
                <ul className="flex py-2 flex-row md:py-4 text-white">
                    <li className="px-2 md:px-4 hover:text-gray-600"><Link to="/signup">Sign Up</Link></li>
                    <li className="px-2 md:px-4 hover:text-gray-600"><Link to="/login">Log In</Link></li>
                    
                </ul>
            </div> */}
            
            <div className={`md:hidden fixed top-0 left-0 h-screen transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} `}>
        <div className="bg-black h-screen w-40 ">
        <button onClick={toggleSidebar} className='text-white pt-5 p-4'><span className="text-[40px] material-symbols-outlined">
            cancel
            </span></button>
        <ul className='pt-5 bg-black text-[20px] text-white '>
          <li><a href='#Home' onClick={closeSidebar} className='block px-5 py-4   transition duration-300 ease-in-out hover:bg-gradient-to-r from-purple-700 to-violet-500 hover:text-black'>Home</a></li>
          <li><a href='#aboutme' onClick={closeSidebar} className='block px-5 py-4   transition duration-300 ease-in-out hover:bg-gradient-to-r from-purple-700 to-violet-500 hover:text-black'>About</a></li>
          <li><a href='#Projects' onClick={closeSidebar} className='block px-5 py-4  transition duration-300 ease-in-out hover:bg-gradient-to-r from-purple-700 to-violet-500 hover:text-black'>Projects</a></li>
          <li><a href='#Contact' onClick={closeSidebar}  className='block px-5 py-4  transition duration-300 ease-in-out hover:bg-gradient-to-r from-purple-700 to-violet-500 hover:text-black'>Contact</a></li>
        </ul>
        </div>
      </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;
