import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import data from '../../../data/data.json'

function useOutsideAlerter(ref: any, state: any) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                state(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref])
}

function Input() {
    const router = useRouter()
    const q = router?.query.q
    const [query, setQuery] = useState(q as string)
    const [complete, setComplete] = useState("")
    const [sugges, setSugges] = useState(false)
    const wrapperRefInput = useRef(null);
    const [index, setIndex] = useState(0);
    useOutsideAlerter(wrapperRefInput, setSugges)
    
    const filteredData = data?.filter((el) => {
        if (query === '' || query === null || typeof query === "undefined") {
            return null;
        }
        else {
            if (el.name.toLowerCase().startsWith(query.toString()) === false && query?.length > 0) {
                return el.name.toLowerCase().match(encodeURIComponent(query.toString()))?.toString()
            }
            else {
                return el.name.toLowerCase().startsWith(encodeURIComponent(query.toString()))?.toString()
            }
        }
    }).slice(0, 5)

    function handleSearch(e: any) {
        let search = e.target.value

        if (search.length > 0) setSugges(true)
        if (search.length <= 0) setSugges(false)
        setComplete("")
        setIndex(0)
        setQuery(search)
    }
    const handleKeyDown = (e: any) => {
        if (query?.length > 0) {
            if (e.key === 'Enter') {
                const search = e.target.value
                const path = search ? `search?q=${encodeURIComponent(search)}` : router.pathname
                router.replace({
                    pathname: router.pathname,
                    query: { param_key: search },
                }, path).then(() => router.reload())
            } if (e.key === 'ArrowDown') {
                if (filteredData.length === index || index < 0) {
                    setIndex(0)
                } else {
                    setIndex((prevValue) => prevValue + 1)
                    setComplete(filteredData[index].name)
                }
            } if (e.key === 'ArrowUp') {
                if (index < 0 || index === 0) {
                    setIndex(filteredData?.length)
                } else {
                    setIndex((prevValue) => prevValue - 1)
                    setComplete(filteredData[index]?.name)
                }
            }
        } else return null
    }

    return (
        <div ref={wrapperRefInput} className="flex  items-ceter relative w-[500px]">
            <input placeholder="Search the web" value={complete?.length > 0 ? complete : query?.length >= 0 ? query : q} onClick={() => setSugges(true)} onKeyDown={handleKeyDown} type="text" onChange={handleSearch} className="placeholder-white/40 w-full pr-10 focus:border-white border border-white/10  transition ease-in-out delay-100 hover:border-white p-2   bg-transparent focus:outline-none  text-white" />
            <button className="p-2 absolute top-1/2 transform -translate-y-1/2 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>

            {sugges && query?.length > 0 ? <div className="flex flex-col border border-white/10  bg-[#050505] top-0 mt-11 absolute  z-50 w-full">
                {filteredData.slice(0, 5).map((item, index) => {
                    return <div className="flex w-full p-3 py-1">
                        <a className="text-white  w-full" href={`search?q=${item.name}`}>
                            <h1>
                                {item.name.toLowerCase().startsWith(query) === false ? <span className=" font-bold">{item.name.toString().toLowerCase()}</span> : <> {query}
                                    < span className=" font-bold">{item.name.toString().toLowerCase().replace(query, '')}</span></>
                                }
                            </h1>
                        </a>
                    </div>
                })}
            </div> : null
            }
        </div >
    )
}

export default Input
