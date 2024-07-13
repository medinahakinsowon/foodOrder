import React from 'react'
import {IoLocationSharp} from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='mt-20 text-white'>
        <div data-aos='fade-down' className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>
             {/*-----heading section*/}
               <h1 className='text-3xl text-yellow text-center font-bold py-10'>
                 Contact Us
               </h1>

                {/*-----grid section*/}
               <div className='grid grid-cols-1 sm:grid-cols-2 
                 md:grid-cols-3 gap-14 border-b-2 pb-6 border-white'>

                    {/*-----address section*/}

                 <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <IoLocationSharp className='text-5xl'/>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur <br/> adipisicing elit. Cumque, ducimus.</p>
                 </div>

                    {/*-----email section*/}

                    <div className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <MdEmail className='text-5xl'/>
                        </div>
                        <div>
                            <p>infofood@gmail.com</p>
                            <p>buyfood@gmail.com</p>
                        </div>
                    </div>

                    {/*-----number section*/}

                    <div  className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <FaPhone className='text-5xl'/>
                        </div>
                        <div>
                            <p>+234 45897634567 Sales & Services</p>
                            <p>+234 45897634567 Whatsapp</p>
                            <p>+234 45897634567 Hiring Equiries</p>
                        </div>
                    </div>

                </div>
              {/*-----footer bottom section*/}
              <div className='flex justify-between items-center p-4'>
                <p>@ 2024 GoodFood. All rights reserved</p>
                <div className='flex items-center gap-6'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms & Conditions</a>
                </div>
              </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Footer;