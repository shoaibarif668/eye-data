import React from 'react'
import Image from 'next/image'
import apphand from '/assets/doctor.png'

export default function Doctor() {
    return (
        <div className=" bg-gray-700 w-full">

        <div className="flex flex-row justify-between  mt-12 px-10  mb-12 bg-center bg-[url('../assets/Lines.png')] bg-opacity-5 bg-cover bg-no-repeat">

            <div className='flex flex-col justify-center pl-40 pr-10  space-y-5 w-3/5'>

                <h1 className="text-5xl font-bold text-gray-900 dark:text-white pr-32">
                    Se sentir
                    mieux pour trouver
                    des soins de santé
                </h1>
                <h3 className="text-1xl font-thin text-gray-900 dark:text-white w-[60%]">
                    Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.
                </h3>

                <div className='space-x-3'>
                    <button className="bg-transparent border-white border-2 rounded w-[250px] h-[50px] text-white">
                        Trouver un docteur
                    </button>

                </div>
            </div>

            <div className= 'w-2/5 flex items-center'>
                <Image src={apphand} alt="Appholding hand" className="object-contain" height={400} width={400}/>
            </div>

        </div>
        </div>

    )

}
