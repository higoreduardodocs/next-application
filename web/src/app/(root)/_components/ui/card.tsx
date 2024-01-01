'use client'

import { useState } from 'react'

import Image from 'next/image'

import { CarProps } from '@/types/car'
import Button from './button'
import Detail from './detail'
import { calculateCarRent } from '@/utils/calculate'

type Props = {
  car: CarProps
}

export default function Card({ car }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const cartRent = calculateCarRent(car.city_mpg, car.year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {cartRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full my-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="Steering"
              width={20}
              height={20}
            />
            <p className="text-[14px] leading-[17px]">Automatic</p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" alt="Seat" width={20} height={20} />
            <p className="car-card__icon-text">Automatic</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" alt="Gas" width={20} height={20} />
            <p className="car-card__icon-text">Automatic</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <Detail isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}
