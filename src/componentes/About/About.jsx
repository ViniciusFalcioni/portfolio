import React from 'react'
import { ExpandCircleDownOutlined } from '@mui/icons-material';
import ViniciusImg from '../../assets/Vinicius-2.jpg';
import { LinkedIn, Instagram, GitHub, Menu } from '@mui/icons-material';

export default function About() {
    return (
        <div id='about' className='bg-slate-100'>
            <div className='container mx-auto font-rubik px-4 py-16 relative overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-center items-center place-items-center gap-8'>
                    <div className='col-span-1 w-full h-full flex flex-row justify-center gap-6'>

                        <div className='bg-customBlue absolute bottom-0 lg:static w-full h-auto inset-x-0 flex flex-col justify-center items-center p-8 text-center'>
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


                    </div>
                    <div className='col-span-1 lg:col-span-3 text-justify'>
                        <div className='flex flex-row items-center justify-center lg:justify-start gap-2'>
                            <h2 className='text-4xl font-bold text-gray-800 leading-tight'>Sobre mim</h2>
                            <ExpandCircleDownOutlined />
                        </div>

                        <p className='mt-4 mb-4'>Olá! Meu nome é Vinicius Krilow Falcioni, e sou um desenvolvedor web apaixonado pela área da tecnologia.Tenho 21 anos de idade, estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos</p>
                        <p className='mt-4 mb-4'>Atualmente, estou em busca de novas oportunidades profissionais. Durante minha jornada no mundo do desenvolvimento web, fiquei surpreso pela maneira como a tecnologia está em constante evolução, trazendo benefícios para diversas áreas do mercado de trabalho.</p>
                        <p className='mt-4 mb-4'>Estou comprometido em continuar aprimorando minhas habilidades e conhecimentos, tanto na faculdade como em projetos profissionais e pessoais. Acredito que a aprendizagem contínua é essencial para se manter atualizado no mundo da tecnologia em constante evolução.</p>
                        <p className='mt-4 mb-4'>Olhando para o futuro, Penso em crescer como profissional e de construir minha própria empresa no ramo da tecnologia.</p>

                        <div className='flex flex-row items-center justify-center lg:justify-start gap-2'>
                            <h2 className='text-4xl font-bold text-gray-800 leading-tight'>Experiência Profissional</h2>
                            <ExpandCircleDownOutlined />
                        </div>
                        <p className='mt-4 mb-4'><strong>Suporte Técnico - Imonov | 2020 - 2022</strong></p>
                        <p className='mt-4 mb-4'>Trabalhei em equipe no desenvolvimento de projetos web.</p>
                        <p className='mt-4 mb-4'>Atendimento ao cliente.</p>
                        <p className='mt-4 mb-4'>Auxiliei na manutenção de sites e aplicativos.</p>
                        <p className='mt-4 mb-4'><strong>Desenvolvedor Web - Fluency Academy | 2022 - 2023</strong></p>
                        <p className='mt-4 mb-4'>Desenvolvi landing pages para lançamentos.</p>
                        <p className='mt-4 mb-4'>Trabalhei em equipe para a realização de projetos.</p>
                        <p className='mt-4 mb-4'>Segui metodologias ágeis, participando de dailys e cumprindo cronogramas.</p>
                        <p className='mt-4 mb-4'><strong>Desenvolvedor Front-End - Ecowe | 2023 - 2023</strong></p>
                        <p className='mt-4 mb-4'>Participei do desenvolvimento de uma startup.</p>
                        <p className='mt-4 mb-4'>Trabalhei em equipe para alcançar os objetivos do projeto.</p>
                        <p className='mt-4 mb-4'>Segui metodologias ágeis, participando de dailys e cumprindo cronogramas.</p>
                        <p className='mt-4 mb-4'><strong>Estágio Comercial - América Latina Vidros | 2024 - 2024</strong></p>
                        <p className='mt-4 mb-4'>Realizava ligações para clientes inativos e prospectava novos clientes.</p>
                        <p className='mt-4 mb-4'>Analisava dados e elaborava gráficos para acompanhamento de desempenho.</p>
                        <p className='mt-4 mb-4'>Auxiliava no suporte e atendimento ao cliente.</p>
                    </div>

                
                    <div className="block lg:hidden pb-60"></div>
                </div>
            </div>
        </div>

    )
}
