import React from 'react'
import { ExpandCircleDownOutlined, Mail, WhatsApp, LinkedIn, Instagram, GitHub } from '@mui/icons-material';

export default function Contact() {
    return (
        <div id='contact' className='bg-customBlue text-white'>
            <div className='container mx-auto font-rubik px-4 pt-20 py-10 overflow-hidden'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center gap-2'>
                        <h2 className='text-4xl font-bold text-white leading-tight'>Contato</h2>
                        <ExpandCircleDownOutlined className='text-white' />
                    </div>

                    <div className='flex flex-col items-center justify-center gap-8 mt-8 text-white'>


                        <form className='flex flex-col gap-6 w-full' action="">
                            <div class="flex flex-col">
                                <label for="input" class="text-white mb-2">Nome:</label>
                                <input type="text" id="input" class="w-full lg:w-96 border border-gray-300 rounded p-2 text-gray-500" placeholder="Digite aqui" />
                            </div>
                            <div class="flex flex-col">
                                <label for="input" class="text-white mb-2">E-mail:</label>
                                <input type="email" id="input" class="w-full lg:w-96 border border-gray-300 rounded p-2 text-gray-500" placeholder="Digite aqui" />
                            </div>
                            <div class="flex flex-col">
                                <label for="input" class="text-white mb-2">Mensagem:</label>
                                <textarea type="text" id="input" class="w-full lg:w-96 border border-gray-300 rounded p-2 text-gray-500" placeholder="Digite aqui" />
                            </div>
                            <button className='bg-customBlueClear p-2 hover:scale-105' type='submit'>Enviar</button>
                        </form>

                        <div className='flex flex-col items-center gap-1 p-8'>
                            <a href='https://api.whatsapp.com/send?phone=5546991369642'><WhatsApp className='mr-2' />(46) 9 9136-9642 </a>
                            <a href='mailto:viniciuskrilow@gmail.com'><Mail className='mr-2' />viniciuskrilow@gmail.com </a>
                            <div className='flex flex-row gap-2'>
                                <a target='_blank' className="hover:text-gray-300" href="https://www.linkedin.com/in/vinicius-falcioni"><LinkedIn /></a>
                                <a target='_blank' className="hover:text-gray-300" href="https://github.com/ViniciusFalcioni"><GitHub /></a>
                                <a target='_blank' className="hover:text-gray-300" href="https://www.instagram.com/vinicius_falcioni/"><Instagram /></a>
                            </div>
                        </div>

                        <p className='italic'>Developed by Vinicius Falcioni</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
