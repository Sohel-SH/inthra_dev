// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="shadow-sm top-0 z-50 shrink-0 header-fixed">
//       <nav className="container-custom ">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <div className="text-2xl font-bold">
//             <Link href="/">
//               <span className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent gradient">
//                 INTHRA
//               </span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Navigation Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="/blog"
//               className="relative text-lg font-medium text-white hover:text-[#a3ff4e] transition-colors duration-200 group"
//             >
//               Blog
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link
//               href="/privacy-policy"
//               className="relative text-lg font-medium text-white hover:text-[#a3ff4e] transition-colors duration-200 group"
//             >
//               Privacy Policy
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link
//               href="/terms-and-conditions"
//               className="relative text-lg font-medium text-white hover:text-[#a3ff4e] transition-colors duration-200 group"
//             >
//               Terms and Conditions
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#010b15] px-4 pt-2 pb-4 space-y-2">
//           <Link
//             href="/blog"
//             className="block text-lg font-medium w-fit text-white hover:text-[#a3ff4e] transition-colors duration-200 group py-2"
//           >
//             Blog
//             <span className="block w-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link
//             href="/privacy-policy"
//             className="block text-lg font-medium w-fit text-white hover:text-[#a3ff4e] transition-colors duration-200 group py-2"
//           >
//             Privacy Policy
//             <span className="block w-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//           <Link
//             href="/terms-and-conditions"
//             className="block text-lg font-medium w-fit text-white hover:text-[#a3ff4e] transition-colors duration-200 group py-2"
//           >
//             Terms and Conditions
//             <span className="block w-0 h-[2px] bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import Link from "next/link";

const Header = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // <header
    //   className={
    //     isMobileMenuOpen
    //       ? "bg-white/10 backdrop-blur-md shadow-md top-0 z-50 shrink-0 header-fixed"
    //       : "shadow-md top-0 z-50 shrink-0 header-fixed"
    //   }
    // >
    <header
      className={"shadow-md top-0 z-50 shrink-0 header-fixed"}
    >
      <nav className="container-custom ">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <span className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-white gradient">
                INTHRA
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
