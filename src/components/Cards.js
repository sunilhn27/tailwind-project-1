import Image from 'next/image'
import React from 'react'
import Img from '@/asserts/Img.png'
import Img_1 from '@/asserts/Img_1.png'
import Img_2 from '@/asserts/Img_2.png'
import Img_3 from '@/asserts/Shapeshape_1.png'


function Cards() {


    const Cards = ({ image, title, subTitle, para }) => {
        return <div className='shadow-2xl w-[370px] h-[480px] font-sans'>
            <Image src={image}></Image>
            <div className='flex flex-col p-[24px]'>
                <h className="text-3xl">{title}</h>
                <h2 className='text-gray-400'>{subTitle}</h2>
                <p className='py-[24px]'>{para}</p>
            </div>
        </div>
    }


    return (
        <>
            <div className="flex justify-center mb-16">
                <div className='grid grid-cols-3 gap-4'>
                    <Cards image={Img}
                        title={"Oxalis"}
                        subTitle={"Brooklyn, NY"}
                        para={"A recognized leader in language immersion & early education, opening second school."}
                    />

                    <Cards image={Img_1}
                        title={"Oxalis"}
                        subTitle={"Brooklyn, NY"}
                        para={"A recognized leader in language immersion & early education, opening second school."}
                    />
                    <Cards image={Img_2}
                        title={"Oxalis"}
                        subTitle={"Brooklyn, NY"}
                        para={"A recognized leader in language immersion & early education, opening second school."}
                    />



                    <Cards image={Img_2}
                        title={"Oxalis"}
                        subTitle={"Brooklyn, NY"}
                        para={"A recognized leader in language immersion & early education, opening second school."}
                    />

                    <Cards image={Img_2}
                        title={"Oxalis"}
                        subTitle={"Brooklyn, NY"}
                        para={"A recognized leader in language immersion & early education, opening second school."}
                    />

                    <Cards image={Img_2}
                        title={"Oxalis"}
                        subTitle={"Brooklyn, NY"}
                        para={"A recognized leader in language immersion & early education, opening second school."}
                    />
                </div>
            </div>
            <button className='flex justify-center items-center w-[270px] p-6 py-3 mb-3 mx-auto border-dotted border-2 text-red-500 border-red-600' >View All Projects</button>
        </>
    )
}

export default Cards