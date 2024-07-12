import React from "react"
import Image from "next/image"
import YouTube from "react-youtube"

import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiTwitterXFill,
} from "react-icons/ri"
import { useState } from "react"
import Back from "./Button/Back"

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
        <Back />
        <div
          key={dataAnime?.data?.mal_id}
          className="flex flex-col py-10 md:flex-row lg:px-10 lg:gap-10"
        >
          <div className="mb-3 md:mb-0 md:flex-1 lg:flex-[0.5]">
            <div className="overflow-hidden mx-5 h-auto lg:mx-auto">
              <Image
                src={dataAnime?.data?.images?.webp?.large_image_url}
                alt="image anime"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="md:flex-1">
            <div className="text-white flex flex-col gap-2">
              <p className="text-lg font-bold">{dataAnime?.data?.title}</p>
              <div className="flex items-baseline gap-3 font-semibold mb-2">
                <div>
                  <p>Rank</p>
                  <p>Year</p>
                  <p>Episode</p>
                  <p>Duration</p>
                  <p>Status</p>
                </div>
                <div>
                  <p>: {dataAnime?.data?.rank}</p>
                  <p>: {dataAnime?.data?.year}</p>
                  <p>: {dataAnime?.data?.episodes}</p>
                  <p>: {dataAnime?.data?.duration}</p>
                  <p>: {dataAnime?.data?.status}</p>
                </div>
              </div>
            </div>
            <p className="pb-5 border-b border-white text-white">
              {dataAnime?.data?.synopsis}
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
              <YouTube
                videoId={dataAnime?.data?.trailer?.youtube_id}
                opts={opts}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default DetailAnime
