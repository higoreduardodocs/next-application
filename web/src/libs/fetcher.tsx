'use server'

const MAX_LIMIT = 8

export async function fetchAnime(page: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  )
  const data = await res.json()

  return data
}
