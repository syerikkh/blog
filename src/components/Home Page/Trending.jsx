import React from 'react'
import { useState, useEffect } from 'react'

export const Trending = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(resp => resp.json())
            .then(articles => setArticles(articles))
    }, [])
    console.log(articles)

    return (
        <div className='mt-[100px]'>
            <div className='flex flex-col gap-10 overflow-auto'>
                <div className='text-2xl font-bold'>Trending</div>
                <div className='flex gap-5 overflow-auto'>
                    {articles.map((article) => {
                        return (
                            <div className='relative flex justify-center items-end'>
                                <img className='min-w-[320px] min-h-[320px] rounded-lg' src={article.cover_image} alt="" />
                                <div className='absolute bottom-7 left-7 right-7 text-white flex flex-col gap-4'>
                                    <div className='bg-[#4B6BFB] py-1 px-[10px] rounded-md text-white'>{article.tag_list}</div>
                                    <div>{article.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
