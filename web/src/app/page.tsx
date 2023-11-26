import { fetchAnime } from '@/libs/fetcher'
import { IAnimeProps } from '@/types/interface'
import Card from '@/components/ui/card'
import Loader from '@/components/ui/loader'

export default async function Home() {
  const data = await fetchAnime(1)

  return (
    <main className="flex flex-col gap-10 px-8 py-16">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: IAnimeProps, index: number) => (
          <Card key={item.id} anime={item} index={index} />
        ))}
      </section>
      <Loader />
    </main>
  )
}
