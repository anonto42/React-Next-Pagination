import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import Logo from "@/assets/logosaas.png";


const Header = () => {
  return (
    <header className='sticky top-0'>
      <div className='flex justify-center text-sm items-center py-3 text-white bg-[#000000] gap-3'>
        <p className='text-white/60 hidden md:block'>
          Streamline your workflow and boost your productivity
        </p>
        <div className='inline-flex items-center gap-2'>
          <p>Get started for free</p>
          <FaLongArrowAltRight className='mt-[1px]' />
        </div>
      </div>
      <div className='py-5 px-5 md:px-0'>
        <div className='text-4xl container mx-auto'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='Sas logo' height={40} width={40} loading='lazy' />
            <CiMenuFries className='md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center text-lg'>
              <Link href={"/about"}>
                <h4>About</h4>
              </Link>
              <Link href={"/features"}>
                <h4>Features</h4>
              </Link>
              <Link href={"/castomers"}>
                <h4>Customers</h4>
              </Link>
              <Link href={"/updateds"}>
                <h4>Updateds</h4>
              </Link>
              <Link href={"/help"}>
                <h4>Help</h4>
              </Link>
              <button className='bg-black text-white px-4 py-2 font-medium rounded-lg inline-flex align-items justify-center tracking-tight'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header