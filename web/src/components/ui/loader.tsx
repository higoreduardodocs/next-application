import Image from 'next/image'

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full">
      <Image src="/images/spinner.svg" alt="Loader" width={50} height={50} />
    </div>
  )
}
