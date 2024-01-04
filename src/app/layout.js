import Navbar from '@/app/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import thumbnail from '../../public/images/thmbnail.png'
import Loading from './loading'
import { Suspense } from 'react'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIN MEANBOREY',
  description: 'A web developer is a skilled professional who specializes in creating. i am proficient in various programming languages such as HTML, CSS, and JavaScript, and they utilize their expertise to design and develop visually appealing and user-friendly websites.',
  thumbnail: "https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/366726617_262088796684069_5563290624936517674_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHkMUUOntuKyYJzoREdIG6jaf99vNJFbMdp_3280kVsx9Ot0zyLOdGnIpAc_iq1wYLYYwJMJHiWnUGdAB3_IwEV&_nc_ohc=KVphs4hWEOMAX-3orUR&_nc_ht=scontent.fpnh24-1.fna&oh=00_AfBD1Sci08se2kn6ZxOcGDORBTyV8cf-ZAvznWKi4Cp39w&oe=64E2B4C4",
  openGraph: {
    images: ["https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/366726617_262088796684069_5563290624936517674_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHkMUUOntuKyYJzoREdIG6jaf99vNJFbMdp_3280kVsx9Ot0zyLOdGnIpAc_iq1wYLYYwJMJHiWnUGdAB3_IwEV&_nc_ohc=KVphs4hWEOMAX-3orUR&_nc_ht=scontent.fpnh24-1.fna&oh=00_AfBD1Sci08se2kn6ZxOcGDORBTyV8cf-ZAvznWKi4Cp39w&oe=64E2B4C4"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/366726617_262088796684069_5563290624936517674_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHkMUUOntuKyYJzoREdIG6jaf99vNJFbMdp_3280kVsx9Ot0zyLOdGnIpAc_iq1wYLYYwJMJHiWnUGdAB3_IwEV&_nc_ohc=KVphs4hWEOMAX-3orUR&_nc_ht=scontent.fpnh24-1.fna&oh=00_AfBD1Sci08se2kn6ZxOcGDORBTyV8cf-ZAvznWKi4Cp39w&oe=64E2B4C4" />
        <meta name="thumbnail:image" content="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/366726617_262088796684069_5563290624936517674_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHkMUUOntuKyYJzoREdIG6jaf99vNJFbMdp_3280kVsx9Ot0zyLOdGnIpAc_iq1wYLYYwJMJHiWnUGdAB3_IwEV&_nc_ohc=KVphs4hWEOMAX-3orUR&_nc_ht=scontent.fpnh24-1.fna&oh=00_AfBD1Sci08se2kn6ZxOcGDORBTyV8cf-ZAvznWKi4Cp39w&oe=64E2B4C4" />
      </Head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />} >
          <Navbar />
          {children}
        </Suspense>
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
