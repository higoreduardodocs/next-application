import { FilterProps } from '@/types/filter'
import { CarProps } from '@/types/car'
import { filterSearchParams } from './format'

export async function fetchCars(filters: FilterProps) {
  const searchParams = filterSearchParams(filters)
  if (!searchParams) return []

  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST || '',
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RAPID_API_URL}?${searchParams}`,
    {
      method: 'GET',
      headers: headers,
    }
  )

  return await response.json()
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(process.env.NEXT_PUBLIC_IMAGIN_API_URL || '')
  const { make, model, year } = car

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
  )
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}
