import { useState } from 'react'

/** LINK redirection inside our SPA */
import Link from 'next/link'

//Imagenes
import menu from '../assets/img/menu.svg'
import close from '../assets/img/close.svg'
import github from '../assets/img/github.svg'

//NavLinks
import { NavLinks } from './constants/NavLinks'

import Image from 'next/image'


export const NavBar = () => {

    const [toggle, setToggle] = useState(false);
    
    return (
        <>
        <nav className="w-full flex py-5 px-5 justify-center">


        {/**desktop view */}
        
            <div className='w-[896px] sm:flex hidden  items-center
                 justify-between'> 

                <h1 className='text-white text-[20px]'>Ale</h1>

                <ul className='list-none flex gap-6 '>

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
                    
                    <Image
                        src={github} 
                        alt="github" 
                        className=''
                        />
            </div>






        {/**mobile view */}

            <div className='sm:hidden flex flex-1
                justify-between items-center'>

                <h1 className='text-white text-[20px]'>Ale</h1>

                <div className='flex gap-5'>
                    <Image
                        src={github} 
                        alt="github" 
                        className=''
                        />

                    <Image
                        src={toggle ? close : menu} 
                        alt="menu" 
                        className=''
                        onClick={() => setToggle((prev) => !prev)}
                        />
                </div>
                

                    
                    <div 
                    className={`${toggle ? 'flex' : 'hidden'} p-6
                    bg-gray absolute top-20 right-0 mx-4
                    my-2 min-w-[140px] rounded-x1`}>

                        <ul className='list-none items-center flex flex-col
                                        flex-1 gap-6'>


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

                </div>
                
            </nav>
        </>
    )
}