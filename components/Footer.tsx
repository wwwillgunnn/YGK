import Image from "next/image"
import Link from "next/link"

//TODO: add intagram and facebook links
export default function Footer() {
  return (
    <footer className="my-20 mx-16">
      <div className="flex flex-col gap-8 lg:flex-row justify-between w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-4 items-center">
          <Image src="/vercel.svg" alt="logo" width={60} height={60} />
          </div>
        </div>
        <form>
          <h6 className="footer-title">Stay updated with us!</h6>
          <fieldset className="form-control">
            <div className="join flex flex-col sm:flex-row w-full gap-4 sm:gap-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input w-full bg-transparent placeholder-[#E0E0E0] border border-1 join-item" />
              <button className="btn bg-transparent border border-1 border-white">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-white border-t mt-8 lg:mt-10"></div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between w-full">
          <div className="flex flex-row gap-8">
            <a className="link">Privacy Policy</a>
            <a className="link">Terms of Service</a>
            <a className="link">Cookie Policy</a>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Yaa's Garden Kitchen</p>
        </div>
      </div>
    </footer>
  )
}
