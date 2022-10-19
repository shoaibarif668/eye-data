import React from 'react'
import Image from 'next/image'
import heroimg from '/assets/himg.png'

export default function HeroPage() {
  return (
    <div >
        {/*bg-[url('../assets/himg.png')]*/}
        <section className={`text-gray-600 body-font py-10 bg-fieldwhite `}>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="  p-3 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className=" sm:text-4xl lg:text-6xl text-4xl mb-4 font-extrabold text-gray-900">Retrouver la belle vie par une bonne santé.
                    {/* <br className="hidden lg:inline-block">readymade gluten */}
                </h1>
                <p className="mb-8 leading-relaxed">Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.</p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                            src={heroimg}
                            alt="Image of doctor"
                            width={448}
                            height={428.03}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                </div>
            </div>
        </section>
    </div>
    )
}
