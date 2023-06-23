import Link from "next/link"

const Moviecard = (curElem) => {
    const{id,type,title,synopsis}=curElem.jawSummary
  return (
    <>
        <div className="flex justify-center items-center">

        <Link href={`/movie/${id}`}>
            <div className="border-2 border-[rgb(9,158,158)] lg:h-80 h-80 w-80 lg:w-80 m-5 flex flex-col justify-center items-center hover:shadow-[0px_0px_40px_6px_rgb(9,158,158)] hover:h-[22rem] hover:w-[22rem] duration-500 p-4 rounded-md">
                <div>
                    <img src={curElem.jawSummary.backgroundImage.url} alt="{title}" />
                </div>
                <div className="mt-4">
                    <p>{title}</p>
                    <p className="text-gray-500 text-[0.6rem]">{synopsis}</p>
                    
                </div>
            

            
                
            </div>
        </Link>


        </div>
    </>
  )
}

export default Moviecard
