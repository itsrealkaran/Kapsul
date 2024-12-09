"use client"

import { useState } from 'react'
import { CodeCell } from './ui/code-cell'

interface API {
  id: string
  slug: string
  name: string
  description: string
  processId: string
  params: {
    compulsory: string[]
    optional: string[]
  }
  jsExample: string
  luaExample: string
}

interface APIShowcaseProps {
  api: API
}

export function APIShowcase({ api }: APIShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'js' | 'lua'>('js')

  return (
    <div className="bg-transparent rounded-lg p-6 max-w-4xl mx-auto flex">
      <div className="w-1/2 p-6">
        <h1 className="text-3xl font-bold mb-4">{api.name}</h1>
        <p className="text-gray-600 mb-4">{api.description}</p>
        <div className="mb-4">
          <span className="font-semibold">Process ID:</span> {api.processId}
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Parameters</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-1">Compulsory</h3>
              <ul className="list-disc list-inside">
                {api.params.compulsory.map(param => (
                  <li key={param} className="text-gray-600">{param}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Optional</h3>
              <ul className="list-disc list-inside">
                {api.params.optional.map(param => (
                  <li key={param} className="text-gray-600">{param}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
              activeTab === 'js' ? 'bg-gray-200 font-semibold' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab('js')}
          >
            JavaScript/TypeScript
          </button>
          <button
            className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${
              activeTab === 'lua' ? 'bg-gray-200 font-semibold' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab('lua')}
          >
            Lua
          </button>
        </div>
        <CodeCell language={activeTab} code={activeTab === 'js' ? api.jsExample : api.luaExample} />
      </div>
    </div>
  )
}
