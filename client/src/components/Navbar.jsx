import Image from "next/image"
import Link from "next/link"

// assets
import Logo from "@/../public/Logo.png"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <>
      <div className="bg-black bg-opacity-75 flex items-center justify-between gap-10 py-3 px-5 fixed w-full z-50 md:px-10">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={Logo} alt="Logo" width={1000} height={1000} />
          <p className="text-xl font-semibold text-white">AnimeYuk</p>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <InputSearch />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
