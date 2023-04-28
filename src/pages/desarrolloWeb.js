/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/hooks/layout';
import profilePic from '../../public/images/programing.png';
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>ToraDev | Desarrollo web</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Desarrollo de Apps para Tu Negocio!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 dark:text-light'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 dark:text-light'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Desarrollo Digital Personalizado</h2>
              <p className='font-medium'>
                ¡Descubre cómo podemos ayudarte a tener una presencia en línea única! En nuestra empresa, contamos con un equipo de programadores
                altamente calificados que se especializan en el desarrollo de aplicaciones y páginas web a medida
                para adaptarse a las necesidades específicas de tu negocio o empresa
              </p>
              <p className='my-4 font-medium'>
                Con más de 3 años de experiencia en el sector de la tecnología, estamos en constante movimiento,
                buscando las últimas tendencias y tecnologías para asegurarnos de ofrecer soluciones innovadoras y de vanguardia.
              </p>
              <p className='font-medium'>
                Nos apasiona crear experiencias digitales personalizadas y eficientes para nuestros clientes, utilizando las herramientas y tecnologías más avanzadas del mercado.
                Tu satisfacción es nuestra prioridad, y trabajaremos estrechamente contigo para asegurarnos de que tu presencia en línea sea exitosa y se adapte a tus objetivos comerciales.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light p-8 dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              {/* <Image src={profilePic} alt="CodeBucks" className="w-full h-auto rounded-2xl"
                priority
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'/> */}
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_vxumuqkl.json"
                sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
                className='w-full h-auto rounded-2xl'
              >
                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
              </Player>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>Clientes satisfechos</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>Proyectos completados</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light'>Años de experiencia</h2>
              </div>
              {/* <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Profesionales</h2>
              </div> */}
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main >
    </>
  )
}

export default about;