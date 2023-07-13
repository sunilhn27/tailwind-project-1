import Image from 'next/image'
import React from 'react'
import Logo from '../../public/asserts/NEXT INVEST.png'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='flex justify-evenly p-5 gap-6 items-center'>
            <div>
                <Image className="" src={Logo}></Image>
            </div>
            <div className='flex space-x-3 items-center text-lg font-sans'>
                <div className='flex flex-row items-start '>
                    <Link className='flex items-center ' href={"/"}>Investment Opportunities
                        <svg className="flex ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 6L8 11L3 6" stroke="#333333" stroke-linecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className='flex flex-row items-start '>
                    <Link className='flex items-center ' href={"/"}>How it works
                        <svg className="flex ml-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 6L8 11L3 6" stroke="#333333" stroke-linecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <Link href={"/"}>About us</Link>
                <button className='py-3 px-10 bg-login-blue text-white hover:bg-white hover:text-black border-2 '>Login</button>
                <button className='text- py-3 px-10 text-register-oraange  border-2 border-register-oraange hover:text-white hover:bg-register-oraange'>Register</button>
            </div>
        </nav>
    )
}

export default Navbar