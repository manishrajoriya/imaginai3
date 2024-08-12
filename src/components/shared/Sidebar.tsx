import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <div>
            <Link href={"/"} className='sidebar-logo'>
            <Image src="/logo.png" alt='logo' width={120} height={120}/>
            </Link>
            
        </div>

        <div>
            
        </div>
    </aside>
  )
}

export default Sidebar