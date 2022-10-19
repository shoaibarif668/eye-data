import React from 'react'
import Image from 'next/image'

export default function CategoryCard(props) {
  return (
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" border-gray-200 bg-fieldwhite  px-2 py-6 rounded-lg">
            <Image  src={props.imagevar} alt="Image of doctor" width={50} height={50}/>
            {/* <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
            <p class="leading-relaxed">{props.cattitle}</p>
        </div>
    </div>
  )
}
