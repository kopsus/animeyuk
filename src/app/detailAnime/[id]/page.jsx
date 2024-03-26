"use client"

import { getAnimeResponse } from "@/libs/api-libs"
import DetailAnime from "@/components/DetailAnime"

import Rating from "@/components/Rating"
import { useState, useEffect } from "react"

const Page = ({ params: { id } }) => {
  const [dataAnime, setDataAnime] = useState(null)

  const fetcData = async () => {
    const detailAnime = await getAnimeResponse(`anime/${id}`, "")
    setDataAnime(detailAnime)
  }

  useEffect(() => {
    fetcData()
  }, [id])

  return (
    <>
      <DetailAnime dataAnime={dataAnime} />
      <Rating />
    </>
  )
}

export default Page
