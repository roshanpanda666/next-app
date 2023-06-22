import Link from 'next/link'
import React from 'react'

const Not_found = () => {
  return (
    <>
      <div className='flex justify-center items-center h-[80vh] flex-col'>
        <div className='lg:text-[7rem] text-[3rem]'>
            Page Not found
        </div>
        <Link href='/'>
            <button className='bg-[rgb(9,158,158)] rounded-md h-16 text-3xl mt-10'>
                go to home page
            </button>
        </Link>
        
      </div>
    </>
  )
}

export default Not_found
