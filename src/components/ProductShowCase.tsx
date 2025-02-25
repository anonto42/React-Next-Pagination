"use client"
import React, { useRef } from 'react';
import { motion , useScroll , useTransform } from 'framer-motion';
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubemage from "@/assets/tube.png";
import Image from 'next/image';

const ProductShowCase = () => {
    const productRef = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: productRef,
            offset:["start end" , "end start"]
        }
    )
    const translateY = useTransform( scrollYProgress , [0,1],[150,-150])
  return (
    <section 
        ref={productRef}
        className='bg-gradient-to-b from-[#ffff] to-[#d2dcff] py-24 px-5 xl:px-0 overflow-x-clip'>
        <div className='container mx-auto'>
            <div className='max-w-[540px] mx-auto'>
                <div className='flex justify-center'>
                    <div className='tag'>Boost your productivity</div>
                </div>
                <h2 className='section-title'>A more effective way to track progress</h2>
                <p className='mt-5 section-discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum dolorem ipsam alias perspiciatis obcaecati exercitationem tempore perferendis.!</p>
            </div>
            <div className='relative'>
                <Image 
                    src={productImage} 
                    alt='Product image' 
                    className='mt-10' 
                    loading='lazy'
                />
                <motion.img 
                    src={pyramidImage.src} 
                    alt='Pyramid image' 
                    height={262}
                    width={262}
                    className='absolute -right-36 -top-32 hidden md:block' 
                    loading='lazy'
                    style={
                        {
                            translateY,
                        }
                    }
                />
                <motion.img 
                    src={tubemage.src} 
                    alt='Product image' 
                    height={248}
                    width={248}
                    className='absolute bottom-24 -left-36 hidden md:block' 
                    loading='lazy'
                    style={
                        {
                            translateY,
                        }
                    }
                />
            </div>
        </div>
    </section>
  )
}

export default ProductShowCase