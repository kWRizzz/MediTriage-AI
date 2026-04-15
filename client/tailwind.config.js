/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0f131c',    // Base canvas
          lowest: '#0a0e17',     // Recessed wells / Chest X-ray viewer canvas
          low: '#181b25',        // Structural areas / Diagnostic sidebar
          high: '#262a34',       // Cards / Active panels
          highest: '#31353f',    // Tooltips / Menus
        },
        primary: {
          DEFAULT: '#a4e6ff',    // Base primary
          container: '#00d1ff',  // For gradient transitions
        },
        secondary: {
          DEFAULT: '#d0bcff',    // Used for violet ambient glows
          brand: '#8b5cf6',      // Alternate secondary from design tokens
        },
        error: {
          DEFAULT: '#ffb4ab',    // Calm error state
        },
        // Ghost border fallback for accessibility
        outline: {
          variant: 'rgba(255, 255, 255, 0.15)', 
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'], // Headlines & Display
        body: ['Inter', 'sans-serif'],                  // Workhorse for data
      },
      letterSpacing: {
        tightest: '-0.02em', // For editorial headlines
        widest: '0.05em',    // For technical metadata/timestamps
      },
      backgroundImage: {
        'primary-glow': 'linear-gradient(135deg, #a4e6ff 0%, #00d1ff 100%)',
      },
      boxShadow: {
        // Ambient glows for floating elements and AI alerts
        'ambient': '0 0 40px rgba(208, 188, 255, 0.15)', 
        'ambient-lg': '0 0 60px rgba(208, 188, 255, 0.20)',
        // Luminescent button shadow
        'button-glow': '0 4px 8px rgba(164, 230, 255, 0.30)',
      },
      backdropBlur: {
        'glass-sm': '12px',    // Overlays / Glassmorphic islands
        'glass-md': '20px',    // Floating overlays
        'glass-lg': '40px',    // Heavy floating overlays
      }
    },
  },
  plugins: [],
}