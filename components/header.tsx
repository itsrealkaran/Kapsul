import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CtrlLogo } from "./logo"

export function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between px-12">
        <Link 
          href="/" 
          className="transition-opacity hover:opacity-80" 
          aria-label="Home"
        >
          <CtrlLogo />
        </Link>
        
        <nav className="hidden md:block">
          <div className="bg-[#f9f9f9] backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center space-x-4">
              <Link 
                href="/apis" 
                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 hover:bg-[#ECEFEC] rounded-md px-4 py-2"
              >
                APIs
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/docs" 
                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 hover:bg-[#ECEFEC] rounded-md px-4 py-2"
              >
                Documentation
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/examples" 
                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 hover:bg-[#ECEFEC] rounded-md px-4 py-2"
              >
                Examples
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/pricing" 
                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 hover:bg-[#ECEFEC] rounded-md px-4 py-2"
              >
                Pricing
              </Link>
            </div>
          </div>
        </nav>
        
        <Button 
          variant="default" 
          className="bg-black text-white hover:bg-black/90 rounded-xl px-4 transition-transform hover:scale-105"
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}

