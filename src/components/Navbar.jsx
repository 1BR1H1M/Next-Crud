import Link from 'next/link'
import React from 'react'
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-8 py-3'>
      <Link href={"/"}>
          <Image 
          src="/logo.png"
          alt="Logo DP"
          width={50}
          height={17}
          priority
          />
      </Link>
      <Link className='inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg'
      href={"/create"}>Create</Link>
    </nav>
  )
}

export default Navbar