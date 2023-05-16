import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { ParallaxProvider } from 'react-scroll-parallax'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {

  const router = useRouter();
  return (
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <AnimatePresence mode='wait'>
        <ParallaxProvider>
          <Component key={router.asPath} {...pageProps} />
        </ParallaxProvider>
      </AnimatePresence>
      <Footer />
    </main>
  )
}
