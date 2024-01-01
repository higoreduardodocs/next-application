'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { mergeClassName } from '@/utils/format'
import SearchManufacturer from './search-manufacturer'

const SearchButton = ({ className }: { className: string }) => (
  <button type="submit" className={mergeClassName('-ml-3 z-10', className)}>
    <Image
      src="/magnifyign-glass.svg"
      alt="Glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

export default function Search() {
  const router = useRouter()
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    model ? searchParams.set('model', model) : searchParams.delete('model')
    manufacturer
      ? searchParams.set('manufacturer', manufacturer)
      : searchParams.delete('manufacturer')

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer.trim() === '' && model.trim() === '')
      return alert('Please provide some input')

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton className="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <label htmlFor="model">
          <Image
            src="/model-icon.png"
            alt="Car model"
            width={25}
            height={25}
            className="absolute top-[14px] w-[20px] h-[20px] ml-4"
          />
        </label>
        <input
          id="model"
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="sm:hidden" />
    </form>
  )
}
