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
  let slide = articles[index];
  console.log(slide?.tag_list)
  return (
    < div >
      <div className='mt-[100px] flex flex-col items-center flex flex-col gap-2'>
        <div className='relative'>
          <div className='flex'>
            <img className='rounded-lg w-[1216px] h-[600px]' src={slide?.cover_image ? slide?.cover_image : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="" />
          </div>
          <div className='bg-white w-[558px] h-[232px] absolute bottom-2 left-2 p-10 rounded-lg flex flex-col gap-4 border-solid border-2 border-[#E8E8EA]'>
            <div className='flex gap-2'>
              {slide?.tag_list.map((tags) => {
                return (
                  <div className='py-1 px-[10px] text-white text-base bg-[#4B6BFB] rounded-lg'>{tags}</div>
                )
              })}</div>
            <h1 className='font-semibold text-3xl'>{slide?.title}</h1>
            <p className='text-gray-500'>{new Date(slide?.published_at).toLocaleDateString()}</p>
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
    </div >
  )
}
