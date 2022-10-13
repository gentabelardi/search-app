import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Input from '../components/atoms/Input'
import Navbar from '../components/molecules/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen ">
      <Navbar type="default" />
      <div className="flex flex-col justify-center items-center transform -translate-x-1/2 absolute top-1/3 left-1/2">
        <h1 className=" font-bold text-5xl">Search-app.</h1>
        <div className="mt-10">
          <Input />
        </div>
      </div>
      <div className="flex p-3 space-x-5 z-10 items-center w-full justify-center absolute bottom-0">
        <Link href="/">
          <a className="text-white/50 hover:text-white uppercase text-sm ">
            About
          </a>
        </Link>
        <Link href="/">
          <a className="text-white/50 hover:text-white uppercase text-sm ">
            Feature
          </a>
        </Link>
        <Link href="/">
          <a className="text-white/50 hover:text-white uppercase text-sm ">
            News
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
