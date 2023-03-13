import Image from 'next/image'
import { imagePaths } from './constants/constants'

export const Projects = ({ name, description, image, Link }) => {
  return (
    <div className='' id='projects'>

      <div className=' relative
            flex flex-col space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-4xl mx-auto border
             border-white bg-white'
      >

        <div className='w-full bg-white grid place-items-center h
                peer-hover:blur-sm group hover:blur-sm transition-all duration-300'
        >

          <a
            href='https://tic-tac-toe-ale784.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >

            <Image
              src={image}
              alt={name}
              key={image}
              width={1000}
              height={400}
            />

          </a>
        </div>

        <div className='flex justify-between'>

          <div>
            <h2 className='text-black'>{name}</h2>
            <p className='md:text-lg text-gray-500 text-base mt-2'><span>Stack: </span>{description}</p>
          </div>

          <div className='flex items-center'>
            code 🡺
            <a href={Link} target='blank'>
              <Image
                src={imagePaths.github}
                alt='github'
                width={40}
                height={40}
              />
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}
