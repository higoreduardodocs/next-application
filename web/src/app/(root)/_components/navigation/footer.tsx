import Image from 'next/image'

import { footerLinks } from '@/utils/constants'
import Link from 'next/link'

export default function Footer() {
  const fullYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col mt-5 border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between max-md:flex-col gap-5 px-6 py-10 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub {fullYear} <br />
            All Rigth Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item, i) => (
            <div key={i} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((value, k) => (
                  <Link key={k} href={value.url} className="text-gray-500">
                    {value.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@{fullYear} CarHub. All Rights Reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  )
}
