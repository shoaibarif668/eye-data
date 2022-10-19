import React, {Fragment} from 'react'
import Image from 'next/image'

import ClinicCard from './labcards'
import labimage1 from '/assets/labimg1.png'
import labimage2 from '/assets/labimg2.png'
import labimage3 from '/assets/labimg3.png'
import labimage4 from '/assets/labimg4.png'
import LeftIcon from '../icons/lefticon'
import RightIcon from '../icons/righticon'
import LabCard from './labcards'
import Avatar from "/assets/Avatar.png"
import {AiOutlineCalendar} from "react-icons/ai";
export default function BlogList() {
    return (

        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-between  w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <p className='text-sitegreen font-medium'>Notre blog</p>
                            <h1 className="sm:text-3xl text-2xl lg:text-6xl lg:font-extrabold font-medium title-font mb-2 text-gray-900">Voir notre dernier blog</h1>
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
                    <div className={"flex justify-between flex-wrap gap-0.5"}>
                        {[1,2,3].map((_,index)=>{
                            return(
                                <Fragment key={index}>
                                    <div className="bg-no-repeat h-[480px] bg-[url('../assets/patient.png')] backdrop-opacity-25">
                                        <div className={'w-[362px] h-[480px] px-4 py-5'} style={{background:'rgba(0, 0, 0, 0.5)',borderRadius:'16px'}}>
                                            <div className="flex flex-col justify-between h-full">
                                                <div className={"bg-white text-dark__color text-sm  w-fit px-5 h-[30px] rounded-[8px] flex items-center"}>
                                                    Chirurgie Dentaire
                                                </div>
                                                <div className={""}>
                                                    <p className={"text-sm text-white flex items-center gap-1 pb-2"}>
                                                        <span><AiOutlineCalendar/></span>
                                                        24/05/2022
                                                    </p>
                                                    <h5 className={"text-3xl text-white font-bond pb-4"}>Une hernie discale lombaire ventrale..</h5>
                                                    <div className={'flex items-center gap-2'}>
                                                        <Image className={"object-contain max-w-[24px] max-h-[24px] w-full h-full"} src={Avatar}/>
                                                        <span className={"text-white text-sm"}>Selma Achref</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className='w-full flex justify-center mt-10'>
                        <div className="flex w-full md:justify-center justify-center items-end ">

                            <button className="inline-flex text-white text-left bg-siteblue border-0 py-2 px-16 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir tous les cliniques {'>'}  </button>
                        </div>
                    </div>
                </div>





            </section>
        </div>
    )
}
