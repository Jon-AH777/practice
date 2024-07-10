import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image';
const Navbar = () => {
    return (
        <div>
            <div className='h-20 px-4 bg-white sticky z-50 top-0 md:px-8 lg:px-16 xl:32 2xl:px-64 '>
                <div className='h-full flex items-center justify-between md:hidden'>
                    <Link href="/">
                        <div className='text-2xl tracking-wide'>BuzzBazzar</div>
                    </Link>
                    <Menu />
                </div>
                <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                    <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                        <Link href="/" className='flex items-center gap-3'>
                            <div className='text-2xl tracking-wide'>BUZZBAZZAR</div>
                        </Link>
                        <div className='hidden xl:flex gap-4'>
                            <Link href="/">Home</Link>
                            <Link href="/shop">Shop</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Contact</Link>
                            <Link href="/">Blog</Link>
                        </div>
                    </div>
                    <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                        <Link href="/cart">
                            <Image src='/cart.png' alt="" width={22} height={22} className="cursor-pointer" />
                            <div className="absolute -top-4 -right-4 w-6 h-6 bg-buzz rounded-full text-white text-sm flex items-center justify-center">1</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar