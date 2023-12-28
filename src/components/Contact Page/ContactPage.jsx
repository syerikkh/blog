import React from 'react'
import { HeaderPart } from '../HeaderPart'
import { Footer } from '../Footer'

export const ContactPage = () => {
    return (
        <div className="lg:w-[1216px] m-auto flex flex-col gap-[100px]">
            <HeaderPart />
            <div className='flex justify-center'>
                <div className='flex items-center flex-col'>
                    <div className='px-[10px] py-[14px] w-[769px] flex flex-col gap-5'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-4xl font-semibold'>Contact Us</h1>
                            <p className='text-[#696A75]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div className='py-[10px] flex gap-[50px]'>
                            <div className='p-4 flex flex-col gap-[10px] border-solid border-2 border-[#E8E8EA] w-[294px] rounded-lg'>
                                <h1 className='font-semibold'>Address</h1>
                                <p className='text-[#696A75]'>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                            </div>
                            <div className='p-4 flex flex-col gap-[10px] border-solid border-2 border-[#E8E8EA] w-[294px] rounded-lg'>
                                <h1 className='font-semibold'>Contact</h1>
                                <p className='text-[#696A75]'>313-332-8662
                                    info@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[29px] pl-[35px] pr-[130px] pb-[26px] bg-[#F6F6F7] w-[749px]'>
                        <div className='flex flex-col gap-6 w-[478px]'>
                            <p className='font-semibold'>Leave a Message</p>
                            <div className='flex justify-between'>
                                <input className='py-[14px] px-5 border-solid border-2 border-[#E8E8EA] rounded-md' type="text" placeholder='Your name' />
                                <input className='py-[14px] px-5 border-solid border-2 border-[#E8E8EA] rounded-md' type="text" placeholder='Your Email' />
                            </div>
                            <input className='py-[14px] px-5 border-solid border-2 border-[#E8E8EA] rounded-md w-[478px]' placeholder='Subject' type="text" />
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
