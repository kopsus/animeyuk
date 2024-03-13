const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL

export const getPopularAnime = async (resource, query) => {
  const res = await fetch(`${baseUrl}/${resource}?${query}`)
  const data = await res.json()
  return data.data
}

export const getNestedAnime = async (resource, objectProperty) => {
  try {
    const res = await getPopularAnime(resource)

    // Pastikan res tidak undefined dan memiliki properti objectProperty
    if (res && Array.isArray(res) && res.every((obj) => obj[objectProperty])) {
      const data = res.flatMap((value) => value[objectProperty])
      return data
    } else {
      console.error("Invalid result from getPopularAnime:", res)
      return []
    }
  } catch (err) {
    console.error(err)
    return []
  }
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const last = first + gap

  return data.slice(first, last)
}
