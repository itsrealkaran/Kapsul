import Link from "next/link"
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>© 2024 Apectory Inc.</span>
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="mailto:itsrealkaran@outlook.com" className="text-gray-600 hover:text-black">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/itsrealkaran" className="text-gray-600 hover:text-black">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com/itsrealkaran" className="text-gray-600 hover:text-black">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com/itsrealkaran" className="text-gray-600 hover:text-black">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
