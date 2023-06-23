import React from 'react'
import Contacttiles from '../component/Contactcard'
import { SiGmail } from 'react-icons/si';
import {BsFillChatDotsFill} from 'react-icons/bs'
import {FaWpforms} from 'react-icons/fa'
import Submitform from '../component/Submitform';
const page = () => {
  return (
    <div className='text-white text-center font-bold text-3xl'>
      Contact page
      <div className='flex justify-center items-center gap-4 mt-4 lg:flex-row flex-col'>
      <Contacttiles logo={<SiGmail />} logonm="Gmail" cbtn="openmail->"></Contacttiles>
      <Contacttiles logo={<BsFillChatDotsFill/>} logonm="Live chat" cbtn="chat->"></Contacttiles>
      <Contacttiles logo={<FaWpforms/>} logonm="community Forum" cbtn="join->"></Contacttiles>
      </div>
      <Submitform></Submitform>

    </div>
  )
}

export default page
