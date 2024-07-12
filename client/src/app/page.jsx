// components
import AnimeRecommend from "../components/AnimeRecommend"
import Schedules from "../components/Schedules"
import TopTranding from "../components/TopTranding"
import WraperHome from "../components/WraperHome"

// api
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs"

export default async function Home() {
  const topAnime = await getAnimeResponse("top/anime", "")
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  )

  recommendedAnime = reproduce(recommendedAnime, 10)

  const schedule = await getAnimeResponse("schedules", "")

  return (
    <>
      <WraperHome />
      <div className="px-3 md:px-10">
        <TopTranding topAnime={topAnime} title="TOP TRANDING" />
        <AnimeRecommend limitData={recommendedAnime} title="RECOMMENDED" />
        <Schedules schedule={schedule} title="SCHEDULES" />
      </div>
    </>
  )
}
