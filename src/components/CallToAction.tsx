"use client"
import React, { useRef } from 'react';
import Arro from "@/assets/arrow-right.svg"
import Image from 'next/image';
import StarImag from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {

    const sectionRef = useRef(null);
    const { scrollYProgress} = useScroll(
        {
            target:sectionRef,
            offset:["start end","end start"]
        }
    )
    const translateY = useTransform( scrollYProgress , [0,1] , [150,-150]);

  return (
    <section 
        ref={sectionRef}
        className='bg-gradient-to-b from-white/60 to-[#d2ecff] py-24 px-5 xl:px-0 overflow-clip'>
        <div className='container mx-auto'>
            <div className='relative max-w-xl mx-auto'>
                <h2 className='section-title'>Sign up for free today</h2>
                <p className='section-discription mt-5'>Celebrate the joy of accomplishment with an app designd to track your progress and motivate your efforts.</p>
                <motion.img 
                    width={380}
                    alt='star'
                    src={StarImag.src}
                    className='absolute -left-[350px] -top-[20px]'
                    style={
                        {
                            translateY,
                        }
                    }
                />
                <motion.img 
                    width={380}
                    alt='star'
                    src={springImage.src}
                    className='absolute -right-[331px] -top-[19px]'
                    style={
                        {
                            translateY,
                        }
                    }
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