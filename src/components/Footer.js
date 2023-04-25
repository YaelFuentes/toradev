import React from 'react';
import Layout from './hooks/layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; Todos los derechos reservados.</span>
        <div className='flex items-center'>
          Desarrollado con <span className='text-primary dark:text-primaryDark text-2x1 px-1'>&hearts;</span> por&nbsp;<Link href="/" className='underline underline-offset-2'>Tora Dev</Link>
        </div>
        {/* <Link href="/" target={"_blank"} className='underline underline-offset-2'>Say hello</Link> */}
      </Layout>
    </footer>
  )
}

export default Footer;