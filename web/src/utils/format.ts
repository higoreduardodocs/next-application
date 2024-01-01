import { FilterProps } from '@/types/filter'

export const mergeClassName = (first: string, last?: string) =>
  `${first} ${last}`

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}

export const filterSearchParams = (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters
  const searchParams = new URLSearchParams()

  manufacturer && searchParams.set('make', manufacturer)
  year && searchParams.set('year', year.toString())
  model && searchParams.set('model', model)
  limit && searchParams.set('limit', limit.toString())
  fuel && searchParams.set('fuel', fuel)

  return searchParams.toString()
}
