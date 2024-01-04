import Image from 'next/image'
import React from 'react'
import homepage_image from '../../../public/images/photo_2023-09-18_09-11-08.jpg'
import Link from 'next/link'
export default function About() {
    return (
        <div className="min-h-screen lg:flex md:flex py-36 px-[10%] justify-around flex-row-reverse items-center">
            <div className='lg:w-1/2 md:w-1/2' data-aos="fade-right">
                <p className='text-white text-[64px] capitalize font-bold'>About <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold'>me</span></p>
                <p className='text-white text-[20px] capitalize font-bold'>Web developer</p>
                <p className='text-gray-300 text-xl mt-14'>I am <span className='capitalize font-semibold text-xl'>Sin Meanborey</span>, and Welcome to my portfolio, where I embark on a thrilling journey into the world of full stack web development. With a solid foundation in both front-end and back-end technologies, I've honed my skills over the past two months to create dynamic and immersive digital experiences.</p>
                <div className='mt-10'>
                    <Link href='/service/frontend' className='bg-gradient-to-r hover:bg-gradient-to-l transition-all from-blue-400 to-blue-600 text-white text-lg px-5 py-2 font-medium rounded-lg flex gap-3 hover:gap-5 w-fit'>More
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3501 4.1001L12.4341 3.01611C12.8931 2.55713 13.6353 2.55713 14.0894 3.01611L23.5815 12.5034C24.0405 12.9624 24.0405 13.7046 23.5815 14.1587L14.0894 23.6509C13.6304 24.1099 12.8882 24.1099 12.4341 23.6509L11.3501 22.5669C10.8862 22.103 10.896 21.3462 11.3696 20.8921L17.2534 15.2866H3.22021C2.5708 15.2866 2.04834 14.7642 2.04834 14.1147V12.5522C2.04834 11.9028 2.5708 11.3804 3.22021 11.3804H17.2534L11.3696 5.7749C10.8911 5.3208 10.8813 4.56396 11.3501 4.1001Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-left">
                <Image src={homepage_image} width={600} height={600} />
            </div>
        </div>
    )
}
