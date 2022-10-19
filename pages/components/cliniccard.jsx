import React from 'react'
import Image from 'next/image'
import ViewIcon from '../icons/viewicon'
import StarIcon from '../icons/staricon'
import LocationIcon from '../icons/locationicon'
import HeartIcon from '../icons/hearticon'
import checkmark from '../../public/checkmark.png'

export default function ClinicCard(props) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a className='flex justify-center ' href="#!">
                <Image src={props.ClinicCardimg} alt="clinic image" />

                {/* <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/> */}
              </a>
              <div className="p-6">
                <div className='flex flex-row space-x-2'>
                    <div>
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Dr.Mechri Nasser</h5>
                    </div>
                    <div className='py-1'>
                    <Image src={checkmark} alt="checkmark"/>
                    </div>
                </div>
                <p className="text-gray-700 text-base mb-4">
                  Opthalmologie
                </p>
                <div className='flex flex-row '>
                    <div className=' py-3 px-2'>
                        <LocationIcon/>
                    </div>
                    <div className=' p-2'>
                        <p className="text-gray-700 text-base mb-4">
                            Quartier des 400 logements, à côté du marché couvert Beni Slimane, Médea
                        </p>
                    </div>

                </div>
                <div className='flex flex-row  p-4 justify-start space-x-3'>
                    <div className='flex flex-row space-x-1 '>
                        <div className='  py-1'>
                            <ViewIcon/>
                        </div>
                        <div>55k</div>

                    </div>
                    <div className='flex flex-row space-x-1'>
                        <div className='  py-1'>
                        <HeartIcon/>
                        </div>
                        <div>240</div>

                    </div>
                    <div className='flex flex-row space-x-1'>
                        <div className='  py-1'>
                            <StarIcon/>
                        </div>
                        <div>4.8</div>

                    </div>

                </div>



                <div className='flex justify-center'>
                    <button type="button" className=" inline-block px-16 py-4 bg-white border-2 border-siteblue  text-siteblue font-medium text-sm leading-tight uppercase rounded-xl shadow-md hover:bg-siteblue hover:text-white hover:shadow-lg focus:bg-siteblue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-siteblue active:shadow-lg transition duration-150 ease-in-out">Voir Plus{'>'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
