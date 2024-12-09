import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CtrlLogo } from "./logo"
import { Search } from "./search"

export function Header() {
  return (
    <header className="py-4">
          <div className="container mx-auto flex items-center justify-between px-8">          
            <div className="bg-[#f9f9f9] flex backdrop-blur-sm rounded-lg px-4 py-2 items-center justify-between space-x-20 w-full">
                <CtrlLogo />
                <nav className="hidden md:block w-full">
                <Search/>
                </nav>
                <Button 
                  variant="default" 
                  className="bg-black text-white hover:bg-black/90 rounded-full px-4 transition-transform hover:scale-105 whitespace-nowrap"
                >
                  Connect Wallet
                </Button>
            </div>
          </div>  
      </header>
  )
}
