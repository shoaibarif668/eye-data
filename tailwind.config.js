/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      screens: {
        'sm__custom': {'min':'640px','max':'767px'},
        // => @media (min-width: 640px) { ... }

        'md__custom':  {'min':'768','max':'1024px'},
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
      colors: {
        'siteblue': '#0094DA',
        'sitegreen': '#93C01F',
        'fieldwhite' : '#F5F8FB',

        'dark__color':'#1C2126',
        'gray__color':'#333B42',
        'light__gray__color':'#A7ADBA',
      },
      gridTemplateColumns:{
        //For Cards
        card__columns:"repeat(auto-fit,minmax(350,1fr))",
        //For Footer
        footer__columns:"2fr 1fr 1fr 2fr 2fr",
        //For Footer LG
        footer__columns__lg:"2fr 1fr 1fr 2fr",
        //For Footer SM
        footer__columns__sm:"1fr",
      },
    },
  },
  plugins: [],
}
