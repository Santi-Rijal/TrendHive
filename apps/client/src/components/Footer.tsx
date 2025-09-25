import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-0 md:items-start md:justify-between bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href="/" className='flex items-center'>
          <Image src="/logo.png" alt='TrendHive' width={36} height={36} />

          <p className='hidden md:block text-md font-medium tracking-wider text-white'>TRENDHIVE</p>
        </Link>

        <p className='text-sm text-gray-400'>&copy; 2025 TRENDHIVE</p>
        <p className='text-sm text-gray-400'>All rights reserved.</p>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>

        <Link href="/" className='hover:underline'>Homepage</Link>
        <Link href="/" className='hover:underline'>Contact</Link>
        <Link href="/" className='hover:underline'>Terms of Services</Link>
        <Link href="/" className='hover:underline'>Privacy Policy</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Products</p>

        <Link href="/" className='hover:underline'>All Products</Link>
        <Link href="/" className='hover:underline'>New Arrivals</Link>
        <Link href="/" className='hover:underline'>Best Sellers</Link>
        <Link href="/" className='hover:underline'>Sale</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Company</p>

        <Link href="/" className='hover:underline'>About</Link>
        <Link href="/" className='hover:underline'>Contact</Link>
        <Link href="/" className='hover:underline'>Blog</Link>
        <Link href="/" className='hover:underline'>Affiliate Program</Link>
      </div>
    </div>
  )
}

export default Footer