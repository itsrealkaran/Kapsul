import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CtrlLogo } from "./logo"
import { Search } from "./search"

export function Header() {
  return (
    <header className="py-4 w-4/5 mx-auto justify-between">
                  
        <nav className="hidden md:block">
          <div className="bg-[#f9f9f9] backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center justify-around space-x-10">
              <CtrlLogo />
              <Search />
              <Button 
                  variant="default" 
                  className="bg-black text-white hover:bg-black/90 rounded-full px-14 transition-transform hover:scale-105"
                >
                  Connect Wallet
                </Button>
            </div>
          </div>
        </nav>
      
    </header>
  )
}
