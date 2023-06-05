import React from 'react'
import { ExpandCircleDownOutlined } from '@mui/icons-material';
import ViniciusImg from '../../assets/Vinicius-2.jpg';
import { LinkedIn, Instagram, GitHub, Menu } from '@mui/icons-material';

export default function About() {
    return (
        <div id='about' className='bg-slate-100'>
            <div className='container mx-auto font-rubik px-4 py-20 relative overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center place-items-center gap-8'>
                    <div className='col-span-1 w-full h-full flex flex-row justify-center gap-6'>
                        <div className='bg-customBlue absolute top-0 lg:static w-full h-auto inset-x-0 flex flex-col justify-center items-center p-8 text-center'>
                            <div className='w-36 h-36 rounded-full overflow-hidden mb-4'>
                                <img className='w-full h-full object-cover object-center' src={ViniciusImg} alt="Imagem do Vinicius" />
                            </div>
                            <p className='text-white text-xl font-medium'>Vinicius Falcioni</p>
                            <p className='text-white text-xl font-medium'>Desenvolvedor Front-end</p>
                            <p className='text-white text-xl font-medium'>Cascavel/PR</p>
                            <div className='flex flex-row gap-2'>
                                <a target='_blank' className="text-white hover:text-gray-300" href="https://www.linkedin.com/in/vinicius-falcioni"><LinkedIn /></a>
                                <a target='_blank' className="text-white hover:text-gray-300" href="https://github.com/ViniciusFalcioni"><GitHub /></a>
                                <a target='_blank' className="text-white hover:text-gray-300" href="https://www.instagram.com/vinicius_falcioni/"><Instagram /></a>
                            </div>
                        </div>
                        <div class="block lg:hidden pb-72"></div>
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-justify'>
                        <div className='flex flex-row items-center justify-center lg:justify-start gap-2'>
                            <h2 className='text-4xl font-bold text-gray-800 leading-tight'>Sobre mim</h2>
                            <ExpandCircleDownOutlined />
                        </div>

                        <p className='mt-8 mb-8'>Olá! Meu nome é Vinicius Krilow Falcioni, e sou um desenvolvedor web apaixonado pela área da tecnologia.Tenho 20 anos de idade, estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos</p>
                        <p className='mt-8 mb-8'>Atualmente, estou em busca de novas oportunidades profissionais. Durante minha jornada no mundo do desenvolvimento web, fiquei surpreso pela maneira como a tecnologia está em constante evolução, trazendo benefícios para diversas áreas do mercado de trabalho.</p>
                        {/* <p className='mt-8 mb-8'>Acredito que a tecnologia tem o poder de transformar negócios, facilitar a vida das pessoas e impulsionar a sociedade como um todo. Minha paixão por esse ramo inspira-me a buscar soluções criativas e eficientes, buscando sempre aprimorar minhas habilidades e acompanhar as tendências mais recentes.</p> */}
                        <p className='mt-8 mb-8'>Minha jornada profissional começou na cidade de Salto do Lontra, no Paraná, onde cresci e desenvolvi interesse pelo mundo da tecnologia. Atualmente, estou residindo em Cascavel, também no Paraná, Pois estou cursando a faculdade de Engenharia de Software, na qual estou no 2º período.</p>
                        <p className='mt-8 mb-8'>Com 2 anos de experiência no ramo de Desenvolvimento Web, tive a oportunidade de trabalhar em duas empresas notáveis, onde aprimorei minhas habilidades e adquiri valiosa experiência. Durante 2 anos, atuei como Suporte Técnico na empresa Imonov, que é especializada em Soluções Imobiliárias. Nessa função, fui responsável por oferecer suporte aos clientes, solucionar problemas técnicos e garantir a satisfação dos usuários. Essa experiência me proporcionou um entendimento profundo das necessidades do cliente e a importância de fornecer soluções eficientes.</p>
                        <p className='mt-8 mb-8'>Além disso, tive a oportunidade de trabalhar como Desenvolvedor Web na Fluency Academy, onde atuei por 6 meses. Nessa empresa inovadora, pude aprimorar minhas habilidades técnicas, colaborando no desenvolvimento de soluções web e contribuindo para melhorar a experiência dos usuários em uma plataforma de ensino online.</p>
                        <p className='mt-8 mb-8'>Estou comprometido em continuar aprimorando minhas habilidades e conhecimentos, tanto na faculdade como em projetos pessoais. Acredito que a aprendizagem contínua é essencial para se manter atualizado no mundo da tecnologia em constante evolução.</p>
                        <p className='mt-8 mb-8'>Olhando para o futuro, Penso em crescer como profissional e de construir minha própria empresa no ramo da tecnologia.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}
