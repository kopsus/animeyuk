import React from "react"
import Image from "next/image"
import Link from "next/link"
import NotFound from "@/app/not-found"

const AnimeSearch = ({ animeSearch, decodedId }) => {
  return (
    <>
      <p className="text-lg text-black font-bold mb-3 px-5 pt-10 md:px-10">
        Pencarian untuk {decodedId}
      </p>
      {animeSearch.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 px-3 pb-10 md:px-10 md:grid-cols-3 lg:grid-cols-5">
          {animeSearch.map((value) => (
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
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default AnimeSearch
