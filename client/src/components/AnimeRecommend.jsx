import React from "react"
import Link from "next/link"
import Image from "next/image"

const AnimeRecommend = ({ limitData, title }) => {
  return (
    <>
      <p className="text-lg font-bold text-black">{title}</p>
      <div className="grid grid-cols-2 gap-3 pb-10 pt-5 md:grid-cols-3 lg:grid-cols-5">
        {limitData?.data.map((value, idx) => (
          <Link
            href={`/detailAnime/${value.mal_id}`}
            key={idx}
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
                </div>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </>
  )
}

export default AnimeRecommend
