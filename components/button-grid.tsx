"use client"

import { useState, useEffect } from 'react'
import { CompanyButton } from "./ui/company-button"

const COMPANIES = [
  { name: "Nvidia", symbol: "NVDA", logo: "/test.svg" },
  { name: "Netflix", symbol: "NFLX", logo: "/test.svg" },
  { name: "Nike", symbol: "NKE", logo: "/test.svg" },
  { name: "Apple", symbol: "AAPL", logo: "/test.svg" },
  { name: "Microsoft", symbol: "MSFT", logo: "/test.svg" },
  { name: "Amazon", symbol: "AMZN", logo: "/test.svg" },
  { name: "Meta", symbol: "META", logo: "/test.svg" },
  { name: "Tesla", symbol: "TSLA", logo: "/test.svg" },
  { name: "Airbnb", symbol: "ABNB", logo: "/test.svg" },
  { name: "Mastercard", symbol: "MA", logo: "/test.svg" },
  { name: "Morgan Stanley", symbol: "MS", logo: "/test.svg" },
  { name: "Lululemon", symbol: "LULU", logo: "/test.svg" },
  { name: "Adobe", symbol: "ADBE", logo: "/test.svg" },
  { name: "Pfizer", symbol: "PFE", logo: "/test.svg" },
  { name: "Uber", symbol: "UBER", logo: "/test.svg" },
  { name: "Spotify", symbol: "SPOT", logo: "/test.svg" },
  { name: "Delta", symbol: "DAL", logo: "/test.svg" },
] 

export function ButtonGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Duplicate the companies array to create a larger grid
  const extendedCompanies = [...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 flex flex-wrap gap-4 p-4 justify-center items-center"
        style={{
          maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, black, transparent)`
        }}
      >
        {extendedCompanies.map((company, index) => (
          <CompanyButton
            key={`${company.symbol}-${index}`}
            name={company.name}
            symbol={company.symbol}
            logo={company.logo}
          />
        ))}
      </div>
    </div>
  )
}

