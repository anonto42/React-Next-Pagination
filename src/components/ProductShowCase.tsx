import React from 'react';
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubemage from "@/assets/tube.png";
import Image from 'next/image';

const ProductShowCase = () => {
  return (
    <section className='bg-gradient-to-b from-[#ffff] to-[#d2dcff] py-24 px-5 xl:px-0 overflow-x-clip'>
        <div className='container mx-auto'>
            <div className='max-w-[540px] mx-auto'>
                <div className='flex justify-center'>
                    <div className='tag'>Boost your productivity</div>
                </div>
                <h2 className='section-title'>A more effective way to track progress</h2>
                <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum dolorem ipsam alias perspiciatis obcaecati exercitationem tempore perferendis.!</p>
            </div>
            <div className='relative'>
                <Image 
                    src={productImage} 
                    alt='Product image' 
                    className='mt-10' 
                    loading='lazy'
                />
                <Image 
                    src={pyramidImage} 
                    alt='Pyramid image' 
                    height={262}
                    width={262}
                    className='absolute -right-36 -top-32 hidden md:block' 
                    loading='lazy'
                />
                <Image 
                    src={tubemage} 
                    alt='Product image' 
                    height={248}
                    width={248}
                    className='absolute bottom-24 -left-36 hidden md:block' 
                    loading='lazy'
                />
            </div>
        </div>
    </section>
  )
}

export default ProductShowCase