import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const CuadroInfo = ({ type, title, summary, img, link }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 relative'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 dark:text-light'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark sm:text-sm dark:text-light'>{summary}</p>
        <div>

        </div>
      </div>
    </article>
  )
}

export default CuadroInfo;