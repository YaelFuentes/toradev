import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import NavBar from '@/components/NavBar'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  )
}
