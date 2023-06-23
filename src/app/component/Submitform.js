import React from 'react'

const Submitform = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-10'>
            <div className='h-[23rem] w-[15rem] border-2 border-[rgb(9,158,158)] text-[1rem]'>
                <div>
                    name
                <input type="text" className='text-black' />
                </div>
                <div>
                    G-mail
                <input type="text" className='text-black'/>
                </div>
                <div>
                    phone
                <input type="text" className='text-black'/>
                </div>
                <div>
                    massage
                <input type="massage" className='text-black'/>
                </div>

                <button type='submit' className=' border-2 border-[rgb(9,158,158)] text-white mt-5 rounded-lg'>
                    submit
                </button>
              
            </div>
      </div>
    </>
  )
}

export default Submitform
