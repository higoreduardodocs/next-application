'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import { IAnimeProps } from '@/types/interface'
import { fetchAnime } from '@/libs/fetcher'
import Card from './card'

let page = 2

export default function Loader() {
  const [data, setData] = useState<IAnimeProps[]>([])
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setLoading(true)
      const timeoutRequest = setTimeout(() => {
        fetchAnime(page).then((res) => setData([...data, ...res]))
        page++
        setLoading(false)
      }, 500)

      return () => clearTimeout(timeoutRequest)
    }
  }, [inView, data, loading])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: IAnimeProps, index: number) => (
          <Card key={item.id} anime={item} index={index} />
        ))}
      </section>
      <div ref={ref} className="flex items-center justify-center w-full">
        {inView && loading && (
          <Image
            src="/images/spinner.svg"
            alt="Loader"
            width={50}
            height={50}
          />
        )}
      </div>
    </>
  )
}
