import React from 'react';
import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import celestialLogo from "@/assets/logo-celestial.png"
import echoLogo from "@/assets/logo-echo.png"
import quantumLogo from "@/assets/logo-quantum.png"
import pulseLogo from "@/assets/logo-pulse.png"
import Image from 'next/image';

const LogoTicker = () => {
  return (
    <section className='py-8 md:py-12 bg-white'>
        <div className='container mx-auto'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <div className='flex gap-14 flex-none'>
                    <Image className='logo-ticker-image' src={acmeLogo} alt='acme logo'/>
                    <Image className='logo-ticker-image' src={apexLogo} alt='apex logo'/>
                    <Image className='logo-ticker-image' src={celestialLogo} alt='celestial logo'/>
                    <Image className='logo-ticker-image' src={echoLogo} alt='echo logo'/>
                    <Image className='logo-ticker-image' src={quantumLogo} alt='quantum logo'/>
                    <Image className='logo-ticker-image' src={pulseLogo} alt='pulse logo'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoTicker