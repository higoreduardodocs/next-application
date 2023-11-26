import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-8">
      <p className="font-bold text-base text-white">
        &copy;{new Date().getFullYear()} Anime Vault
      </p>
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={45}
        height={45}
        className="object-contain"
      />
    </footer>
  )
}
