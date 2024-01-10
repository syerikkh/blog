
import { MetaBlogLogo } from './MetaBlogLogo'
import { SearchIcon } from './SearchIcon'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { SearchContextValue } from '@/context/SearchCont'
import { BurgerMenuIcon } from './BurgerMenuIcon'
import { XIcon } from './XIcon'
import { RightArrow } from './RightArrow'
// import Blog from '@/pages/blog'

export const HeaderPart = () => {
    const { searchValue, setSearchValue } = useContext(SearchContextValue);
    const [active, setActive] = useState(false);
    return (
        <div className="lg:py-8 lg:w-full p-5">
            <div className="flex justify-between">
                <div className='lg:mr-[118px]'><MetaBlogLogo /></div>
                <div className='lg:flex lg:gap-10 justify-center items-center lg:w-[667px] lg:text-base hidden lg:block'>
                    <Link href="/" className='hover:text-sky-700'>Home</Link>
                    <Link href="/blog" className='hover:text-sky-700'>Blog</Link>
                    <Link href="/contact" className='hover:text-sky-700'>Contact</Link>
                </div>
                <div className='lg:flex lg:gap-2 lg:justify-center lg:items-center hidden lg:block'>
                    <input id='search' className='pl-4 py-2 pr-2 bg-[#F4F4F5] rounded-md' type="text" placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button><SearchIcon /></button>
                </div>
                <div className='block lg:hidden' onClick={() => setActive(!active)}>
                    {active ?

                        <img className='w-8 h-8' src="xicon.png" alt="" />

                        : <BurgerMenuIcon />}
                </div>

            </div>
            {active ? <div className='flex mt-5 p-2 rounded-md flex-col gap-4 border-solid border-2 border-sky-500 justify-center items-center text-base lg:hidden'>
                <Link href="/" className='hover:text-sky-700'>Home</Link>
                <Link href="/blog" className='hover:text-sky-700'>Blog</Link>
                <Link href="/contact" className='hover:text-sky-700'>Contact</Link>
            </div> : <></>}
        </div >

    )
}
