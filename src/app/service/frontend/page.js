import Image from 'next/image'
import React from 'react'
import aboutUs from '../../../../public/images/Programming-amico.png'
import responsive from '../../../../public/images/Web-devices-amico.png'
import performance from '../../../../public/images/Performance-overview-rafiki.png'
import Collaboration from '../../../../public/images/Open-source-rafiki.png'

export default function ServiceFrontend({id}) {
    return (
        <div id={id} className="min-h-screen py-36 px-[10%]">
            <section className='lg:flex md:flex justify-between items-center gap-10 mt-16'>
                <div className='lg:w-1/2 md:w-1/2'>
                    <p className='text-5xl text-white font-semibold'><span className='text-[#42C6FF] capitalize'>Frontend</span> development</p>
                    <p className='text-gray-400 mt-1 text-lg'>From HTML to Next.js accept React.js</p>
                    <p className='text-gray-300 mt-7 lg:text-lg md:text-sm'>Are you looking to captivate your audience with visually stunning and highly functional websites? Look no further! As a seasoned frontend developer, I specialize in transforming ideas into immersive digital experiences that leave lasting impressions. With expertise in utilizing the power of HTML and taking advantage of the versatility of Next.js, I bring your visions to life by seamlessly blending creativity and cutting-edge technology.</p>
                </div>
                <div>
                    <Image src={aboutUs} width={600} height={600} />
                </div>
            </section>
            <section className='lg:flex md:flex justify-between flex-row-reverse items-center gap-12 mt-16'>
                <div className='lg:w-1/2 md:w-1/2 relative'>
                    <svg className='absolute right-0 -top-20' width="300" height="227" viewBox="0 0 305 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.2315 226.794C69.9077 226.723 54.1406 222.213 40.9304 213.264C27.7912 204.315 17.6705 191.354 10.5682 174.379C3.53693 157.405 0.0568184 136.986 0.127841 113.122C0.127841 89.3295 3.64347 69.0526 10.6747 52.2912C17.777 35.5298 27.8977 22.7812 41.0369 14.0455C54.2472 5.23863 69.9787 0.835219 88.2315 0.835219C106.484 0.835219 122.18 5.23863 135.32 14.0455C148.53 22.8523 158.686 35.6364 165.788 52.3977C172.891 69.0881 176.406 89.3295 176.335 113.122C176.335 137.057 172.784 157.511 165.682 174.486C158.651 191.46 148.565 204.422 135.426 213.371C122.287 222.32 106.555 226.794 88.2315 226.794ZM88.2315 188.548C100.732 188.548 110.71 182.263 118.168 169.692C125.625 157.121 129.318 138.264 129.247 113.122C129.247 96.5739 127.543 82.7955 124.134 71.7869C120.795 60.7784 116.037 52.5043 109.858 46.9645C103.75 41.4247 96.5412 38.6548 88.2315 38.6548C75.8026 38.6548 65.8594 44.8693 58.402 57.2983C50.9446 69.7273 47.1804 88.3352 47.1094 113.122C47.1094 129.884 48.7784 143.875 52.1165 155.097C55.5256 166.247 60.3196 174.628 66.4986 180.239C72.6776 185.778 79.9219 188.548 88.2315 188.548ZM304.15 3.81818V222H258.02V47.6037H256.742L206.777 78.9247V38.0156L260.79 3.81818H304.15Z" fill="white" fill-opacity="0.31" />
                    </svg>
                    <p className='text-5xl text-white font-semibold'><span className='text-[#42C6FF] capitalize'>Responsive</span> Web design</p>
                    <p className='text-gray-400 mt-1 text-lg'>Using, bootstrap, tailwind, css</p>
                    <p className='text-gray-300 mt-7 lg:text-lg md:text-sm'>Craft visually appealing and user-friendly interfaces that adapt seamlessly across different devices and screen sizes, ensuring an optimal user experience.</p>
                </div>
                <div>
                    <Image src={responsive} width={600} height={600} />
                </div>
            </section>
            <section className='lg:flex md:flex justify-between items-center gap-12 mt-16'>
                <div className='lg:w-1/2 md:w-1/2 relative'>
                    <svg className='absolute left-0 -top-20' width="300" height="227" viewBox="0 0 365 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.2315 226.794C69.9077 226.723 54.1406 222.213 40.9304 213.264C27.7912 204.315 17.6705 191.354 10.5682 174.379C3.53693 157.405 0.0568184 136.986 0.127841 113.122C0.127841 89.3295 3.64347 69.0526 10.6747 52.2912C17.777 35.5298 27.8977 22.7812 41.0369 14.0455C54.2472 5.23863 69.9787 0.835219 88.2315 0.835219C106.484 0.835219 122.18 5.23863 135.32 14.0455C148.53 22.8523 158.686 35.6364 165.788 52.3977C172.891 69.0881 176.406 89.3295 176.335 113.122C176.335 137.057 172.784 157.511 165.682 174.486C158.651 191.46 148.565 204.422 135.426 213.371C122.287 222.32 106.555 226.794 88.2315 226.794ZM88.2315 188.548C100.732 188.548 110.71 182.263 118.168 169.692C125.625 157.121 129.318 138.264 129.247 113.122C129.247 96.5739 127.543 82.7955 124.134 71.7869C120.795 60.7784 116.037 52.5043 109.858 46.9645C103.75 41.4247 96.5412 38.6548 88.2315 38.6548C75.8026 38.6548 65.8594 44.8693 58.402 57.2983C50.9446 69.7273 47.1804 88.3352 47.1094 113.122C47.1094 129.884 48.7784 143.875 52.1165 155.097C55.5256 166.247 60.3196 174.628 66.4986 180.239C72.6776 185.778 79.9219 188.548 88.2315 188.548ZM209.228 222V188.761L286.891 116.851C293.496 110.459 299.036 104.706 303.51 99.5923C308.056 94.4787 311.5 89.4716 313.844 84.571C316.188 79.5994 317.36 74.2372 317.36 68.4844C317.36 62.0923 315.904 56.5881 312.992 51.9716C310.08 47.2841 306.103 43.6974 301.06 41.2116C296.017 38.6548 290.3 37.3764 283.908 37.3764C277.232 37.3764 271.408 38.7259 266.436 41.4247C261.465 44.1236 257.63 47.9943 254.931 53.0369C252.232 58.0795 250.882 64.081 250.882 71.0412H207.097C207.097 56.7656 210.328 44.3722 216.792 33.8608C223.255 23.3494 232.31 15.2173 243.958 9.46448C255.605 3.71164 269.029 0.835219 284.228 0.835219C299.853 0.835219 313.453 3.60511 325.03 9.14488C336.678 14.6136 345.733 22.2131 352.196 31.9432C358.659 41.6733 361.891 52.8239 361.891 65.3949C361.891 73.6335 360.257 81.7656 356.99 89.7912C353.794 97.8168 348.077 106.73 339.838 116.531C331.6 126.261 319.988 137.945 305.002 151.581L273.148 182.795V184.287H364.767V222H209.228Z" fill="white" fill-opacity="0.31" />
                    </svg>

                    <p className='text-5xl text-white font-semibold'><span className='text-[#42C6FF] capitalize'>Performance Optimization</span></p>
                    <p className='text-gray-400 mt-1 text-lg'>Using, Next.js</p>
                    <p className='text-gray-300 mt-7 lg:text-lg md:text-sm'>Employ best practices to optimize your website's speed and performance, ensuring quick loading times and an efficient browsing experience for your visitors.</p>
                </div>
                <div>
                    <Image src={performance} width={600} height={600} />
                </div>
            </section>
            <section className='lg:flex md:flex justify-between items-center flex-row-reverse gap-12 mt-16'>
                <div className='lg:w-1/2 md:w-1/2 relative'>
                    <svg className='absolute right-0 -top-20' width="300" height="227" viewBox="0 0 374 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88.2315 226.794C69.9077 226.723 54.1406 222.213 40.9304 213.264C27.7912 204.315 17.6705 191.354 10.5682 174.379C3.53693 157.405 0.0568184 136.986 0.127841 113.122C0.127841 89.3295 3.64347 69.0526 10.6747 52.2912C17.777 35.5298 27.8977 22.7812 41.0369 14.0455C54.2472 5.23863 69.9787 0.835219 88.2315 0.835219C106.484 0.835219 122.18 5.23863 135.32 14.0455C148.53 22.8523 158.686 35.6364 165.788 52.3977C172.891 69.0881 176.406 89.3295 176.335 113.122C176.335 137.057 172.784 157.511 165.682 174.486C158.651 191.46 148.565 204.422 135.426 213.371C122.287 222.32 106.555 226.794 88.2315 226.794ZM88.2315 188.548C100.732 188.548 110.71 182.263 118.168 169.692C125.625 157.121 129.318 138.264 129.247 113.122C129.247 96.5739 127.543 82.7955 124.134 71.7869C120.795 60.7784 116.037 52.5043 109.858 46.9645C103.75 41.4247 96.5412 38.6548 88.2315 38.6548C75.8026 38.6548 65.8594 44.8693 58.402 57.2983C50.9446 69.7273 47.1804 88.3352 47.1094 113.122C47.1094 129.884 48.7784 143.875 52.1165 155.097C55.5256 166.247 60.3196 174.628 66.4986 180.239C72.6776 185.778 79.9219 188.548 88.2315 188.548ZM289.874 224.983C273.965 224.983 259.796 222.249 247.367 216.78C235.009 211.24 225.243 203.641 218.07 193.982C210.968 184.251 207.31 173.03 207.097 160.317H253.546C253.83 165.643 255.57 170.331 258.766 174.379C262.033 178.357 266.365 181.446 271.763 183.648C277.161 185.849 283.233 186.95 289.98 186.95C297.012 186.95 303.226 185.707 308.624 183.222C314.022 180.736 318.248 177.291 321.301 172.888C324.355 168.484 325.882 163.406 325.882 157.653C325.882 151.83 324.249 146.68 320.982 142.206C317.786 137.661 313.169 134.109 307.132 131.553C301.167 128.996 294.064 127.717 285.826 127.717H265.478V93.8395H285.826C292.786 93.8395 298.929 92.6321 304.256 90.2173C309.654 87.8026 313.844 84.4645 316.827 80.2031C319.81 75.8707 321.301 70.8281 321.301 65.0753C321.301 59.6065 319.988 54.8125 317.36 50.6932C314.803 46.5028 311.181 43.2358 306.493 40.892C301.877 38.5483 296.479 37.3764 290.3 37.3764C284.05 37.3764 278.333 38.5128 273.148 40.7855C267.963 42.9872 263.809 46.1477 260.684 50.267C257.559 54.3864 255.89 59.2159 255.676 64.7557H211.465C211.678 52.1847 215.265 41.1051 222.225 31.517C229.185 21.929 238.56 14.4361 250.35 9.03834C262.211 3.56959 275.598 0.835219 290.513 0.835219C305.57 0.835219 318.745 3.56959 330.037 9.03834C341.33 14.5071 350.101 21.8935 356.351 31.1974C362.672 40.4304 365.797 50.7997 365.726 62.3054C365.797 74.5213 361.998 84.7131 354.327 92.8807C346.728 101.048 336.82 106.233 324.604 108.435V110.139C340.655 112.199 352.871 117.774 361.252 126.865C369.703 135.885 373.894 147.178 373.823 160.743C373.894 173.172 370.307 184.216 363.063 193.875C355.89 203.534 345.982 211.134 333.34 216.673C320.698 222.213 306.209 224.983 289.874 224.983Z" fill="white" fill-opacity="0.31" />
                    </svg>
                    <p className='text-5xl text-white font-semibold'><span className='text-[#42C6FF] capitalize'>Collaboration <span className='text-white capitalize'>and</span> Communication</span></p>
                    <p className='text-gray-300 mt-7 lg:text-lg md:text-sm'>Highly skilled and dedicated frontend developer with a passion for creating exceptional user experiences. With a keen eye for design and a strong command of HTML, CSS, and Next.js, you have the ability to transform ideas into pixel-perfect realities. You excel in collaborating closely with clients, actively listening to their unique requirements, and ensuring that their vision is accurately translated into captivating web solutions. </p>
                </div>
                <div>
                    <Image src={Collaboration} width={600} height={600} />
                </div>
            </section>
        </div>
    )
}
