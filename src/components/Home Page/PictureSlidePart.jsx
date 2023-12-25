import React, { useState, useEffect } from 'react'

export const PictureSlidePart = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('https://dev.to/api/articles')
      .then(resp => resp.json())
      .then(articles => setArticles(articles))
  }, [])
  return (
    <div>
      <div className='mt-[100px] flex items-center flex-col'>
        {articles.map((article) => {
          return <div>
            <div>
              <div className='relative'>
                <img className='rounded-lg' src={article.cover_image} alt="" />
              </div>
              <div className='bg-white w-[558px] h-[232px] relative bottom-60 left-2 p-10 rounded-lg flex flex-col gap-4'>
                <div className='py-1 px-[10px] text-white text-base bg-[#4B6BFB] rounded-lg'>{article.tags}</div>
                <h1 className='font-semibold text-3xl'>{article.title}</h1>
                <p className='text-gray-500'>{new Date(article.published_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        })}
      </div>
      <div>
        <button>asdnasdas</button>
        <button>asdasdasd</button>
      </div>
    </div>
  )
}
