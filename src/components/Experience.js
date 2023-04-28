import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:"spring"}}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>
          @{company}
        </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
        Experiences
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full dark:text-light'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position="Software Enginer"
            company="Google"
            time="2022-present"
            address="google dot"
            work="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T
            . persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
            sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" />
          <Details
            position="Software Enginer"
            company="Google"
            time="2022-present"
            address="google dot"
            work="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T
              . persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
              sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" />
          <Details
            position="Software Enginer"
            company="Google"
            time="2022-present"
            address="google dot"
            work="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T
              . persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,
              sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" />
          <Details
            position="Software Enginer"
            company="Google"
            time="2022-present"
            address="google dot"
            work="hola como estas esto es una prueba de trabajo para trabajar trabajnaod listo y preparado para lo que sea" />
          <Details
            position="Software Enginer"
            company="Google"
            time="2022-present"
            address="google dot"
            work="hola como estas esto es una prueba de trabajo para trabajar trabajnaod listo y preparado para lo que sea" />
        </ul>
      </div>
    </div>
  )
}

export default Experience;