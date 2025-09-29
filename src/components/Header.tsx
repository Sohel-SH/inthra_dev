'use client'

import Link from 'next/link'

export function Header() {

  return (
    <header className="shadow-sm sticky top-0 z-50 shrink-0" style={{backgroundColor:'transparent', position:'fixed', top:0, left:0, right:0, zIndex:90, backdropFilter:'blur(2px)'}}>
      <nav className="container-custom">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
              INTHRA
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}