import React, { useState } from 'react'
import { MetaBlogLogo } from './MetaBlogLogo'
import { SearchIcon } from './SearchIcon'
import Link from 'next/link'
// import Blog from '@/pages/blog'

export const HeaderPart = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://dev.to/api/articles');
        const data = await res.json();
        setData(data);
    }
    const [searchValue, setSearchValue] = useState('');
    console.log('search', searchValue)

    return (
        <div className="lg:py-8 lg:w-full">
            <div className="flex">
                <div className='lg:mr-[118px]'><MetaBlogLogo /></div>
                <div className='flex lg:gap-10 justify-center items-center lg:w-[667px] lg:text-base'>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <input id='search' className='pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-md' type="text" placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button><SearchIcon /></button>
                </div>
            </div>
        </div>

    )
    //     function search() {
    //         const searchBar = document.getElementById("search").value;
    //         data.map((article) => {
    //             return (
    //         if ({ article.title }.includes(searchBar))
    //     )
    //     })
    // }

}
