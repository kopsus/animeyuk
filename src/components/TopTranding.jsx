"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const TopTranding = ({ topAnime, title }) => {
  return (
    <>
      <div className="py-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg font-bold text-black">{title}</p>
          <Link
            href={`topTranding`}
            className="font-semibold text-blue-700 hover:text-blue-800 transition-all"
          >
            Lihat Semua
          </Link>
        </div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
          className="mySwiper"
        >
          {topAnime.map((value) => (
            <SwiperSlide key={value.mal_id}>
              <Link
                href={`/detailAnime/${value.mal_id}`}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default TopTranding
