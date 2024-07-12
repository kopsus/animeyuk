import React from "react"

// api
import { getAnimeResponse } from "@/libs/api-libs"
import AnimeSearch from "@/components/AnimeSearch"
import NotFound from "@/app/not-found"

const Page = async ({ params: { id } }) => {
  const decodedId = decodeURI(id)
  const animeSearch = await getAnimeResponse("anime", `q=${decodedId}`)

  return (
    <div>
      {animeSearch ? (
        <AnimeSearch animeSearch={animeSearch} decodedId={decodedId} />
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default Page
