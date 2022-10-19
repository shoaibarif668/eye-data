import React, {Fragment} from 'react'
import Image from 'next/image'
import Logo from "/assets/logo.png"
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs"

export default function Subscribe() {
    return (

        <div>
            <section className="text-gray-600 body-font bg-[url('../assets/subscribe-bg.png')] bg-no-repeat bg-cover min-h-[600px] h-full w-full">
                <div className="container mx-auto py-16">
                    <div className={"w-[50%]"}>
                        <Image src={Logo} alt={"Logo"}/>
                        <h1 className={"text-5xl text-dark__color py-8"}>Abonnez-vous pour
                            toute mise à jour</h1>
                        <div className={"flex gap-1 justify-between py-2 px-6 bg-white border border-[#C0C5CE] rounded-[16px] max-w-[450px] w-full"}>
                            <input type={"email"} placeholder={"Email"} className={"text-sm focus:outline-0 text-dark__color w-full"}/>
                            <button type={"button"} className={"focus:outline-0 w-[120px] bg-[#0094DA] text-white rounded-[12px] p-3"}>Abonnez</button>
                        </div>
                        <div className={'flex items-center mt-10 gap-4'}>
                            <p className={"text-gray__color text-sm font-semibold"}>Suivez-nous sur</p>
                            {[BsFacebook,BsTwitter,BsInstagram,BsLinkedin].map((Icon,index)=>{
                                return(
                                    <Fragment key={index}>
                                        <button className={"hover:opacity-90 bg-[#0094DA] w-[40px] h-[40px] rounded-full flex items-center justify-center"} type={"button"}>
                                            <span className={"text-lg text-white"}>
                                                <Icon/>
                                            </span>
                                        </button>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
