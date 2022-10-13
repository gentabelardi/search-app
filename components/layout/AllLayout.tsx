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

function AllLayout() {
    const router = useRouter()
    let [resutls, setResutls] = useState<IResluts[]>()
    const { q, pg } = router.query
    useEffect(() => {
        if (router.isReady) {
            let words = q?.toString().split(' ')
            words = words?.filter(function (str) {
                return /\S/.test(str);
            });
            const handleSplit = data?.filter((el) => {
                if (q === '' || q === null || typeof q === "undefined") {
                    return null;
                }
                else {
                    return words?.some(r => el.name.includes(r as string))
                }
            }).slice(0, 5)
            const handleDesc = data?.filter((el) => {
                if (q === '' || q === null || typeof q === "undefined") {
                    return null;
                }
                else {
                    el.description.toLowerCase().replace(/[,.·]/g, '').toString()
                    return words?.some(r => el.description.toLowerCase().includes(r))
                }
            }).slice(0, 5)
            const handleFilterTitle = handleDesc.filter((el) => {
                return handleSplit?.some(r => el.name !== r.name  )
            })
            const handleFilterDesc = handleSplit.filter((el) => {
                return handleDesc?.some(r => el.name !== r.name  )
            })
            handleFilterDesc.push.apply(handleFilterDesc, handleFilterTitle)
            if (handleDesc.length === 0) {
                setResutls(handleSplit)
            } else {setResutls(handleFilterDesc)}
        }
    }, [router.isReady]);


    return (
        <div>
            <Navbar type="search" />
            <Tabs />
            <div className="flex flex-col p-5 space-y-5">
                <p>{resutls?.length} Results</p>
                {typeof resutls !== 'undefined' && resutls.length > 0 ?
                    resutls?.map((item, index) => {
                        return <div key={Math.random()} className="flex  flex-col w-[600px]">
                            <div className="flex">
                                <a href={item.url} className="group text-lg ">
                                    <h1 className="font-bold group-hover:underline text-xl text-[#00F1CF]">{item.name}</h1>
                                    <p className="text-sm ">{item.url}</p>
                                </a>
                            </div>
                            <p className="text-sm mt-2 truncate text-ellipsis overflow-hidden">{item.description}</p>
                        </div>
                    })
                    : <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">😥 Your search did not match any documents</h1>
                        <p className="text-sm text-white/50">Need help? See more tips for doing searches on Search-app.</p>
                    </div>}
            </div>
            <div className="flex p-5 items-center">
                <button className="border border-white uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
                    1
                </button>
                <button className="border border-white/10 uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
                    2
                </button>
                <button className="border border-white/10 uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
                    3
                </button>
                <button className="border border-white/10 uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
                    4
                </button>
                <button className="border border-white/10 uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
                    5
                </button>
                <button className="border border-white/10 uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default AllLayout
