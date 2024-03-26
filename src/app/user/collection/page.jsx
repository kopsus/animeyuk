import React from "react"
import Link from "next/link"
import Image from "next/image"

// assets
import { IoMdArrowRoundBack } from "react-icons/io"

const page = () => {
  return (
    <div className="pt-24 px-5 md:px-10">
      <Link href={"/"} className="flex items-center gap-3 mb-10">
        <div className="bg-black p-2 rounded-full ">
          <IoMdArrowRoundBack color="white" />
        </div>
        <p className="text-black">Back</p>
      </Link>

      <div className="grid grid-cols-2 gap-3 pb-10 pt-5 md:grid-cols-3 lg:grid-cols-5">
        <Link
          href={"/"}
          // href={`/detailAnime/${value.mal_id}`}
          // key={value.mal_id}
          className="card bg-base-100 shadow-xl h-80 overflow-hidden md:h-96"
        >
          <figure className="overflow-hidden h-full relative group cursor-pointer">
            <Image
              src={""}
              // src={value.images.webp.large_image_url}
              alt="Shoes"
              width={1000}
              height={1000}
              className="block object-cover w-full h-full"
            />
            <div className="w-full h-full absolute transition-all opacity-0 group-hover:opacity-100">
              <div className="bg-black bg-opacity-50 flex flex-col gap-1 text-white p-3 justify-end h-full">
                <p className="font-semibold">
                  {/* {value.title} */}
                  title
                </p>
              </div>
            </div>
          </figure>
        </Link>
      </div>
    </div>
  )
}

export default page
