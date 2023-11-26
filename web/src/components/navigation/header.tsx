import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex lg:flex-row flex-col lg:items-center justify-center px-8 py-16 sm:p-16 bg-hero bg-center bg-no-repeat bg-cover gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={100}
          height={90}
          className="object-contain self-center"
        />
        <h1 className="font-bold text-5xl sm:text-6xl text-white leading-[120%] text-center">
          Explore the <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 w-full h-[50vh] relative">
        <Image
          src="/images/anime.png"
          alt="Anime"
          fill
          className="object-contain"
        />
      </div>
    </header>
  )
}
