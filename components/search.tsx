'use client'

import { useState, useEffect, useRef } from "react"
import { SearchIcon, Keyboard } from 'lucide-react'
import { useRouter } from "next/navigation"
import apiData from '@/public/apis.json'

interface ApiType {
  id: string
  slug: string
  name: string
}

export function Search() {
  const [query, setQuery] = useState<string>('')
  const [filteredApis, setFilteredApis] = useState<ApiType[]>([])
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelectApi = (slug: string) => {
    router.push(`/api/${slug}`)
    setShowResults(false)
  }

  useEffect(() => {
    if (query.length > 0) {
      const filtered: ApiType[] = apiData.apis.filter(api =>
        api.name.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredApis(filtered)
    } else {
      setFilteredApis([])  
    }
  }, [query])

  const handleInputClick = () => {
    setShowResults(true)
  }

  return (
    <div className="w-full max-w-xl mx-auto relative" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search your favorite APIs"
          className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-10 hover:border-gray-300 focus:outline-none focus:ring-none focus:rounded-b-none hover:ring-1 focus:ring-gray-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={handleInputClick}
        />
        <Keyboard className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>

      {showResults && (
        <div className="absolute z-20 w-full scrollbar-thumb-rounded-full overflow-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {filteredApis.length > 0 ? (
            <div className="bg-white border border-gray-200 rounded-b-lg shadow-md">
              <ul className="text-left">
                {filteredApis.map((api) => (
                  <li 
                    key={api.id} 
                    onClick={() => handleSelectApi(api.slug)} 
                    className="px-6 py-3 border-b hover:bg-gray-100 cursor-pointer"
                  >
                    {api.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-b-lg shadow-md">
              {query.length > 0 ? (
                <div className="px-6 py-3 text-gray-600">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-b-lg shadow-md">
                  <ul className="text-left">
                    {apiData.apis.map((api) => (
                      <li 
                        key={api.id} 
                        onClick={() => handleSelectApi(api.slug)}
                        className="px-6 py-3 border-b hover:bg-gray-100 cursor-pointer"
                      >
                        {api.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

