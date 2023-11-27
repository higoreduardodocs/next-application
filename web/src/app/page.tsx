import { fetchAnime } from '@/libs/fetcher'
import Loader from '@/components/ui/loader'

export default async function Home() {
  const data = await fetchAnime(1)

  return (
    <main className="flex flex-col gap-10 px-8 py-16">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <Loader />
    </main>
  )
}
