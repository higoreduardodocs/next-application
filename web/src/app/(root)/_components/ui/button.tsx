import Image from 'next/image'
import { MouseEventHandler } from 'react'

import { mergeClassName } from '@/utils/format'

type Props = {
  isDisabled?: boolean
  btnType?: 'submit' | 'button'
  containerStyles?: string
  textStyles?: string
  title: string
  rightIcon?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  isDisabled,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  title,
  rightIcon,
}: Props) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={mergeClassName('custom-btn', containerStyles)}
      onClick={handleClick}
    >
      <span className={mergeClassName('flex-1', textStyles)}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="Icon" fill className="object-contain" />
        </div>
      )}
    </button>
  )
}
