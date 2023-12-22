import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/button'

export default function Header() {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto px-6 py-4 bg-transparent sm:px-16">
        <Link href="/" className="flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={20}
            className="object-contain"
          />
        </Link>

        <Button
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}
