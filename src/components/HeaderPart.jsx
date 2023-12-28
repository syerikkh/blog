import React from 'react'
import { MetaBlogLogo } from './MetaBlogLogo'
import { SearchIcon } from './SearchIcon'
import Link from 'next/link'
// import Blog from '@/pages/blog'

export const HeaderPart = () => {
    return (
        <div className="lg:py-8 lg:w-full m-auto">
            <div className="flex">
                <div className='lg:mr-[118px]'><MetaBlogLogo /></div>
                <div className='flex lg:gap-10 justify-center items-center lg:w-[667px] lg:text-base'>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <input className='pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-md' type="text" placeholder='Search' />
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
