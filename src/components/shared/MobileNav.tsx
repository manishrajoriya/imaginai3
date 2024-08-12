import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'


function MobileNav() {
  return (
    <div className='header'>
      
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <ul>
            <DropdownMenuContent>

    {
        navLinks.map((link )=> {
            return(
                <li className='header-nav_elements'>
                <DropdownMenuItem key={link.route}>
                 <Link href={link.route}>
                 <Image src={link.icon} alt={link.label} width={28} height={28}/>
                 {link.label}
                 </Link>  
                </DropdownMenuItem>
                </li>
            )
        })
    }
    
    </DropdownMenuContent>
    </ul>
    </DropdownMenu>

    </div>
  )
}

export default MobileNav