import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#233EFF] via-[#4b63ff] to-[#8c9eff] bg-clip-text text-transparent"
            >
              INTHRA
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap justify-center md:justify-end h-full items-end gap-3 sm:gap-6 md:gap-6">
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
              >
                Blog
                <span className="block w-0 h-[2px] bg-gradient-to-r from-[#233EFF] via-[#4b63ff] to-[#8c9eff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
              >
                Privacy Policy
                <span className="block w-0 h-[2px] bg-gradient-to-r from-[#233EFF] via-[#4b63ff] to-[#8c9eff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
              >
                Terms and Conditions
                <span className="block w-0 h-[2px] bg-gradient-to-r from-[#233EFF] via-[#4b63ff] to-[#8c9eff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-xs md:text-sm text-center mb-3 md:mb-0">
            © {currentYear} Inthra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
