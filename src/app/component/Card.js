import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ logo, title, description, link }) {
    return (
        <a href={link} className='bg-white/30 shadow-lg hover:scale-105 transition-all px-5 py-10 text-white flex flex-col justify-center items-center gap-10 rounded-2xl lg:w-[400px] md:w-[500px] w-full min-h-[500px] lg:mb-0 md:mb-0 mb-5'>
            <img src={logo} alt="logo" className='w-40 mx-auto' />
            <div className='grid gap-5'>
                <p className='text-center text-2xl font-semibold'>{title}</p>
                <p className='text-center text-sm '>{description}</p>
            </div>
        </a>
    )
}
