import React from 'react'
import { ArrowDropDown } from '@mui/icons-material';
import Vinicius from '../../assets/Vinicius.jpg';
import '../../Animates.css';

export default function Presentation() {
    return (
        <div className='container mx-auto font-rubik px-4 py-12 lg:py-20 overflow-hidden'>
            <div className='grid grid-cols-1 justify-center items-center place-items-center gap-20 lg:gap-8 lg:grid-cols-2'>
                <div className='w-full flex'>
                    <div>
                        <h1 className='text-4xl font-bold text-gray-800 leading-tight'>Olá, <span className='text-customBlue'>eu sou Vinicius.</span></h1>
                        <p className='text-4xl font-bold text-gray-800 leading-tight'>Seja bem-vindo ao meu portfólio!</p>
                        <p className='mt-8 mb-8'>Sou desenvolvedor web tenho 2 anos de experiência na área.<br></br>Estou entusiasmado em compartilhar um pouco sobre minha jornada e habilidades com vocês.</p>
                        <a href='#about' className='bg-customBlue text-white py-3 px-6 shadow-none rounded-sm hover:bg-customBlueClear'>Sobre mim <ArrowDropDown /></a>
                    </div>
                </div>
                <div className='relative inline-block'>
                    <img className='a w-60 md:w-[370px] shadow relative z-10' src={Vinicius} alt="Esse sou eu Vinicius" />
                    <div className='absolute top-[6em] left-[6em] right-[-2em] bottom-[-2em] bg-customBlue z-0 animate-spin-fast'></div>
                    <div className='absolute top-[-2em] left-[-2em] right-[6em] bottom-[6em] bg-customBlue z-0 animate-spin-fast-two'></div>
                </div>
            </div>
        </div>

    )
}
