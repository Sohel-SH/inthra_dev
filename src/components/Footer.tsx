import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white bg-gradient-to-b from-[#052642] via-[#062c4d] to-[#0a3a6a]">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link href="/" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
              INTHRA
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-xs md:text-sm text-center mb-3 md:mb-0">
            © {currentYear} Inthra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}