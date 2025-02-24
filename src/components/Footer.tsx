import React from 'react';
import Logo from "@/assets/logosaas.png"
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
        <div className='container mx-auto'>
            <div className='inline-flex relative before:content-[""] before:w-full before:h-full before:bg-[linear-gradient(to_right,#fb92cf,#ffdd9b,#c2f0b1,#2fdbfe)] before:blur before:absolute'>
                <Image
                    src={Logo}
                    height={40}
                    alt='Saas logo'
                    className='relative'
                />
            </div>
            <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                <Link href={''}>About</Link>
                <Link href={''}>Features</Link>
                <Link href={''}>Customers</Link>
                <Link href={''}>Pricing</Link>
                <Link href={''}>Help</Link>
                <Link href={''}>Careers</Link>
            </nav>
            <div className='flex justify-center gap-6 mt-6'>
                <FaSquareXTwitter className='w-[25px] h-[25px]' />
                <FaPinterest className='w-[25px] h-[25px]' />
                <FaLinkedin className='w-[25px] h-[25px]' />
                <IoLogoYoutube className='w-[25px] h-[25px]' />
                <FaSquareInstagram className='w-[25px] h-[25px]' />
            </div>
            <p className='mt-6'>&copy; 2024 Your Company, Itc. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer