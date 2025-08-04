import Tomato from '@/components/assets/Tomato';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  return (
    <section className='relative w-[100vw] pt-20'>
      <div className='flex xl:flex-row xl:justify-end justify-center items-center mx-5 sm:mx-10 md:mx-20 xl:mr-[10rem]'>
        <div className='min-h-[500px] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] bg-[#422323] bg-opacity-50 rounded-3xl p-10'>
          <div>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold pt-8'>Connect With Us</h2>
            <p className='text-lg sm:text-xl mt-2'>Connect with us and help us in our mission</p> 

            <form className='flex flex-col gap-6 py-20'>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className='z-10 bg-transparent rounded-md p-2 focus:outline-none focus:ring-2'
                />
                <hr />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className='z-10 bg-transparent rounded-md p-2 focus:outline-none focus:ring-2'
                />
                <hr />
              </div>
              <textarea
                placeholder="Message"
                className='z-10 bg-transparent rounded-md p-2 focus:outline-none focus:ring-2'
              />
              <hr className='pb-20'/>

              <Button variant="default" className="z-10">Submit</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Tomato component remains positioned correctly on large screens */}
      <figure className='invisible xl:visible h-[105vh] w-[100vw] absolute top-0 left-0 mr-20 mb-20'>
        <Tomato />
      </figure>
    </section>
  );
}
