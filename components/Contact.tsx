import Tomato from "@/components/assets/Tomato";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <section className="relative w-[100vw] pt-20">
      <div className="flex xl:flex-row xl:justify-end justify-center items-center mx-5 sm:mx-10 md:mx-20 xl:mr-[10rem]">
        {/* Card sits above visually, but lets mouse pass through except inputs */}
        <div className="pointer-events-none relative z-20 min-h-[500px] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] rounded-3xl border border-white/10 bg-white/5 bg-opacity-50 p-10 shadow-sm backdrop-blur">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Connect With Us
            </h2>
            <p className="mt-2 text-base text-white/80 sm:text-lg">
              Connect with us and help us in our mission
            </p>

            {/* Form itself is click-through, only fields/buttons are interactive */}
            <form className="mt-10 space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="pointer-events-auto w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="pointer-events-auto w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="pointer-events-auto w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="default"
                  className="pointer-events-auto w-full"
                >
                  Submit
                </Button>
              </div>

              <p className="text-center text-xs text-white/60">
                We’ll get back to you as soon as we can.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Tomato stays interactive for hover/cursor tracking */}
      <figure className="invisible xl:visible absolute top-0 left-0 z-10 h-[105vh] w-[100vw] mr-20 mb-20 pointer-events-auto">
        <Tomato />
      </figure>
    </section>
  );
}
