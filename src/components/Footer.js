import React from 'react';
import Layout from './hooks/layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; all Rights Reserved.</span>
        <div className='flex items-center'> 
          Build With &hearts; by&nbsp;<Link href="/" className='underline underline-offset-2'>CodeBucks</Link>
        </div>
        <Link href="/" target={"_blank"} className='underline underline-offset-2'>Say hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer;