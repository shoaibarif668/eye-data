import React from 'react'
import EyedatyLogo from './eyedatylogo'
import france from "/assets/france.png"
import Image from "next/image";

export default function TopNavbar() {
  return (

<header className="text-gray-600 py-4 px-5 lg:px-20 bg-sitegreen body-font">
  <div className="container mx-auto flex justify-between flex-col  md:flex-row lg:items-center">
    <div>
      <a className="flex justify-start title-font font-medium lg:items-center text-white mb-4 md:mb-0">
        Rozalis
        {/* <span className="ml-3 text-xl">Tailblocks</span> */}
      </a>

    </div>

    <div className=' lg:w-1/4 w-full flex justify-between '>
      <div className='bg-white rounded-md p-2 flex items-center justify-center'>
        <p className={"text-sm text-dark__color"}>
          Compte Professiional?
        </p>
      </div>
      <div className=' text-white p-2'>
          Blog
      </div>

      <div className='rounded-[32px] border border-white p-2 flex items-center gap-2'>
        <Image className={"object-contain cursor-pointer"} src={france} alt={"France"}/>
        <span className={"text-sm text-white"}>Fr</span>
      </div>

    </div>
  </div>
</header>

  )
}


