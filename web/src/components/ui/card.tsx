import Image from 'next/image'

import { AnimeProps } from '@/types/interface'
import { MotionArticle } from './motion'

interface IProps {
  anime: AnimeProps
  index: number
}
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
const STAGGER = 0.25

export default function Card({ anime, index }: IProps) {
  return (
    <MotionArticle
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * STAGGER,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="w-full sm:max-w-sm"
    >
      <div className="w-full h-[37vh] relative">
        <Image
          src={anime.image.original}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1">
            {anime.name}
          </h2>
          <div className="px-2 py-1 rounded-sm bg-[#161921]">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/episodes.svg"
              alt="Episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font-bold text-base text-white">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/star.svg"
              alt="Star"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font-bold text-base text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionArticle>
  )
}
