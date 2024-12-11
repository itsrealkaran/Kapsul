'use client'

import { useState, useEffect, useRef } from "react"
import { SearchIcon, Keyboard } from 'lucide-react'
import { useRouter } from "next/navigation"
import apiData from '@/public/apis.json'
import { getRandomColor } from '@/lib/utils'

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
    <div className="w-full max-w-md mx-auto relative" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search your favorite APIs"
          className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-10 hover:border-gray-300 focus:outline-none focus:ring-none focus:rounded-b-none hover:ring-1 hover:ring-gray-300 focus:ring-gray-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={handleInputClick}
        />
        <Keyboard className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>

      {showResults && (
        <div className="absolute z-40 w-full">
          <div className="bg-white border border-gray-200 rounded-b-lg shadow-lg overflow-hidden">
            {filteredApis.length > 0 ? (
              <ul className="divide-y divide-gray-100 max-h-[180px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filteredApis.map((api) => (
                  <li 
                    key={api.id} 
                    onClick={() => handleSelectApi(api.slug)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-center"
                  >
                    <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3" style={getRandomColor(api.id)}>
                      <span className="text-sm font-medium">{api.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-gray-900">{api.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                {query.length > 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <SearchIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                    <p className="font-medium">No results found for '{query}'</p>
                    <p className="text-sm mt-1">Try searching with a different term</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-100 max-h-[180px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {apiData.apis.map((api) => (
                      <li 
                        key={api.id} 
                        onClick={() => handleSelectApi(api.slug)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-center"
                      >
                        <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3" style={getRandomColor(api.id)}>
                          <span className="text-sm font-medium">{api.name.charAt(0)}</span>
                        </div>
                        <span className="font-medium text-gray-900">{api.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
