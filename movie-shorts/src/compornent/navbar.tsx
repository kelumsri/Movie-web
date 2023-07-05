// // components/Navbar.tsx
// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100">
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">My Website</a>
//       </div>
//       <div className="flex-none">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default Navbar;
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-800 text-white">
      <UserButton afterSignOutUrl="/" />
      <Link href="/">
        <h2 className="text-xl font-semibold cursor-pointer">{/* Company Name */}</h2>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/sign-in">
          <h2 className="px-4 py-2 rounded hover:bg-gray-700">Sign In</h2>
        </Link>
        <Link href="/sign-up">
          <h2 className="px-4 py-2 rounded hover:bg-gray-700">Sign Up</h2>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;

