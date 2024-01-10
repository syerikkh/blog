import React from 'react'
import { HeaderPart } from '../HeaderPart'
import { Footer } from '../Footer'

export const ContactPage = () => {
    return (
        <div className="flex flex-col gap-[100px]">
            <HeaderPart />
            <div className='lg:flex lg:justify-center'>
                <div className='flex flex-col'>
                    <div className='px-[10px] py-[14px] lg:w-[769px] flex flex-col gap-5'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-4xl font-semibold'>Contact Us</h1>
                            <p className='text-[#696A75]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div className='py-[10px] flex gap-[50px]'>
                            <div className='p-4 flex flex-col gap-[10px] border-solid border-2 border-[#E8E8EA] lg:w-[294px] rounded-lg'>
                                <h1 className='font-semibold'>Address</h1>
                                <p className='text-[#696A75]'>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                            </div>
                            <div className='p-4 flex flex-col gap-[10px] border-solid border-2 border-[#E8E8EA] lg:w-[294px] rounded-lg'>
                                <h1 className='font-semibold'>Contact</h1>
                                <p className='text-[#696A75]'>313-332-8662
                                    info@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:pt-[29px] lg:pl-[35px] lg:pr-[130px] lg:pb-[26px] bg-[#F6F6F7] lg:w-[749px]'>
                        <div className='flex flex-col lg:gap-6 gap-2 lg:w-[478px]'>
                            <p className='font-semibold'>Leave a Message</p>
                            <div className='flex justify-between'>
                                <input className='lg:py-[14px] lg:px-5 py-2 px-2 border-solid border-2 border-[#E8E8EA] rounded-md' type="text" placeholder='Your name' />
                                <input className='lg:py-[14px] lg:px-5 py-2 px-2 border-solid border-2 border-[#E8E8EA] rounded-md' type="text" placeholder='Your Email' />
                            </div>
                            <input className='py-[14px] px-5 border-solid border-2 border-[#E8E8EA] rounded-md lg:w-[478px]' placeholder='Subject' type="text" />
                            <textarea className='py-[14px] px-5 border-solid border-2 border-[#E8E8EA] rounded-md' placeholder='Write a message' name="" cols="30" rows="10"></textarea>
                            <button className='px-4 py-[10px] text-white bg-[#4B6BFB] w-[130px] text-sm rounded-md'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}
