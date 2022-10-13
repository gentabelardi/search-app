import Link from 'next/link'
import React from 'react'

interface IProps {
    title: string
}

function Button(props: IProps) {
    return (
        <button className="border border-white/10 uppercase hover:border-white p-2 px-3 text-sm font-bold text-white ">
            {props.title}
        </button>
    )
}

export default Button
