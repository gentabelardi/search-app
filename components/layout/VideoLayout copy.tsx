import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../molecules/Navbar'
import data from '../../data/data.json'
import Tabs from '../molecules/Tabs'

function VideoLayout() {
   
    return (
        <div>
            <Navbar type="search" />
            <Tabs />
            <div className="flex flex-col p-5 space-y-5">
           

            </div>
        </div>
    )
}

export default VideoLayout
