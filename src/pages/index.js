import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import Layout from '@/components/hooks/layout';
import homeImage from '/public/HomeImage.png'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Player
                autoplay
                loop
                priority
                sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vm, 50vw'
                src="https://assets4.lottiefiles.com/packages/lf20_4riBJYnBWV.json"
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="La innovación como motor del crecimiento empresarial" className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text=7xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Descubre cómo la innovación tecnológica puede impulsar tu negocio hacia el éxito.
                Nuestras soluciones de vanguardia te brindan la ventaja competitiva que necesitas para superar los desafíos del mercado actual.
                ¡Potencia tu negocio con nuestra tecnología líder en el mercado y lleva tus resultados al siguiente nivel!
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/dummy.pdf' target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'>
                  Resume
                </Link>
                <Link
                  href='mailto:abcd@gmail.com'
                  className='ml-4 text-lg font-medium capitalize text-dark underline  dark:text-light md:text-base'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <AnimatedText text="Servicios" className='text-6xl p-2.5 xl:text-5xl lg:text-center lg:text-7xl md:text-5xl sm:text-3xl'/>
          <h4></h4>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
