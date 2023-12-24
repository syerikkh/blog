import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HeaderPart } from '../components/HeaderPart'
import { AllBlogPosts } from '@/components/Blog Page/AllBlogPosts'
import { Footer } from '@/components/Footer'
import { PictureSlidePart } from '@/components/Home Page/PictureSlidePart'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="lg:w-[1216px] m-auto">
      <HeaderPart />
      <PictureSlidePart />
      {/* <AllBlogPosts /> */}

    </div>
  )
}
