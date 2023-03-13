import Image from "next/image"

export const Contact = ({social, image}) =>{
    return(
        <div className="flex rounded-lg dark:bg-zinc-800 p-2 text-2xl
         ring-zinc-500 transition-all duration-150 hover:ring-2 cursor-pointer">
            <Image 
                src={image}
                alt={social}
                width={20}
                height={20}
            />
        </div>
    )
}