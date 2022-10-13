import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Tabs() {
    const router = useRouter()
    const { q, pg } = router.query
    return (
        <div className="flex p-5 py-0 w-full ">
        <ul className="flex space-x-3">
            <li className={`p-1 border-b border-transparent ${pg === undefined? "border-white":"border-transparent"} hover:border-white/10 px-2`}>
                <Link href={`s?q=${encodeURIComponent(q as string)}`}>
                    <a className="text-white text-sm  uppercase">
                        All
                    </a>
                </Link>
            </li>
            <li className={`p-1 border-b border-transparent ${pg === "1"? "border-white":"border-transparent"} hover:border-white/10 px-2`}>
                <Link href={`s?q=${encodeURIComponent(q as string)}&pg=1`}>
                    <a className="text-white text-sm  uppercase">
                        News
                    </a>
                </Link>
            </li>
            <li className={`p-1 border-b border-transparent ${pg === "2"? "border-white":"border-transparent"} hover:border-white/10 px-2`}>
                <Link href={`s?q=${encodeURIComponent(q as string)}&pg=2`}>
                    <a className="text-white text-sm  uppercase">
                        Video
                    </a>
                </Link>
            </li>
            <li className={`p-1 border-b border-transparent ${pg === "3"? "border-white":"border-transparent"} hover:border-white/10 px-2`}>
                <Link href={`s?q=${encodeURIComponent(q as string)}&pg=3`}>
                    <a className="text-white text-sm  uppercase">
                        Image
                    </a>
                </Link>
            </li>
           
        </ul>
    </div>
    )
}

export default Tabs
