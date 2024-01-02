import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react'

export const Trending = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dev.to/api/articles');
                const data = await response.json();

                const sortedData = data.sort((a, b) => b.public_reactions_count - a.public_reactions_count);

                setArticles(sortedData);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-[100px]'>
            <div className='flex flex-col gap-10 overflow-auto'>
                <div className='text-2xl font-bold'>Trending</div>
                <div className='flex gap-5 overflow-auto'>
                    {articles.slice(0, 5).map((article, index) => {
                        return (
                            <Link href={`/${article.id}`} key={index}>
                                <div className='relative flex justify-center items-end'>
                                    <img className='min-w-[420px] min-h-[320px] rounded-lg' src={article.cover_image ? article.cover_image : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="" />
                                    <div className='absolute bottom-7 left-7 right-7 text-white flex flex-col gap-4 z-10'>
                                        <div className='flex gap-2'>
                                            {article?.tag_list.map((tags) => {
                                                return (
                                                    <div className='py-1 px-[10px] text-white text-base bg-[#4B6BFB] rounded-lg'>{tags}</div>
                                                )
                                            })}</div>
                                        <div className='font-semibold text-lg'>{article.title}</div>
                                    </div>
                                    <div className='w-[420px] h-[320px] bg-black absolute top-0 bottom-0 opacity-40 rounded-lg'></div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
