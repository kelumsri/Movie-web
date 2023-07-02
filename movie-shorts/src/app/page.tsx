// import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>Hi, I'm Kelum Srinath</h1>
//       {/* <Link href="/Sign-in">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Sign In
//         </button>
//       </Link>   */}
//     </main>
//   )
// }
//app/page.tsx

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
// import Navbar from "@/compornent/navbar";
import Landing from "./(componants)/landing"


export default function Home() {
  return (
    <><div>
      {/* <Navbar />     */}
    </div>
    <div><Landing/></div>
      </>
  )
}