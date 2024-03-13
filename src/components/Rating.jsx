import React from "react"

// assets
import { CiStar } from "react-icons/ci"

const Rating = () => {
  return (
    <div className="bg-white px-5 py-10">
      <p className="text-xl font-bold">Animate Rating</p>
      <div className="p-5 flex flex-col gap-5 border-b border-black h-52 overflow-scroll mt-5">
        <div>
          <div className="flex items-center gap-2">
            <CiStar size={25} />
            <CiStar size={25} />
            <CiStar size={25} />
            <CiStar size={25} />
            <CiStar size={25} />
          </div>
          <div className="my-3">
            <p className="font-semibold">Alexandre de Caprio</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <CiStar size={25} />
            <CiStar size={25} />
            <CiStar size={25} />
            <CiStar size={25} />
            <CiStar size={25} />
          </div>
          <div className="my-3">
            <p className="font-semibold">Alexandre de Caprio</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating
