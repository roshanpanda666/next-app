'use client'
import React from 'react'
import Link from "next/link";
import { motion} from 'framer-motion';
const Hero = (props) => {
  return (
    <div className='flex justify-center items-center lg:flex-row flex-col-reverse'>
      <div className='flex justify-center items-center lg:w-[50%] lg:h-[90vh flex-col w-full'>
        <div className=' text-[3rem] lg:text-[3rem] text-white font-semibold mb-6 lg:w-[60%] w-full text-center lg:text-start'>
          
        {props.title}<span className='text-[rgb(9,158,158)]'>{props.lighttxt}</span><br></br> {props.aftertxt}
        </div>
        <div className='text-gray-400 font-normal text-[0.9rem] lg:w-[60%] w-full lg:text-start text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eos laudantium numquam dignissimos harum possimus ut blanditiis,veritatis autem temporibus incidunt aperiam fuga natus!
        </div>
        <div className='flex justify-center lg:justify-start w-[60%] mt-10'>
          <Link href="/movie" >
          <button className='border-[rgb(9,158,158)] border-2 bg-black text-white rounded-lg w-[6rem] h-[2rem] font-bold hover:shadow-[0px_0px_40px_6px_rgb(9,158,158)]'>EXPLORE</button>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center lg:w-[50%] lg:h-[90vh] w-full'>
        <motion.div
        initial={{
          scale:0
        }}

        whileInView={{
          scale:1
        }}
        >
            <img src={props.thegif} alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
