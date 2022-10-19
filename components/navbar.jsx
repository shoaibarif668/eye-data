import React from 'react'
import EyedatyLogo from './eyedatylogo'
import BurgerMenuIcon from '../icons/burgermenuicon'


export default function Navbar() {
  return (

<header className="text-gray-600 body-font">
  <div className="hidden container mx-auto lg:flex flex-wrap py-6 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <EyedatyLogo/>
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-siteblue">Accueli</a>
      <a className="mr-5 hover:text-siteblue">A propos de nous</a>
      <a className="mr-5 hover:text-siteblue">Contactez-nous</a>

    </nav>
    <div className='w-1/2 flex flex-row gap-20 justify-end'>
        <div className='lg:block w-2/5'>
            <input className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[12px] bg-[#F5F8FB] p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </div>
        <div className='flex items-center gap-2'>
            <button className="focus:outline-0 min-w-[100px] w-full border bg-transparent border-[#0094DA] text-[#0094DA] rounded-[12px] p-2">
                S`inscrire
            </button>
            <button className="focus:outline-0 min-w-[100px] w-full bg-[#0094DA] text-white rounded-[12px] p-2">
                Connexion
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


