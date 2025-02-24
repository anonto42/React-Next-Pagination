import React from 'react';
import ArroIcon from "@/assets/arrow-right.svg";
import Image from 'next/image';
import cogImage from "@/assets/cog.png";
import cylenterImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";


const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
        <div className='container mx-auto px-5 xl:px-0'>
            <div className='md:flex items-center'>
                <div className='md:w-[478px]'>
                    <div className='tag'>Version 2.0 here</div>
                    <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>Pathway to productivity</h1>
                    <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis magni, culpa deserunt adipisci dignissimos qui repudiandae accusamus delectus dolor sit natus quos explicabo modi nesciunt nihil,
                    </p>
                    <div className='flex gap-1 items-center mt-[30px]'>
                        <button className='btn btn-primary'>Get for free</button>
                        <button className='btn btn-text gap-1'>
                            <span>
                                Learn more
                            </span>
                            <Image 
                                src={ArroIcon} 
                                alt='Arro' 
                                width={20} 
                                height={20} 
                                className='h-5 w-5' 
                            />
                        </button>
                    </div>
                </div>
                <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
                    <Image 
                        src={cogImage} 
                        alt='Cog' 
                        className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
                    />
                    <Image 
                        src={cylenterImage} 
                        alt='image' 
                        width={220} 
                        height={220} 
                        className='hidden md:block -top-8 -left-32 md:absolute' 
                    />
                    <Image 
                        src={noodleImage} 
                        alt='image' 
                        width={220} 
                        height={220} 
                        className='hidden md:block top-[524] left-[448px] absolute rotate-[30deg]' 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero