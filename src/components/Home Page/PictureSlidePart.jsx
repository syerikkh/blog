import React, { useState, useEffect } from 'react'
import { LeftArrow } from '../LeftArrow';
import { RightArrow } from '../RightArrow';

export const PictureSlidePart = () => {
  const [articles, setArticles] = useState([])
  const [index, setIndex] = useState(0);
  function handleRightClick() {
    setIndex(index + 1)
  }
  function handleLeftClick() {
    setIndex(index - 1)
  }
  useEffect(() => {
    fetch('https://dev.to/api/articles')
      .then(resp => resp.json())
      .then(articles => setArticles(articles))
  }, [])
  let gallery = articles[index];
  return (
    <div>
      <div className='mt-[100px] flex flex-col items-center flex flex-col gap-2'>
        <div className='relative'>
          <div className='flex'>
            <img className='rounded-lg' src={gallery?.cover_image} alt="" />
          </div>
          <div className='bg-white w-[558px] h-[232px] absolute bottom-2 left-2 p-10 rounded-lg flex flex-col gap-4'>
            <div className='py-1 px-[10px] text-white text-base bg-[#4B6BFB] rounded-lg'>{gallery?.tags}</div>
            <h1 className='font-semibold text-3xl'>{gallery?.title}</h1>
            <p className='text-gray-500'>{new Date(gallery?.published_at).toLocaleDateString()}</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <button className='w-10 h-10 flex justify-center items-center border-solid border-2 border-[#696A75] rounded-lg' onClick={handleLeftClick}>
            <LeftArrow />
          </button>
          <button className='w-10 h-10 flex justify-center items-center border-solid border-2 border-[#696A75] rounded-lg' onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  )
}
