import React from 'react'
import Tomato from '@/components/Tomato'
import Button from '@/components/Button'

export default function Contact() {
  return (
    <section className='relative w-[100vw] pt-20'>
      <div className='flex flex-row justify-end mx-20'>
        <div></div>

        <div className='h-[45rem] w-[50rem] mr-20 bg-white text-[#1E1E1E] rounded-3xl'>
          <div className='m-10'>
            <h2 className='text-6xl font-bold'>Connect With Us</h2>
            <p>Connect with us and help us in our mission</p>
            <form className='flex flex-col gap-6 pt-10'>
              <label className='text-lg'>Name</label>
              <input type="text" placeholder="Name" className='z-10'/>
              <hr />
              <label className='text-lg'>Email</label>
              <input type="email" placeholder="Email" className='z-10'/>
              <hr />
              <label className='text-lg'>Description</label>
              <textarea placeholder="Message" className='z-10'/>
              <hr />
              <Button variant="solid">Submit</Button>
            </form>
          </div>
        </div>
      </div>
      <figure className='h-[105vh] w-[100vw] absolute top-0 left-0 mr-20 mb-20'>
          <Tomato />
      </figure>
    </section>
  )
}

// ! Potentially make the tomato take up the whole screen and use z index to put things on top