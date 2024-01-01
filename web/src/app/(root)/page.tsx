import { FilterProps } from '@/types/filter'
import { fuels, yearsOfProduction } from '@/utils/constants'
import { fetchCars } from '@/utils/fetch'
import Filter from './_components/ui/filter'
import Search from './_components/ui/search'
import Hero from './_components/widget/hero'
import Card from './_components/ui/card'
import More from './_components/ui/more'

type Props = {
  searchParams: FilterProps
}

export default async function Home({ searchParams }: Props) {
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })
  const isEmptyCars = !cars || !Array.isArray(cars) || cars.length < 1

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <Search />

          <div className="home__filter-container">
            <Filter title="fuel" options={fuels} />
            <Filter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isEmptyCars ? (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((item, i) => (
                <Card key={i} car={item} />
              ))}
            </div>
            <More
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
