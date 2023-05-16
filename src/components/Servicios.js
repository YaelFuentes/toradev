import React from 'react'
import AnimatedText from './AnimatedText'
import Image from 'next/image'
import serviceImage from '../../public/images/developments.png'
import appMovil from '../../public/images/appMovilBW.png'
import blockchain from '../../public/images/blockchainBW.png'
import developments from '../../public/images/DesarrolloWebBW.png'
import diseñoUI from '../../public/images/diseñoUI.png'
import Link from 'next/link'
import CuadroInfo from './CuadroInfo'
import AnimatedTextCharacter from './TextAnimated/AnimatedTextScroll'
import { Player, Controls } from '@lottiefiles/react-lottie-player'


const Servicios = () => {
  return (
    <>
      <div className='mt-64 justify-between items-center w-full'>
        <AnimatedText
          text='Servicios'
          className='text-6xl p-2.5 xl:text-5xl lg:text-center lg:text-7xl md:text-5xl sm:text-3xl'
        />
        <p className='justify-between items-center text-center'>Soluciones de sistemas web o Apps a medida para impulsar su negocio o empresa</p>
        <div className='flex items-center text-dark w-full  dark:text-light justify-between lg:flex-col'>
          <div className='w-1/2 md:w-full'>
            {/* <Image
              src={serviceImage}
              alt='Servicios'
              priority
              className='w-full h-auto lg:hidden md:inline-block md:w-full'
              sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vm, 50vw'/> */}
              <Player
                autoplay
                loop
                priority
                sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vm, 50vw'
                src="https://assets4.lottiefiles.com/packages/lf20_6FtEufcw31.json"
                className='w-120||  |||||||||||||||||||||||||  h-auto lg:hidden md:inline-block md:w-full'
              />
          </div>
          <div className='w-1/2 flex'>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-1/2 md:my-4 sm:my-6'>
              <Image src={appMovil} alt='aplicaciones moviles' className='w-32 h-21 sm:w-1/2' />
              <AnimatedText text='Aplicaciones moviles' className='!text-2xl xl:!text-2xl lg:!text-center lg:!text=1xl md:!text-1xl sm:!text-1xl' />
              <span className=''>Ver más</span>
              <Image src={blockchain} alt='blockchain' className='w-32 h-21 mt-12 dark:bg-none sm:w-1/2' />
              <AnimatedText text='Blockchain' className='!text-2xl xl:!text-2xl lg:!text-center lg:!text=1xl md:!text-1xl sm:!text-1xl' />
              <span>Ver más</span>
            </div>
            <div className='w-1/2 flex mt-5 flex-col items-center self-center lg:w-1/2 sm:my-6'>
              <Image src={developments} alt='desarrollo' className='w-32 h-21 dark:bg-none sm:w-1/2' />
              <AnimatedText text='Sistemas web' className='!text-2xl xl:!text-2xl lg:!text-center lg:!text=1xl md:!text-1xl sm:!text-1xl' />
              <span>Ver más</span>
              <Image src={diseñoUI} alt='diseños web' className='w-32 h-21 mt-12 dark:bg-none sm:w-1/2' />
              <AnimatedText text='Diseños y maquetacion' className='!text-2xl xl:!text-2xl lg:!text-center lg:!text=1xl md:!text-1xl sm:!text-1xl' />
              <span>Ver más</span>
            </div>
          </div>
        </div>
        <div className='grid w-full grid-cols-6 text-center'>
          <Link href='/dummy.pdf' target={'_blank'}
            className='items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'>
            Resume
          </Link>
        </div>
        <div className='container h-screen mx-auto flex flex-col items-center justify-between'>
          <AnimatedText text='Mas informacion'/>
          <AnimatedTextCharacter text='Nuestros servicios'/>
        </div>
        <div className='grid grid-cols-12 gap-24 gap-y-32'>
          
          <div className='col-span-6'>
            <CuadroInfo
              title='Desarrollo de Sistemas Web'
              summary='Lorem ipsum non et al'
              link=''
              type='' />
          </div>
          <div className='col-span-6'>
            <CuadroInfo
              title='Desarrollo de Sistemas Web'
              summary='Lorem ipsum non et al'
              link=''
              type='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicios;