import { HeaderPart } from '@/components/HeaderPart';
import { useRouter } from 'next/router'
import React from 'react'
import { useState, useEffect } from 'react'

export default function BlogId() {
    const { query } = useRouter();
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://dev.to/api/articles');
                const data = await response.json();
                setFilteredArticles(data.filter((article) => article.id === parseInt(query.id, 10)));
            } catch (error) {
                alert("Error");
            }
        };

        if (query?.id) {
            fetchArticles();
        }

    }, [query?.id]);

    return (
        <div>
            {filteredArticles.map((article) => {
                return (
                    <div className='w-[804px] m-auto flex flex-col gap-8 mt-[100px]'>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h1 className='text-4xl font-bold'>{article.title}</h1>
                            </div>
                            <div className='flex  lg:gap-3'>
                                <img className='w-9 h-9 rounded-full' src={article.user.profile_image_90} alt="" />
                                <p className='text-[#97989F]'>{article.user.username}</p>
                                <p className='text-[#97989F] ml-2'>{article.published_at.slice(0, 10)}</p>
                            </div>
                        </div>
                        <div>
                            <img className='rounded-xl' src={article.social_image} alt="" />
                        </div>
                    </div>

                )
            })}
        </div >
    )
}
