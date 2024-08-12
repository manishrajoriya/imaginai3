import React from 'react'
import Header from '@/components/shared/Header'
import { title } from 'process'
import { UserButton } from '@clerk/nextjs'
import Sidebar from '@/components/shared/Sidebar'

function page() {
  return (
    <>
    <Header title='ImaginAi ' subtitle='Welcome to imagin world'/>
    <Sidebar/>
    <UserButton/>
    </>
  )
}

export default page