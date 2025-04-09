import React from 'react'
import { ExpandCircleDownOutlined } from '@mui/icons-material';
import ReactIcon from '../../assets/Icons/React.png'
import HtmlIcon from '../../assets/Icons/Html.png'
import CssIcon from '../../assets/Icons/Css.png'
import JSIcon from '../../assets/Icons/JS.png'
import WebflowIcon from '../../assets/Icons/Webflow.png'
import GitIcon from '../../assets/Icons/git.png'
import PhpIcon from '../../assets/Icons/php.webp'
import NodeIcon from '../../assets/Icons/node.png'
import JavaIcon from '../../assets/Icons/java.png'
import PythonIcon from '../../assets/Icons/python.webp'


export default function Skills() {
    return (
        <div id='skills' className='container mx-auto font-rubik px-4 py-16 overflow-hidden'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row items-center gap-2'>
                    <h2 className='text-4xl font-bold text-gray-800 leading-tight'>Competências</h2>
                    <ExpandCircleDownOutlined />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 text-center">
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={JSIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>JAVA SCRIPT</h3>
                        <b>Experiência:</b>
                        <p> Tenho experiência em Java Script. Utilizei em projetos pessoais, acadêmicos e Profissionais.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={ReactIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>REACT</h3>
                        <b>Experiência:</b>
                        <p>Tenho experiência em React. Finalizei a formação da alura e utilizei em projetos profissionais e pessoais.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={HtmlIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>HTML</h3>
                        <b>Experiência:</b>
                        <p> Tenho experiência adquirida em duas empresas onde trabalhei. Utilizei HTML para criar e aprimorar websites.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={CssIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>CSS</h3>
                        <b>Experiência:</b>
                        <p> Tenho experiência adquirida em duas empresas onde trabalhei. Utilizei CSS para criar e estilizar websites.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={WebflowIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>WEBFLOW</h3>
                        <b>Experiência:</b>
                        <p> Tenho experiência na plataforma. Utilizei Webflow para desenvolvimento de projetos e websites profissionais.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={GitIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>GIT</h3>
                        <b>Experiência:</b>
                        <p>Experiência prática em projetos profissionais com versionamento e colaboração em equipe.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={PhpIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>PHP</h3>
                        <b>Experiência:</b>
                        <p>Experiência com PHP aplicado ao desenvolvimento web e integração com APIs</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={NodeIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>NODE</h3>
                        <b>Experiência:</b>
                        <p>Experiência com Node.js em desenvolvimento de APIs e integração com aplicações front-end.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={JavaIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>JAVA</h3>
                        <b>Experiência:</b>
                        <p>Experiência em Java adquirido em projetos da faculdade e exercícios práticos.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1 border border-solid border-customBlue rounded-lg p-8'>
                        <img className='w-20' src={PythonIcon} alt="Icone do React" />
                        <h3 className='text-lg font-medium'>PYTHON</h3>
                        <b>Experiência:</b>
                        <p>Experiência com Python em projetos pessoais, focado em automações de processos e scripts utilitários.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
