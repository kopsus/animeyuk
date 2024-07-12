import React from "react"
import Image from "next/image"

// assets
import BannerHome from "../../public/Banner_Home.png"
import InputSearch from "./InputSearch"

const WraperHome = () => {
  return (
    <>
      <div className="overflow-hidden h-[90vh] relative md:h-[100vh]">
        <Image
          src={BannerHome}
          alt="banner home"
          className="object-cover block w-full h-full"
        />
        <div className="bg-black bg-opacity-30 absolute w-full h-full top-0">
          <div className="text-white w-full h-full flex flex-col justify-center gap-5 px-5 md:px-10 md:w-10/12 lg:w-1/2">
            <p className="text-xl">Welcome</p>
            <p className="text-3xl font-bold md:text-6xl">
              Let’s Make Your Own Cinema
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <InputSearch />
      </div>
    </>
  )
}

export default WraperHome
