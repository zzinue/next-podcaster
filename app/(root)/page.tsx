import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Podcast mas famosos</h1>
        <Button className='text-white-1 bg-orange-1'>Button</Button>

      </section>
    </div>
  )
}

export default Home