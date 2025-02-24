import React from 'react';
import CheckIcon from "@/assets/check.svg";
import Image from 'next/image';

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className='py-24 px-5 xl:px-0'>
      <div className='container mx-auto'>
        <div className='max-w-[540px] mx-auto'>
          <h2 className='section-title'>Pricing</h2>
          <p className='section-discription mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facere!</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {
            pricingTiers.map(({ title , monthlyPrice , buttonText , popular , inverse , features },index)=>(
              <div key={index} className={`p-10 rounded-3xl w-full max-w-xs shadow-[0_7px_14px_#eaeaea] ${ inverse === true? "border-black bg-black text-white":"border border-[#f1f1f1] bg-white" }`}>
                <div className='flex justify-between'>
                  <h3 className={`text-lg font-bold ${inverse === true?"text-white/60":"text-black/50"}`}>{title}</h3>
                  {
                    popular === true && (
                      <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                        <span className='bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text font-medium'>Populer</span>
                      </div>
                    )
                  }
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                  <span className='tracking-tight font-bold text-black/50'>/month</span>
                </div>
                <button className={`btn btn-primary w-full mt-[30px] ${inverse === true?"text-black bg-white":""}`}>{buttonText}</button>
                <ul className='flex-col flex gap-5 mt-8'>
                  {
                    features.map((item,index)=>(
                      <li key={index} className='text-sm flex items-center gap-4'>
                        <Image src={CheckIcon} alt="Check Icon" className="h-6 w-6" />
                        <span>{item}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Pricing