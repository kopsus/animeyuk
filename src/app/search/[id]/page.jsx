import React from "react"

// components
import WraperHome from "@/components/WraperHome"

// api
import { getPopularAnime } from "@/libs/api-libs"
import AnimeSearch from "@/components/AnimeSearch"
import NotFound from "@/app/not-found"

const Page = async ({ params: { id } }) => {
  const decodedId = decodeURI(id)
  const animeSearch = await getPopularAnime("anime", `q=${decodedId}`)

  return (
    <div>
      <WraperHome />
      {animeSearch ? (
        <AnimeSearch animeSearch={animeSearch} decodedId={decodedId} />
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default Page
