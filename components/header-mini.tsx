'use client'
import { Button } from "@/components/ui/button"
import { AlphaLogo } from "./logo"
import { Search } from "./search"

interface HeaderProps {
  onSearchClick: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  return (
    <header className="py-4 z-10">
      <div className="container cursor-pointer mx-auto flex items-center justify-between px-8">          
        <div className="bg-white/60 border-2 border-white flex backdrop-blur-sm rounded-lg px-6 py-2 items-center justify-between w-full">
          <AlphaLogo />
          <nav className="hidden md:block w-full">
              <Search isDisabled={true} onClick={onSearchClick} />
          </nav>
          <Button 
            variant="default" 
            className="bg-black text-white hover:bg-black/90 rounded-xl px-4 transition-transform hover:scale-105 whitespace-nowrap"
          >
            Connect Wallet
          </Button>
        </div>
      </div>  
    </header>
  )
}
