import React from 'react'

const NavBar = () => {
  return (
    <nav
      className=' sticky top-0 z-50 bg-surface/80 backdrop-blur-glass-sm ring-1  ring-outline'
    >
        <div
          className=' flex justify-center items-center bg-surface-low px-8 py-5 max-w-[1400px] mx-auto'
        >


          {/* container div */}
          <div
            className=' flex items-center gap-5'
          >
            {/* logo */}
            <div
              className=' text-xl font-bold font-display tracking-tighter text-white'
            >
              MediTriage-AI
            </div>

            {/* links */}

            <div
              className=' hidden md:flex items-center gap-8 text-sm font-body  font-medium'
            >
              
              <a 
                className=' relative hover:text-white group transition-colors'
              href="#"
              >
                Upload
                <span
                  className=' absolute -bottom-1.5 left-0 w-0 h-[1px] bg-blue-900 transition-all rounded-full  duration-300  group-hover:w-full'
                >

                </span>
              </a>
            </div>

          </div>


        </div>
    </nav>
  )
}

export default NavBar