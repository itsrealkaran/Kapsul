'use client'

import { notFound } from 'next/navigation'
import apiData from '@/public/apis.json'
import { APIShowcase } from '@/components/api-showcase'
import { Header } from '@/components/header-mini'
import { Footer } from '@/components/footer'
import { Search } from '@/components/search'
import { useState, useEffect } from 'react'

export function APIPageClient({ params }: { params: { slug: string } }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const api = apiData.apis.find(api => api.slug === params.slug)

  if (!api) {
    notFound()
  }

  // Reset search state when route changes
  useEffect(() => {
    setIsSearchOpen(false)
    setIsSearchVisible(false)
  }, [params.slug])

  // Handle opening and closing with transitions
  const handleOpen = () => {
    setIsSearchOpen(true)
    // Small delay to ensure transition happens after visibility
    setTimeout(() => setIsSearchVisible(true), 50)
  }

  const handleClose = () => {
    setIsSearchVisible(false)
    // Wait for transition to finish before removing from DOM
    setTimeout(() => setIsSearchOpen(false), 200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-orange-100 relative overflow-hidden text-gray-900">
      <div className="relative flex flex-col justify-between min-h-screen">
        <Header onSearchClick={handleOpen} />
        <div className="container mx-auto">
          <APIShowcase api={api} />
        </div>
        <Footer />
      </div>

      {/* Full page overlay */}
      {isSearchOpen && (
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-200 ease-in-out ${
            isSearchVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl transition-transform duration-200 ease-in-out ${
            isSearchVisible ? 'translate-y-0' : '-translate-y-10'
          }`}>
            <Search 
              autoFocus
              onClose={handleClose}
            />
          </div>
          {/* Close overlay when clicking outside */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={handleClose}
          />
        </div>
      )}
    </div>
  )
} 