import React, { useState } from 'react';
import { LinkedIn, Instagram, GitHub, Menu } from '@mui/icons-material';

export default function Header() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='font-rubik text-gray-800'>
      <div className='shadow-md max-w-full'>
        <div className='flex flex-row justify-between container mx-auto py-5 items-center px-4'>
          <a href='https://myportfolio-vinicius.vercel.app/' className='text-3xl text-customBlue font-bold'>Vinicius</a>

          <nav className='hidden lg:flex flex-row lg:w-1/2 justify-between'>
            <ul className='flex flex-row gap-10  text-lg'>
              <li><a className='hover:text-customBlue' href="#about">Sobre</a></li>
              <li><a className='hover:text-customBlue' href="#skills">Competências</a></li>
              <li><a className='hover:text-customBlue' href="#contact">Contato</a></li>
            </ul>
            <div className='flex flex-row gap-2'>
              <a target='_blank' className="hover:text-customBlue" href="https://www.linkedin.com/in/vinicius-falcioni"><LinkedIn /></a>
              <a target='_blank' className="hover:text-customBlue" href="https://github.com/ViniciusFalcioni"><GitHub /></a>
              <a target='_blank' className="hover:text-customBlue" href="https://www.instagram.com/vinicius_falcioni/"><Instagram /></a>
            </div>
          </nav>

          <div className=' lg:hidden'>
            <button onClick={handleButtonClick}><Menu /></button>
          </div>

        </div>
      </div>

      <div className={`menu ${isMenuOpen ? 'transition-opacity duration-500 opacity-100 relative' : 'absolute left-[-100px] transition-opacity duration-300 opacity-0'} lg:hidden`}>
        <nav className='flex flex-col justify-center items-center text-center py-5 shadow-md'>
          <ul className='flex flex-col text-lg gap-2'>
            <a className='scroll-smooth' href="#about">Sobre</a>
            <a className='scroll-smooth' href="#skills">Competências</a>
            <a className='scroll-smooth' href="#contact">Contato</a>
          </ul>
          <div className='flex flex-row gap-2 mt-2'>
            <a target='_blank' href="https://www.linkedin.com/in/vinicius-falcioni"><LinkedIn /></a>
            <a target='_blank' href="https://github.com/ViniciusFalcioni"><GitHub /></a>
            <a target='_blank' href="https://www.instagram.com/vinicius_falcioni/"><Instagram /></a>
          </div>
        </nav>
      </div>
    </div>
  )
}
