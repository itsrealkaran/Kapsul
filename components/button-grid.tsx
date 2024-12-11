"use client"

import { useState, useEffect } from 'react'
import { CompanyButton } from "./ui/company-button"
import apiData from '@/public/apis.json'

// Get a subset of APIs for the grid
const APIS = apiData.apis.slice(0, 12) // Adjust number as needed

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

  // Duplicate the APIs array to create a larger grid
  const extendedApis = [...APIS, ...APIS, ...APIS, ...APIS, ...APIS, ...APIS, ...APIS]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 flex flex-wrap gap-4 p-4 justify-center items-center"
        style={{
          maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y + scrollPosition}px, black, transparent)`
        }}
      >
        {extendedApis.map((api, index) => (
          <CompanyButton
            key={`${api.id}-${index}`}
            id={api.id}
            name={api.name}
          />
        ))}
      </div>
    </div>
  )
}

