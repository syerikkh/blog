
import { MetaBlogLogo } from './MetaBlogLogo'
import { SearchIcon } from './SearchIcon'
import Link from 'next/link'
import { useContext } from 'react'
import { SearchContextValue } from '@/context/SearchCont'
// import Blog from '@/pages/blog'

export const HeaderPart = () => {
    const { searchValue, setSearchValue } = useContext(SearchContextValue);
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
}
