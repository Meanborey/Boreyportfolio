"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    return (
        <div className='flex flex-col fixed w-full top-0 justify-center items-center h-screen bg-white'>
            <div className='bg-white shadow-lg flex flex-col gap-7 justify-center items-center p-10 rounded-xl'>
                <img src='https://portistad-api.istad.co/files/ab9bbd8c-525f-4207-a62e-12b9623e255e.png' alt='404' className='m-auto w-80' />
                <p className='text-2xl text-black'>Look like you lost your destination <span className='text-red-600'>!!!</span></p>
                <div className='flex gap-5'>
                    <button onClick={() => router.back()} className='hover:bg-gradient-to-r from-red-500 to-blue-500 text-lg transition-colors font-semibold bg-blue-700 px-3 py-2 rounded-full text-white'>Back</button>
                    <Link href={'/'} className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-colors text-lg font-semibold bg-blue-700 px-3 py-2 rounded-full text-white'>Go back home</Link>
                </div>
            </div>
        </div>
    )
}