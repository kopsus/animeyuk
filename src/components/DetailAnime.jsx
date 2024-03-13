import React from "react"
import Image from "next/image"
import Link from "next/link"
import YouTube from "react-youtube"

// assets
import { IoMdArrowRoundBack } from "react-icons/io"
import { ImBoxAdd } from "react-icons/im"
import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiTwitterXFill,
} from "react-icons/ri"
import { useState } from "react"

const DetailAnime = ({ dataAnime }) => {
  const [isOpen, setIsOpen] = useState(false)

  const opts = {
    width: "300",
    height: "200",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleTrailer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="px-5 pt-24 bg-[#1E1D2E] md:px-10">
        <Link href={"/"} className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full ">
            <IoMdArrowRoundBack />
          </div>
          <p className="text-white">Back</p>
        </Link>
        <div
          key={dataAnime?.mal_id}
          className="flex flex-col py-10 md:flex-row lg:px-10 lg:gap-10"
        >
          <div className="mb-3 md:mb-0 md:flex-1 lg:flex-[0.5]">
            <div className="overflow-hidden mx-5 h-auto lg:mx-auto">
              <Image
                src={dataAnime?.images?.webp?.large_image_url}
                alt="image anime"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex">
              <button className="btn bg-primary w-max border-0 text-white mx-auto hover:bg-blue-700 my-10">
                <ImBoxAdd size={25} />
                <p className=" text-sm">Add My Collection</p>
              </button>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="text-white flex flex-col gap-2">
              <p className="text-lg font-bold">{dataAnime?.title}</p>
              <div className="flex items-baseline gap-3 font-semibold mb-2">
                <div>
                  <p>Rank</p>
                  <p>Year</p>
                  <p>Episode</p>
                  <p>Duration</p>
                </div>
                <div>
                  <p>: {dataAnime?.rank}</p>
                  <p>: {dataAnime?.year}</p>
                  <p>: {dataAnime?.episodes}</p>
                  <p>: {dataAnime?.duration}</p>
                </div>
              </div>
            </div>
            <p className="pb-5 border-b border-white text-white">
              {dataAnime?.synopsis}
            </p>
            <div className="pt-5 pb-10">
              <p className="text-white mb-2">Share</p>
              <div className="flex items-center gap-5 text-white">
                <RiWhatsappFill size={30} />
                <RiFacebookCircleFill size={30} />
                <RiTwitterXFill size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-5 right-5">
          {isOpen ? (
            <button onClick={handleTrailer} className="btn">
              Tonton Trailer
            </button>
          ) : (
            <>
              <button
                onClick={handleTrailer}
                className="float-end py-1 px-3 bg-red-700 text-white"
              >
                x
              </button>
              <YouTube videoId={dataAnime?.trailer?.youtube_id} opts={opts} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default DetailAnime
