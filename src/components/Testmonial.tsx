"use client"
import React from 'react';
import { motion } from 'framer-motion';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from 'next/image';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColum = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);

const TestmonialsColum = ( props : { duration?:number ;className?: string ; testmonial : typeof testimonials }) => (
  <div className={`${props.className}`}>
    <motion.div
      animate={
        {
          translateY:"-20%"
        }
      }
      transition={
        {
          repeat: Infinity,
          ease:"linear",
          duration: props.duration || 10,
          repeatType:"loop"
        }
      }
      className='gap-6 flex flex-col pb-6' >
      {[...new Array(2)].fill(0).map((_,index)=>(
        <React.Fragment key={index} >
          {
            props.testmonial.map(({ text, imageSrc, name, username },index)=>(
              <div key={index} className='card'>
                <div>{text}</div>
                <div className='flex items-center gap-2 mt-5'>
                  <Image 
                    src={imageSrc}
                    alt='name'
                    height={40}
                    width={40}
                    className='h-10 w-10 rounded-full'
                  />
                  <div className='flex flex-col'>
                    <div className='font-medium tracking-tight leading-5'>{name}</div>
                    <div className='leading-5 tracking-tight'>{username}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

const Testmonial = () => {
  return (
    <section>
      <div className='bg-white/60 rounded-md'>
        <div className='flex justify-center'>
          <div className='tag mt-6 text-xl'>Testmonial</div>
        </div>
        <h2 className='section-title mt-5'>What our users say</h2>
        <p className='section-discription mt-5 max-w-2xl mx-auto'>From intuitive design to powerful features, out app has become an essentail tool for users around the world.</p>
        <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[700px] overflow-hidden'>
          <TestmonialsColum testmonial={firstColum} duration={13}/>
          <TestmonialsColum testmonial={secondColumn} className='hidden md:block' duration={15}/>
          <TestmonialsColum testmonial={thirdColumn} className='hidden lg:block' duration={12}/>
        </div>
      </div>
    </section>
  )
}

export default Testmonial