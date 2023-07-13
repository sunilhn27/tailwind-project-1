import React from 'react'
import chart from '@/asserts/Chart.png'
import Image from 'next/image'
import Vector from '@/asserts/Vector.png'
import Group from '@/asserts/Group.png'

function Chart() {
    return (
        <div className='mt-16 bg-[#ECF4FD] bg-scale-x-100 bg-my_bg_vector bg-no-repeat bg-left-bottom relative'>
            <Image className='absolute bottom-1' src={Vector} height={270} width={631}></Image>
            <div className='flex items-center justify-evenly  w-[100%]   h-[696px]   bg-left-bottom  font-sans '>

                <div className=' flex flex-col w-[50%]'>
                    <div>
                        <h1 className='relative text-5xl font-bold mb-8 w-[50%]'>
                            $7M+ paid out to investors
                        </h1>
                    </div>
                    <div className='text-start text-3xl text-gray-400'>

                        <p className='relative'>
                            Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debt financing investments.
                        </p>
                    </div>
                </div>
                <div className=' '>
                    <Image src={chart} height={272} width={631}></Image>
                </div>


            </div>

        </div>
    )
}

export default Chart