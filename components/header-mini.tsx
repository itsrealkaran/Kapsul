import { Button } from "@/components/ui/button"
import { CtrlLogo } from "./logo"
import { Search } from "./search"

export function Header() {
  return (
    <header className="py-4 z-10">
          <div className="container mx-auto flex items-center justify-between px-8">          
            <div className="bg-white/60 border-2 border-white flex backdrop-blur-sm rounded-lg px-4 py-2 items-center justify-between space-x-20 w-full">
                <CtrlLogo />
                <nav className="hidden md:block w-full">
                <Search/>
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
