import Link from 'next/link'
import React from 'react'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

interface IProps {
    type: string
}

function Navbar({ type }: IProps) {

    function handleType() {
        if (type === "search") {
            return <div className="flex items-center w-full justify-between p-5">
                <div className="flex items-center">
                    <Link href="/">
                        <a className="font-bold text-xl mr-5">Search-app</a>
                    </Link>
                    <Input />
                </div>
                <div className="flex space-x-5">
                    <div className="flex space-x-3">
                        <button className=" uppercase p-2 px-3 text-sm  text-white/50 hover:text-white ">
                            en
                        </button>
                        <Button title="Sign-in" />
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>
                    </button>
                </div>
            </div>
        } else {
            return <div className="flex items-center w-full justify-end p-5">
                <div className="flex space-x-5">
                    <div className="flex space-x-3">
                        <button className=" uppercase p-2 px-3 text-sm  text-white/50 hover:text-white ">
                            en
                        </button>
                        <Button title="Sign-in" />
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>
                    </button>
                </div>
            </div>
        }
    }
    return <div className="flex bg-[#050505] w-full sticky top-0">{handleType()}</div>
}

export default Navbar
