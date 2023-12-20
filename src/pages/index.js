import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HeaderPart } from '../components/HeaderPart'
import { AllBlogPosts } from '@/components/AllBlogPosts'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="lg:w-[1216px] m-auto">
      <HeaderPart />
      <div className='lg:py-12 flex items-center'>
        <div className='flex justify-start items-start text-2xl font-bold'>All Blog Posts</div>
      </div>
      <AllBlogPosts />
    </div>
  )
}
