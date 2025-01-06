import Jar from '@/components/assets/Jar'
import Navbar from '@/components/Navbar'
import Button from '@/components/ui/Button'
import React from 'react'

export default function buy() {
  return (
    <article className="min-h-screen w-full bg-[radial-gradient(circle,_#6DB86B,_#305230)]" id="top-viewport">
          <header>
            <Navbar />
          </header>
    
          <section className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20 mx-20 lg:mt-0">
            <aside className="flex flex-col gap-5 lg:p-20 text-center lg:text-left">
              <h1 className="text-6xl font-bold">Curry Paste</h1>
              <p className="text-lg">Small 350g, Large 750g</p>
              <div className="flex gap-4 items-center justify-center lg:justify-start">
                <Button variant="outline">Small</Button>
                <Button variant="outline">Large</Button>
              </div>
              <div>
                {/* Add increment section here */}
              </div>
            </aside>
            <figure className="h-[70vh] lg:h-[100vh] w-[40vw] z-10">
              <Jar />
            </figure>
            <div>
              {/* Add price section here */}
              <p className="text-2xl font-bold">Price</p>
              <p className="text-4xl font-bold">$12.99</p>
              <Button variant="solid">Buy Now</Button>
              <p className="text-sm mt-5">*10% off for purchases over $100</p>
            </div>
          </section>
        </article>
  )
}

