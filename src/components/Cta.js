import Image from 'next/image'
import React from 'react'
import Cuate from '@/asserts/cuate.png'

function Cta() {
    return (
        <div className='bg-gray-50 h-[750px] w-full font-sans flex items-center justify-center'>

            <div className='flex  justify-center'>

                <div className='fle x flex-col   w-[40%]'>
                    <div className='space-y-5 mt-9'>
                        <h1 className='text-6xl font-bold '>
                            Looking to raise capital
                            for your growing business?
                        </h1>
                        <p className='text-gray-500 text-2xl'>
                            Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.
                        </p>
                        <button className='bg-[#128C76] text-white w-[270px] py-4'>
                            APPLY ONLINE
                        </button>
                    </div>
                </div>

                <div className=' '>
                    <Image src={Cuate} />
                </div>



            </div>


        </div>
    )
}

export default Cta