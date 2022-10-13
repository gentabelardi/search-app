import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AllLayout from '../../components/layout/AllLayout'
import ImageLayout from '../../components/layout/ImageLayout'
import NewsLayout from '../../components/layout/NewsLayout'
import VideoLayout from '../../components/layout/VideoLayout copy'
function index() {
    const router = useRouter()
    const { pg } = router.query

    function handlePage() {
        if (pg?.toString() === "1") {
            return <NewsLayout />
        } else if (pg?.toString() === "2") {
            return <VideoLayout />
        } else if (pg?.toString() === "3") {
            return <ImageLayout />
        } else {
            return <AllLayout />
        }
    }
    return <div className="flex flex-col">
        {handlePage()}
    </div>
}

export default index
