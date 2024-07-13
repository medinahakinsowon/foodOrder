import React from 'react';
import Apple from '../../assets/png/apple.png';
import Kiwi from '../../assets/png/kiwi.png';
import Leaf from '../../assets/png/leaf.png';
import Tomato from '../../assets/png/tomato.png';
import Lemon from '../../assets/png/lemon.png';
import PrimaryButton from '../shared/PrimaryButton';

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className='relative z-20'>
            <h1  className='py-8 tracking-wider text-2xl 
            font-semibold text-dark text-center'>
              Taste the Healthy Difference
            </h1>
            {/*-----text section*/}
            <div className='space-y-10'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                <div>
                  <p>
                    We know that <span className='text-primary'>time</span> is the greatest value 
                    in the modern world. Our healthy meal plan delivery service
                    in Alimosho is the for those who want to eat healthy good food, whislt saving time.
                  </p>
                </div>
                 <div></div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
               <div></div>
                <div>
                  <p>
                    We know that <span className='text-primary'>time</span> is the greatest value 
                    in the modern world. Our healthy meal plan delivery service
                    in Alimosho is the for those who want to eat healthy good food, whislt saving time.
                  </p>
                </div>          
              </div>
            </div>

            {/*-----button section*/}

            <div data-aos='fade-up' data-aos-delay='500' data-aos-offset='0' className='flex justify-center mt-10 sm:mt-14'>
                <PrimaryButton/>
            </div>
        </div >

         {/*-----bg fruits png*/}
         <div data-aos='fade-right' className='absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
            <img src={Leaf} alt='' className='max-w-[160px]'/>
         </div>

         <div data-aos='fade-right' className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
            <img src={Tomato} alt='' className='max-w-[280px]'/>
         </div>

         <div data-aos='fade-left' className='absolute top-10 right-16 sm:right-20 opacity-50 sm:opacity-100'>
            <img src={Lemon} alt='' className='max-w-[200px]'/>
         </div>

         <div data-aos='fade-left' className='absolute hidden sm:block bottom-0 right-0'>
            <img src={Apple} alt='' className='max-w-[200px]'/>
         </div>

         <div data-aos='fade' className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
            <img src={Kiwi} alt='' className='max-w-[180px]'/>
         </div>
      </div>
    </>
  )
}

export default Banner