import React, { useContext, useEffect, useState } from 'react'
import { Footer } from '../Footer'
import Link from 'next/link'
import { SearchContextValue } from '@/context/SearchCont'

export const AllBlogPosts = () => {
    const { searchValue, setSearchValue } = useContext(SearchContextValue);

    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(resp => resp.json())
            .then(articles => setArticles(articles))
    }, [])

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchValue.toLowerCase())
    );


    return (
        <div className='flex flex-col gap-8'>
            <div className='lg:py-12 flex items-center'>
                <div className='flex justify-start items-start text-2xl font-bold'>All Blog Posts</div>
            </div>
            <div className='lg:grid lg:grid-cols-3 lg:gap-4 lg:grid-rows-6'>
                {filteredArticles.map((article, index) => {
                    return (
                        <Link href={`/${filteredArticles.id}`} key={index}>
                            <div className='w-[392px] h-[476px] lg:p-4 flex flex-col lg:gap-4 border-solid border-2 border-[#E8E8EA] rounded-xl cursor-pointer'>
                                <div><img className='rounded-xl' src={article.social_image} alt="" /></div>
                                <div className='lg:p-2 lg:flex lg:flex-col lg:gap-4'>
                                    <div className='gap-4 flex flex-col'>
                                        <div className='flex gap-2 overflow-auto'>{article.tag_list.map((tags) => {
                                            return <div className='py-1 px-[10px] text-[#4B6BFB] text-base bg-gray-100 rounded-lg'>{tags}</div>
                                        })}</div>
                                        <h1 className='font-semibold text-xl'>{article.title}</h1>
                                    </div>
                                    <div className='flex lg:gap-3 items-center mt-5'>
                                        <img className='w-9 h-9 rounded-full' src={article.user.profile_image_90} alt="" />
                                        <p className='text-[#97989F]'>{article.user.username}</p>
                                        <p className='text-[#97989F] ml-2'>{article.published_at.slice(0, 10)}</p>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    )
                })}
                {filteredArticles == 0 && <h1>Article Not Found</h1>}
            </div>
            <div><Footer /></div>
        </div >
    )
}
