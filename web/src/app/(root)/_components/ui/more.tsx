'use client'

import { useRouter } from 'next/navigation'

import { updateSearchParams } from '@/utils/format'
import Button from './button'

type Props = {
  pageNumber: number
  isNext: boolean
}

export default function More({ pageNumber, isNext }: Props) {
  const router = useRouter()
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathname = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathname)
  }

  return (
    <div className="w-full flex justify-center gap-5 mt-10">
      <Button
        title="Show more"
        btnType="button"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    </div>
  )
}
