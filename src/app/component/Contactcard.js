const Contacttiles = (props) => {
  return (
    <>
      <div className="flex justify-center items-center ">
            <div className="border-2 border-[rgb(9,158,158)] h-36 w-56 flex justify-center items-center flex-col hover:h-40 hover:w-60 duration-300 cursor-pointer">
                <div className="text-white text-1xl">
                    {props.logo}
                </div>
                <div className="text-sm mt-5">
                    {props.logonm}
                </div>
                <div className="text-sm text-gray-600 mt-5">
                    {props.cbtn}
                </div>
                
            </div>


      </div>
    </>
  )
}

export default Contacttiles
