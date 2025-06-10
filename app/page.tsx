import React from 'react'
import {Button} from '@/components/ui/button'
const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>Welcome!, to my saas application</h1>
      <p className='text-lg mt-4'>This is a simple SaaS application built with Next.js and Tailwind CSS.</p>
      <Button> Let's get started</Button>
    </div>
  )
}

export default Page