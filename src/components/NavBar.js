import { useState } from 'react'
import Image from 'next/image'

// NavLinks
import { imagePaths, NavLinks } from './constants/constants'

export const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const {
    menu, close
  } = imagePaths
  return (
    <>
      <nav className='w-full flex py-5 px-5 justify-center' id='home'>

        {/** desktop view */}

        <div className='w-[896px] sm:flex hidden  items-center
                 justify-between'
        >

          <div>💻</div>

          <ul className='list-none flex gap-6 '>

            {NavLinks.map((nav, index) => (

              <li
                key={nav.id}
                className={`font-sans font-normal cursor-pointer
                            text-[16px] text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>

            ))}

          </ul>

        </div>

        {/** mobile view */}

        <div className='sm:hidden flex flex-1
                justify-between items-center'
        >

          <div className='flex gap-5'>

            <Image
              src={toggle ? close : menu}
              alt='menu'
              className=''
              onClick={() => setToggle((prev) => !prev)}
              width={36}
              height={50}
            />
          </div>

          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6
                    bg-[#111d40] absolute top-20 left-0 mx-4
                    my-2 min-w-[140px] rounded-x1`}
          >

            <ul className='list-none items-center flex flex-col
                                        flex-1 gap-6'
            >

              {NavLinks.map((nav, index) => (

                <li
                  key={nav.id}
                  className={`font-sans font-normal cursor-pointer
                            text-[16px] text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>

              ))}

            </ul>

          </div>

        </div>

        {/** bottom nav */}
        {/* <div
                className='fixed bottom-2  w-full py-5 px-5 overflow-hidden z-50
                '>

                        <div className='sm:hidden flex flex-1  backdrop-blur-2x1
                         items-center justify-center'>

                            <ul className='list-none items-center flex gap-6 border-2 border-white rounded-full
                            backdrop-blur-2x1 py-4 px-5'>

                                { NavLinks.map((nav, index) => (

                                    <li
                                    key={nav.id}
                                    className={`font-sans font-normal cursor-pointer
                                    text-[16px] text-white`}
                                    >
                                        <a href={`#${nav.id}`}>
                                        {nav.title}
                                        </a>
                                    </li>

                            ))}

                            </ul>
                        </div>

                    </div> */}
      </nav>
    </>
  )
}
