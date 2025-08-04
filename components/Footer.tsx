import Image from "next/image"
import Link from "next/link"

//TODO: add intagram and facebook links
export default function Footer() {
  return (
    <footer className="w-full">
      {/* <div className="flex sm:flex-row flex-col gap-8 justify-between w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-4 items-center">
          <Image src="/vercel.svg" alt="logo" width={60} height={60} />
          </div>
        </div>
        <form>
          <h6 className="footer-title">Stay updated with us!</h6>
          <fieldset className="form-control">
            <div className="join flex flex-row w-full items-center justify-center sm:items-start sm:justify-start">
              <input
                type="text"
                placeholder="username@site.com"
                className="input w-full sm:w-[20rem] bg-transparent placeholder-[#E0E0E0] border border-gray-300 rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="btn bg-transparent border border-gray-300 rounded-r-md p-3 text-white hover:bg-blue-500 hover:border-blue-500 transition duration-300">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div> */}
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
