import React from 'react'
import EyedatyLogo from './eyedatylogo'
import BurgerMenuIcon from '../icons/burgermenuicon'


export default function Navbar() {
  return (

<header className="  text-gray-600 body-font">
  <div className="hidden container mx-auto lg:flex flex-wrap p-6 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <EyedatyLogo/>
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-siteblue">Accueli</a>
      <a className="mr-5 hover:text-siteblue">A propos de nous</a>
      <a className="mr-5 hover:text-siteblue">Contactez-nous</a>

    </nav>
    <div className=' w-1/2 flex flex-row justify-around'>
        <div className='hidden lg:block w-2/5'>
            <input className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </div>
        <div className='hidden lg:blockflex  w-2/4 justify-evenly'>
            <button className="inline-flex items-center   border-2 border-siteblue  px-7 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">Button

            </button>
            <button className="inline-flex items-center  bg-siteblue text-white   px-7 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">Button

            </button>

        </div>

    </div>
  </div>

      {/* phonenav */}
  <div className="w-full px-8 py-2 flex justify-between lg:hidden">
    <div className=' w-1/2 py-3 '>
        <BurgerMenuIcon/>

    </div>
    <a className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
      <EyedatyLogo/>
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>

  </div>
</header>

  )
}


