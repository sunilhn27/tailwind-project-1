import Image from 'next/image'
import React from 'react'
import Img from '@/asserts/Img.png'

function Cards() {


    const Cards = {

    }


    return (
        <div className='grid grid-cols-3 '>


            <div className='mx-auto mb-16 w-[370px] h-[480px] shadow-2xl'>
                <Image src={Img}></Image>
                <div className='flex flex-col mt-3 px-2' >
                    <h1 className='text-2xl' >
                        Oxalis
                    </h1>
                    <h4 className='font-sans mb-3 text-gray-400'>
                        Brooklyn, NY
                    </h4>
                    <p className='font-sans text-lg'>
                        A recognized leader in language immersion & early education, opening second school.
                    </p>
                </div>
            </div>


            <div className='mx-auto mb-16 w-[370px] h-[480px] shadow-2xl'>

                <Image src={Img}></Image>
                <div className='flex flex-col mt-3 px-2' >
                    <h1 className='text-2xl' >
                        Oxalis
                    </h1>
                    <h4 className='font-sans mb-3 text-gray-400'>
                        Brooklyn, NY
                    </h4>
                    <p className='font-sans text-lg'>
                        A recognized leader in language immersion & early education, opening second school.
                    </p>
                </div>
            </div>


            <div className='mx-auto mb-16 w-[370px] h-[480px] shadow-2xl'>

                <Image src={Img}></Image>
                <div className='flex flex-col mt-3 px-2' >
                    <h1 className='text-2xl' >
                        Oxalis
                    </h1>
                    <h4 className='font-sans mb-3 text-gray-400'>
                        Brooklyn, NY
                    </h4>
                    <p className='font-sans text-lg'>
                        A recognized leader in language immersion & early education, opening second school.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Cards