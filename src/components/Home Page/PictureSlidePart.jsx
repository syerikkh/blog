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
            <div className='bg-white'>

            </div>
          </div>
        </div>
      })}
    </div>
  )
}
