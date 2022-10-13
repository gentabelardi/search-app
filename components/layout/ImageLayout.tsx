import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import data from '../../data/data.json'
import Navbar from '../molecules/Navbar'
import Tabs from '../molecules/Tabs'

interface IResluts {
    name: string
    url: string
    description: string
}
function ImageLayout() {
    const router = useRouter()
    let [resutls, setResutls] = useState<IResluts[]>()
    const { q, pg, show } = router.query
    useEffect(() => {

        if (router.isReady) {
            const filteredData = data?.filter((el) => {
                if (q === '') {
                    return null;
                }
                else {
                    return el.name.toLowerCase().includes(q as string)
                }
            })
            setResutls(filteredData)
        }
    }, [router.isReady]);


    typeof show === "undefined" ? document.body.style.overflowY = 'auto' :
        document.body.style.overflow = 'hidden';

    return (
        <div className={`relative `} >
            <Navbar type="search" />
            <Tabs />
            <div className=" columns-2 md:columns-3 lg:columns-4 gap-10 space-y-10 mx-auto  p-5 ">
                {[1, 2, 3, 2, 4, 1, 2, 4].map((item, index) => {
                    return <Link  href={`s?q=${q}&pg=${pg}&show=${item}`}>
                        <a className="flex  break-inside-avoid  mb-6">
                            <img className="w-full object-cover" src={`dummy/dummy${item}.jpg`} />
                        </a>
                    </Link>
                })}
            </div>
            {typeof show === "undefined" ? null : <div className="absolute flex items-center justify-center z-50  top-0 bottom-0 h-screen  left-0 right-0 bg-[#050505]/80 backdrop-blur-sm">
                <div className="relative group flex w-full h-full items-center justify-center">
                    <div className="flex absolute  invisible group-hover:visible p-2 py-5 bg-gradient-to-b from-black/60 px-5 top-0 w-full justify-between items-center">
                        <div className="flex flex-col">
                            <Link href={`s?q=${q}&pg=${pg}`}>
                                <a className=" text-lg ">
                                    <h1 className="font-bold hover:underline text-xl text-[#00F1CF]">Photo shot</h1>
                                    <p className="text-sm ">https://www.youtube.com/</p>
                                </a>
                            </Link>
                        </div>
                        <Link href={`s?q=${q}&pg=${pg}`}>
                            <a className="flex 0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <div className="flex bg-black p-2 px-4 rounded-full absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
                        <span className="text-xs">Image may be subject to copyright.</span>
                    </div>
                    <div className="flex p-5  max-w-1/2 h-full ">
                        <img className="w-full h-full object-cover" src={`dummy/dummy${show}.jpg`} />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ImageLayout
