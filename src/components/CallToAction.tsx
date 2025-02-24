import React from 'react';
import Arro from "@/assets/arrow-right.svg"
import Image from 'next/image';
import StarImag from "@/assets/star.png";
import springImage from "@/assets/spring.png";

const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-white/60 to-[#d2ecff] py-24 px-5 xl:px-0 overflow-clip'>
        <div className='container mx-auto'>
            <div className='relative max-w-xl mx-auto'>
                <h2 className='section-title'>Sign up for free today</h2>
                <p className='section-discription mt-5'>Celebrate the joy of accomplishment with an app designd to track your progress and motivate your efforts.</p>
                <Image 
                    width={380}
                    alt='star'
                    src={StarImag}
                    className='absolute -left-[350px] -top-[20px]'
                />
                <Image 
                    width={380}
                    alt='star'
                    src={springImage}
                    className='absolute -right-[331px] -top-[19px]'
                />
            </div>
            <div className='flex gap-2 mt-10 justify-center'>
                <button className='btn btn-primary'>Get for free</button>
                <button className='btn btn-text gap-1'>
                    <span>Learn more</span>
                    <Image alt="arro" loading="lazy" src={Arro} className="h-5 w-5" />
                </button>
            </div>
        </div>
    </section>
  )
}

export default CallToAction