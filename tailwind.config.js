tailwind.config = {
  export: {
    theme: {
      fontFamily: {
       Outfit: ["Outfit", "sans-serif"],
       Ovo: ['Ovo', 'serif']
      },
      colors:{
        lighHover:'#0F1035',
        darkHover:'#1A1A1A',
        darkTheme:'#11001F'
      },
      animation: {
        spin_slow: 'spin 5s linear infinite', 
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      }
    }
  },
  darkMode:'selector'
  }