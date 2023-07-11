import React from 'react'
import chart from '@/asserts/Chart.png'
import Image from 'next/image'
import Vector from '@/asserts/Vector.png'
import Group from '@/asserts/Group.png'

function Chart() {
    return (
        <div className='my-16 bg-slate-200 '>

            <div className=' flex flex-row w-fit mx-32 h-[696px] justify-center items-center font-sans '>
        
                <div className='flex-1 flex-col border-2 border-red-400'>
                    <h1 className='text-7xl font-bold mb-8'>
                        $7M+ paid out to investors
                    </h1>
                    <p className='absolute text-start text-3xl text-gray-400 w-[570px]'>
                        Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debt financing investments.
                    </p>
                </div>
                <div className='flex-1 border-2 border-red-400'>
                    <Image src={chart}></Image>
                </div>

            </div>

        </div>
    )
}

export default Chart