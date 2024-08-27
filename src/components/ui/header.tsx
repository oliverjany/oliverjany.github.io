"use client";

import Link from "next/link";
import { useState } from "react"
import Image from "next/image";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <header className="z-[50] fixed top-0 w-full border-b backdrop-blur bg-white/[0.7] dark:bg-black/[0.7] border-b border-neutral-200 dark:border-white/[0.1]" style={{ transform: 'none' }}>
        <div className="container flex h-16 items-center max-w-[88rem] mx-auto">
          <div className="mr-4 hidden md:flex">
            <a className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10" href="/">
              <div className="relative h-12 w-12 md:h-12 md:w-12 bg-black border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
                <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl">
                </div>
                <div className="text-sm  text-emerald-500 relative z-20">
                  <Image alt="Logo" loading="lazy" width="38" height={600} decoding="async" data-nimg="1" src="/easy-golf_logo_white.svg" style={{ color: 'transparent' }} />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-black dark:text-white">EASY-GOLF</h1>
              </div>
            </a>
          </div>
          <a className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rn:" data-state="closed" href="/">
            <div className="relative h-8 w-8 md:h-6 md:w-6 bg-black border border-slate-800  text-white   flex items-center justify-center rounded-md text-sm antialiased">
              <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl">
              </div>
              <div className="text-sm  text-emerald-500 relative z-20">
                <Image alt="Logo" loading="lazy" width="30" height={600} decoding="async" data-nimg="1" src="/easy-golf_logo_white.svg" style={{ color: 'transparent' }} />
  
              </div>
            </div>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
            <Link href="#fitting" scroll={true}>Fitting</Link>
            <Link href="#about" scroll={true}>Über uns</Link>
            <Link href="#company" scroll={true}>Unternehmen</Link>
            <Link href="#contact" scroll={true}>Kontakt</Link>
          </nav>
  
        </div>
      </header>
    );
  }