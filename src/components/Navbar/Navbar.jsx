import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';


const NavLinks = [
   {
    id:1,
    name:"Home",
    link:"#"
   },
   {
    id:2,
    name:"About",
    link:"#"
   },
   {
    id:3,
    name:"Contact",
    link:"#"
   } 
]



const DropDownLinks = [
    {
     id:4,
     name:"vegetables",
     link:"#"
    },
    {
     id:5,
     name:"salad",
     link:"#"
    },
    {
     id:6,
     name:"mashmallow",
     link:"#"
    } 
 ]

const Navbar = ({ HandlePopup }) => {
    Navbar.propTypes = {
        HandlePopup: PropTypes.string.isRequired,
    }
  return (
    <>

    <div data-aos='fade' className='bg-white shadow-sm'>
        <div className='container flex justify-between'>
            <div className='font-bold text-3xl'>
                Logo
            </div>
            <div>
                <ul className='flex items-center gap-10 py-4 sm:py-3'>
                    {
                        NavLinks.map(({id, name, link}) => (
                         <li key={id}>
                            
                            <a href={link} className='hidden sm:inline-block hover:text-primary text-xl font-semibold'> 
                                {name}
                            </a>

                         </li>


                        ) 

                        )
                    }
                    <li className='hidden md:block cursor-pointer group'>
                        <a href='#' className='inline-block hover:text-primary text-xl font-semibold' >
                            <div className='flex items-center gap-[2px] py-2'>
                                dropdown
                              <span>
                                <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                              </span>
                            </div>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md'>
                            <ul>
                                {DropDownLinks.map(({id, name, link}) => (
                                    <li key={id}>
                                        <a href={link} className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'> 
                                           {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button onClick={HandlePopup} className='flex justify-center
                            items-center gap-2 bg-secondary text-xl h-[40px] text-white
                             px-2 md:px-5 py-2 sm:px-1 hover:scale-105'>
                            <FaUser/>
                            My Account
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    </div>

    </>
  )
}

export default Navbar