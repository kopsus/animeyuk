"use client"

import React from "react"
import { getAnimeResponse } from "../../libs/api-libs"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const TopAnime = () => {
  const [topTranding, setTopTranding] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () => {
    const dataAnime = await getAnimeResponse("top/anime", `page=${currentPage}`)
    setTopTranding(dataAnime)
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handleNextPage = () => {
    setCurrentPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setCurrentPage((prevState) => prevState - 1)
    scrollTop()
  }

  return (
    <div className="pt-28 px-3 md:px-10">
      <p className="text-lg text-black font-bold text-center">
        TOP TRANDING page #{currentPage}
      </p>
      <div className="grid grid-cols-2 gap-2 py-10 md:grid-cols-3 lg:grid-cols-5">
        {topTranding?.data?.map((value) => (
          <Link
            href={`/detailAnime/${value.mal_id}`}
            key={value.mal_id}
            className="card bg-base-100 shadow-xl h-80 overflow-hidden md:h-96"
          >
            <figure className="overflow-hidden h-full relative group cursor-pointer">
              <Image
                src={value.images.webp.large_image_url}
                alt="Shoes"
                width={1000}
                height={1000}
                className="block object-cover w-full h-full"
              />
              <div className="w-full h-full absolute transition-all opacity-0 group-hover:opacity-100">
                <div className="bg-black bg-opacity-50 flex flex-col gap-1 text-white p-3 justify-end h-full">
                  <p className="font-semibold">{value.title}</p>
                  <p className="text-sm">{value.duration}</p>
                </div>
              </div>
            </figure>
          </Link>
        ))}
      </div>
      <div className="join flex justify-center pb-10">
        <button className="join-item btn" onClick={handlePrevPage}>
          «
        </button>
        <div className="join-item flex items-center gap-3 font-semibold px-3 btn">
          <p>{currentPage}</p>
          <p>of</p>
          <p>{topTranding?.pagination?.last_visible_page}</p>
        </div>
        <button className="join-item btn" onClick={handleNextPage}>
          »
        </button>
      </div>
    </div>
  )
}

export default TopAnime
