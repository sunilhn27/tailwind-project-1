import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <>

            <div className="relative h-screen w-full bg-my_bg_image bg-no-repeat  bg-cover">
                <div className='absolute bg-my_bg_shape bg-no-repeat bg-right-bottom top-0 bottom-0 right-0 left-0'></div>
                <div className=' text-white flex flex-col justify-center items-start w-[50%] ml-[10%] xl:ml-[15%] space-y-5'>
                    <h1 className=' font-sans text-5xl text-start mt-[30%]'>Meaningful investments in Main Street businesses</h1>
                    <p className='flex-wrap'>Browse vetted investment offerings in communities all over the US.</p>
                    <button className='bg-login-blue py-6 px-10'>Get Started</button>
                </div>
            </div>




        </>
    )
}

export default Hero