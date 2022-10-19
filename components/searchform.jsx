import React from 'react'
import SearchChips from './searchchips'

export default function SearchForm() {
  return (
    <div className=' flex justify-center p-2'>
        {/* max-w-md */}
        <div className="bg-white p-6 rounded-[20px] shadow-lg w-3/4  mt-[-10%]">
            <form>
                <div className="grid grid-cols-4 gap-4">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-[#A7ADBA]
                        bg-fieldwhite bg-clip-padding
                        border border-solid border-gray-300
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                        aria-describedby="emailHelp123" placeholder="Specialite"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-[#A7ADBA]
                        bg-fieldwhite bg-clip-padding
                        border border-solid border-gray-300
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                        aria-describedby="emailHelp124" placeholder="Wilaya"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-[#A7ADBA]
                        bg-fieldwhite bg-clip-padding
                        border border-solid border-gray-300
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                        aria-describedby="emailHelp124" placeholder="Commune"/>
                    </div>
                    <div className="form-group mb-6">
                        <button className="block
                        px-8
                        py-1.5
                        text-base
                        font-normal
                        text-white
                        bg-siteblue bg-clip-padding
                        border border-solid border-gray-300
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            Chercher
                        </button>
                    </div>
                </div>
                <div className="form-group mb-6 ">
                    <a href="components/searchform#" className='text-siteblue font-bold flex'> Recherche Avancee <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.436 1C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436ZM16.436 2.5H7.064C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5ZM11.75 7.3273C12.164 7.3273 12.5 7.6633 12.5 8.0773V10.99L15.4165 10.9902C15.8305 10.9902 16.1665 11.3262 16.1665 11.7402C16.1665 12.1542 15.8305 12.4902 15.4165 12.4902L12.5 12.49V15.4043C12.5 15.8183 12.164 16.1543 11.75 16.1543C11.336 16.1543 11 15.8183 11 15.4043V12.49L8.0835 12.4902C7.6685 12.4902 7.3335 12.1542 7.3335 11.7402C7.3335 11.3262 7.6685 10.9902 8.0835 10.9902L11 10.99V8.0773C11 7.6633 11.336 7.3273 11.75 7.3273Z" fill="#0094DA"/>
                        </svg>
                        </span>
                     </a>

                </div>

                <div className='font-bold my-4'>
                    <p>
                    Historique des recherces
                        </p>
                </div>
                <div className="flex flex-wrap justify-start space-x-3 space-y-3  ">

                    <SearchChips chiptitle="Generaliste Oran"/>
                    <SearchChips chiptitle="Cardiologie Medea"/>
                    <SearchChips chiptitle="Medicine Interne Alger"/>
                    <SearchChips chiptitle="Pediatre Alger Borj Elkifane"/>
                    <SearchChips chiptitle="Urologie Alger"/>

                </div>
            </form>
        </div>
    </div>
  )
}
