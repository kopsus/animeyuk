const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL

export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${baseUrl}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)
  return response.data.flatMap((item) => item[objectProperty])
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  const response = {
    data: data.slice(first, last),
  }

  return response
}
