import React from 'react'
import { FBIcon } from './Icons/FBIcon'
import { TwitterIcon } from './Icons/TwitterIcon'
import { InstagramIcon } from './Icons/InstagramIcon'
import { LinkedInIcon } from './Icons/LinkedInIcon'
import { MetaBlogLogo } from './MetaBlogLogo'

export const Footer = () => {
  return (
    <div className='lg:px-[352px] lg:pt-16 py-[30px] bg-[#F6F6F7] absolute left-0 mt-20 lg:w-[100vw] flex flex-col items-center justify-center'>
      <div className='flex lg:flex-row flex-col gap-5 lg:w-[1215px] justify-between'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold'>About</h1>
            <p className='text-[#696A75] max-w-[280px] lg:block hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div>
            <p className='text-[#696A75]'><strong>Email</strong> : info@jstemplate.net</p>
            <p className='text-[#696A75]'><strong>Phone</strong> : 880 123 456 789</p>
          </div>
        </div>
        <div className='justify-start'>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-[#696A75]'>Home</p>
            <p className='text-[#696A75]'>Blog</p>
            <p className='text-[#696A75]'>Contact</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <FBIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className='py-8 flex gap-6 lg:ml-0 ml-2 items-center justify-between lg:w-[1215px] border-y-[1px] border-solid border-[#DCDDDF] mt-[25px]'>
        <div><MetaBlogLogo /></div>
        <div className='lg:w-[921px] flex justify-end'>
          <div className='flex gap-4'>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
