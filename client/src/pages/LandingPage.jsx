import React from 'react'
import { 
  Bell, 
  User, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Network, 
  ArrowRight, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import NavBar from '../components/NavBar';


const LandingPage = () => {
  return (
    <div
        className=' min-h-screen bg-surface font-body text-gray-400 selection:bg-primary/60'
    >

      {/* navigation */}
      <NavBar/>

      {/* <------------Main-Hero-----------> */}
      <main
        className=' max-w-[1400px]  mx-auto px-8 pt-16 pb-24 '
      >
        <div
          className=' grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
        >
          
        </div>
      </main>
    </div>
  )
}

export default LandingPage