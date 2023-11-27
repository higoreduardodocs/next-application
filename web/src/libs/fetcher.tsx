'use server'

import { IAnimeProps } from '@/types/interface'
import Card from '@/components/ui/card'

const MAX_LIMIT = 8

export async function fetchAnime(page: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  )
  const data = await res.json()

  return data.map((item: IAnimeProps, index: number) => (
    <Card key={item.id} anime={item} index={index} />
  ))
}
