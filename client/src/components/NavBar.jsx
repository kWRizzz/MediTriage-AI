import { 
  Bell,
  User
 } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <nav
      className=' sticky top-0 z-50 bg-surface/80 backdrop-blur-glass-sm ring-1  ring-outline'
    >
      <div
        className=' flex justify-between items-center bg-surface-low px-8 py-5 max-w-[1400px] mx-auto'
      >


        {/* Left container div */}
        <div
          className=' flex items-center gap-12'
        >
          {/* logo */}
          <div
            className=' text-xl font-bold font-display tracking-tighter text-white'
          >
            MediTriage-AI
          </div>

          {/* links */}

          <div
            className=' hidden md:flex items-center gap-8 text-sm font-medium   font-body'
          >
            {/* upload */}
            <a
              className=' relative hover:text-white group transition-colors'
              href="#"
            >
              Home
              <span
                className=' absolute -bottom-1.5 left-0 w-0 h-[1px] bg-blue-900 transition-all rounded-full  duration-300  group-hover:w-full'
              >

              </span>
            </a>
            {/* history */}
            <a
              className=' relative hover:text-white group transition-colors'
              href="#"
            >
              History
              <span
                className=' absolute -bottom-1.5 left-0 w-0 h-[1px] bg-blue-900 transition-all rounded-full  duration-300  group-hover:w-full'
              >

              </span>
            </a>
            {/* upload */}
            <a
              className=' relative hover:text-white group transition-colors'
              href="#upload"
            >
              Upload
              <span
                className=' absolute -bottom-1.5 left-0 w-0 h-[1px] bg-blue-900 transition-all rounded-full  duration-300  group-hover:w-full'
              >

              </span>
            </a>
          </div>

        </div>

        {/* right container div */}
        <div
          className=' flex gap-6 items-center'
        >
          <Bell
            size={20}
            className=' transition-colors text-gray-400 hover:text-white hover:scale-110 duration-300 cursor-pointer'
          />
          <div
            className=' h-9 w-9 rounded-full bg-surface-high flex justify-center items-center cursor-pointer transition-colors hover:bg-surface-highest'
          >
            <User
              size={18}
              className='text-white'
            />
          </div>

          {/* get Started */}
          
          <button
            className=' bg-primary-glow text-surface shadow-button-glow rounded-xl px-6 py-2.5 font-medium hover:brightness-110 transition-all text-sm font-body '
          >
            Get-Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar