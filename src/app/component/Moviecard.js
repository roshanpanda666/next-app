import Link from "next/link"

const Moviecard = (curElem) => {
    const{id,type,title,synopsis}=curElem.jawSummary
  return (
    <>
        <div className="flex justify-center items-center">

        <Link href={`/movie/${id}`}>
            <div className="border-2 border-[rgb(9,158,158)] lg:h-72 h-72 w-60 lg:w-60 m-5 flex flex-col justify-center items-center">
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
