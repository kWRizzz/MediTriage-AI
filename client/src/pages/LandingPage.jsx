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
    </div>
  )
}

export default LandingPage