import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark 
      absolute left-0 -bottom-0.5 group-hover:w-full 
      transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Project" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' />
      </nav>
      {/* <Logo /> */}
      <nav>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>

        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {
            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
          }
        </button>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar;