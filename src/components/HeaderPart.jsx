import React from 'react'
import { MetaBlogLogo } from './MetaBlogLogo'
import { SearchIcon } from './SearchIcon'

export const HeaderPart = () => {
    return (
        <div className="lg:py-8 lg:w-full">
            <div className="flex">
                <div className='lg:mr-[118px]'><MetaBlogLogo /></div>
                <div className='flex lg:gap-10 justify-center items-center lg:w-[667px] lg:text-base'>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div className='p-2 flex justify-center items-center'>
                    <input type="text" placeholder='Search' />
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
