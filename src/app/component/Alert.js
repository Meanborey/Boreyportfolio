import React from 'react'

export default function Alert({ name, close }) {
    return (
        <div className="overlay-tips fixed flex bg-gray-500/20 justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <button type="button" onClick={close} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <svg className='m-auto' width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_19_193)">
                            <path d="M32.5 97.5C27.3 97.5 22.1 92.95 19.5 91C6.5 81.9 2.6 78.65 0 76.7V104C0 107.589 2.91078 110.5 6.5 110.5H58.5C62.0892 110.5 65 107.589 65 104V76.7C62.4 78.65 58.5 81.9 45.5 91C42.9 92.95 37.7 97.5 32.5 97.5ZM58.5 58.5H6.5C2.91078 58.5 0 61.4108 0 65V68.25C5.2 72.15 4.55 72.15 23.4 85.8C25.35 87.1 29.25 91 32.5 91C35.75 91 39.65 87.1 41.6 86.45C60.45 72.8 59.8 72.8 65 68.9V65C65 61.4108 62.0892 58.5 58.5 58.5ZM110.5 39H45.5C41.9108 39 39 41.9108 39 45.5V52H58.5C65.2458 52 70.8073 57.1634 71.4411 63.7447L71.5 63.7V91H110.5C114.089 91 117 88.0892 117 84.5V45.5C117 41.9108 114.089 39 110.5 39ZM104 65H91V52H104V65ZM32.5 45.5C32.5 38.3317 38.3317 32.5 45.5 32.5H91V13C91 9.41078 88.0892 6.5 84.5 6.5H19.5C15.9108 6.5 13 9.41078 13 13V52H32.5V45.5Z" fill="#009F40" />
                        </g>
                        <defs>
                            <clipPath id="clip0_19_193">
                                <rect width="117" height="117" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text-center py-10 text-lg'>
                        You have message me successfully <span className='text-xl font-semibold text-blue-800'>{name}</span>, have a good day !!!
                    </p>
                </div>
            </div>
        </div>
    )
}
