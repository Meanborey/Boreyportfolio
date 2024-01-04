import Image from 'next/image'
import homepage_image from '../../public/images/IMGborey.JPG'
import Link from 'next/link'
import About from './about/page'
import ServiceFrontend from './service/frontend/page'
import ServiceBackend from './service/backend/page'
import Container from 'postcss/lib/container'
import Contact from './contact/page'
import Card from './component/Card'
import { Cardinfo } from './component/Cardjson';
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='lg:flex md:flex justify-between items-center py-36 px-[10%]'>
        <div className='lg:w-1/2 md:w-2/3' data-aos="fade-right">
          <div className='grid gap-10px'>
            <p className='text-white lg:text-7xl md:text-5xl text-4xl uppercase font-bold'>Sin</p>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 lg:text-8xl md:text-5xl text-5xl uppercase font-bold'>Meanborey</p>
          </div>
          <p className='text-[#42C6FF] text-[20px] capitalize font-bold'>Full stack developer <span className='text-white'>Cambodia</span></p>
          <p className='text-white lg:text-xl md:text-lg text-md mt-14'>A web developer is a skilled professional who specializes in creating and maintaining websites. They are proficient in various programming languages such as HTML, CSS, and JavaScript, and they utilize their expertise to design and develop visually appealing and user-friendly websites.</p>
        </div>
        <div data-aos="fade-left">
          <Image src={homepage_image} width={600} height={600} className='rounded-full' />
        </div>
      </div>
      <About />
      <p className='text-white text-5xl font-semibold px-[10%]'>My Skills</p>
      <div className='lg:flex md:flex justify-center items-center lg:py-20 md:py-10 py-10 px-[10%] gap-5'>
        {
          Cardinfo.map((e) => (
            <Card logo={e.logo} title={e.title} description={e.description} link={e.link} />
          ))
        }
      </div>
      <ServiceFrontend id={'front-end'} />
      <ServiceBackend id={'back-end'} />
      <Contact />
    </main>
  )
}
