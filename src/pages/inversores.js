import React from 'react';
import Head from 'next/head';
import Layout from '@/components/hooks/layout';
import AnimatedText from '@/components/AnimatedText';

const inversores = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Inversores Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main>
        <Layout className='pt-16'>
          <AnimatedText text="Words Can Change The World!" className='mb-16' />
        </Layout>
      </main>
    </>
  )
}

export default inversores;