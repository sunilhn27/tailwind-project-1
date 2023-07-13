import React from 'react'
import BackToUp from '@/asserts/Back_to_top.png'
import Image from 'next/image'
import SocialIcons from '@/asserts/SocialIcons.png'


function Footer() {
    return (
        <div className='bg-gray-300 h-[484px] w-full font-sans flex flex-col' >

            <div className='flex justify-center gap-44 py-16'>

                <div className='space-y-2'>
                    <h1 className='font-bold  text-2xl '>NEXT INVEST</h1>
                    <h3>Copyright © 2020. LogoIpsum. All rights reserved.</h3>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl  '>Services</h1>
                    <h3>Email Marketing</h3>
                    <h3>Campaigns</h3>
                    <h3>Branding</h3>
                    <h3>Offline</h3>
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl '>About</h1>
                    <h3>Our Story</h3>
                    <h3>Benefits</h3>
                    <h3>Team</h3>
                    <h3>Careers</h3>
                </div>
                <div>
                    <Image src={BackToUp}></Image>
                </div>
            </div>

            <div className='flex justify-around  items-center h-[250px]'>

                <div className='space-y-3'>
                    <h1 className='text-2xl'>
                        Subscribe to our newsletter
                    </h1>
                    <div className='flex '>
                        <input className='bg-[#ECECEC] h-[51px] w-[370px] px-2' placeholder='Email address '></input>
                        <div className='text-2xl text-white bg-[#F56B8D] rounded-t-lg w-12 px-2 text-center py-2'>&#62;</div>
                    </div>
                </div>

                <div>
                    <Image className='
                    hover:cursor-pointer' src={SocialIcons}></Image>

                </div>
            </div>


        </div>
    )
}

export default Footer