"use client"
import { navLinks } from '@/constants'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/clerk-react'
import { Button } from '../ui/button'

function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className='sidebar'>
        <div className='flex flex-col size-full  gap-4'>
            <Link href={"/"} className='sidebar-logo'>
            <Image src="/logo.png" alt='logo' width={180} height={28}/>
            </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
            {
              navLinks.slice(0,6).map((link) => {
                const isActive = link.route === pathname
                return(
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                  <Link href={link.route} className='sidebar-link' >
                  <Image src={link.icon} alt={link.label} width={24} height={24} />
                  {link.label}
                  </Link>
                  </li>
                )
              })
            }
            </ul>

            <ul className='sidebar-nav_elements'>
              {
                navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname
                  return(
                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                    <Link href={link.route} className='sidebar-link' >
                    <Image src={link.icon} alt={link.label} width={24} height={24} />
                    {link.label}
                    </Link>
                    </li>
                  )
                })
              }
              <li className=' cursor-pointer p-4 gap-2'>
                <UserButton />
              </li>
            </ul>
          </SignedIn>

           <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
        </div>
    </aside>
  )
}

export default Sidebar