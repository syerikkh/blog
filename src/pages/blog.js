import { AllBlogPosts } from '@/components/Blog Page/AllBlogPosts'
import { HeaderPart } from '@/components/HeaderPart'
import React from 'react'

export default function Blog() {
    return (
        <div className="lg:w-[1216px] m-auto">
            <HeaderPart />
            <AllBlogPosts />
        </div>
    )
}
