import React, { useState, useEffect } from 'react'

export const PictureSlidePart = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('https://dev.to/api/articles')
      .then(resp => resp.json())
      .then(articles => setArticles(articles))
  }, [])
  console.log(articles)
  return (
    <div className='mt-[100px] flex items-center flex-col'>
      {articles.map((article) => {
        return <div>
          <div>
            <img src={article.cover_image} alt="" />
            <div className='bg-white w-[558px] h-[232px] relative bottom-60 left-2 p-10 rounded-lg'>
              <div className='py-1 px-[10px] text-white text-base bg-[#4B6BFB]'>{article.tags}</div>
              <h1 className='text-4xl font-semibold'>{article.title}</h1>
              <p className='text-gray-500 mt-6'>{new Date(article.published_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
