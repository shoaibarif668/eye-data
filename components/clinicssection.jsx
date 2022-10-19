import React from 'react'
import Image from 'next/image'

import ClinicCard from './cliniccard'
import clinicimage from '/assets/clinicimage.png'
import clinicimage1 from '/assets/clinicimage1.png'
import clinicimage2 from '/assets/clinicimage2.png'
import clinicimage3 from '/assets/clinicimage3.png'
import LeftIcon from '../icons/lefticon'
import RightIcon from '../icons/righticon'

export default function ClinicsSection() {
  return (
    <div>
      <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap justify-between px-12 w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <p className='text-sitegreen font-medium'>Explorez tous les</p>
          <h1 className="sm:text-3xl text-2xl lg:text-6xl lg:font-extrabold font-medium title-font mb-2 text-gray-900">Cliniques</h1>
        </div>
        <div className='flex flex-row justify-center space-x-2   '>
          <button>
            <div> <LeftIcon/> </div>

          </button>
          <button>
            <div> <RightIcon/> </div>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <ClinicCard ClinicCardimg={clinicimage}/>
        <ClinicCard ClinicCardimg={clinicimage1}/>
        <ClinicCard ClinicCardimg={clinicimage2}/>
        <ClinicCard ClinicCardimg={clinicimage3}/>
      </div>

    </div>
    <div className='w-full flex justify-center'>
                <div className="flex w-full md:justify-center justify-center items-end ">

                    <button className="inline-flex text-white text-left bg-siteblue border-0 py-2 px-16 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir tous les cliniques {'>'}  </button>
                </div>
            </div>
    </section>
    </div>
  )
}
