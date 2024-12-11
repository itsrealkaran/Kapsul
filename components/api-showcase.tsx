'use client'

import { CodeCell } from './ui/code-cell'


interface API {
  id: string
  slug: string
  name: string
  description: string
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
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-transparent">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-mono">{api.id}</div>
          <h1 className="text-5xl font-semibold text-gray-900 mb-2 font-quicksand">{api.name}</h1>
          <p className="text-green-500 text-lg flex items-center gap-2 font-light">
            {api.description}
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="bg-gray-100/50 rounded-lg p-1 flex gap-1 backdrop-blur-sm shadow-lg">
            <button className="px-3 py-1 rounded text-sm transition-all hover:bg-white/50">
              API Documentation
            </button>
            <button className="px-3 py-1 rounded text-sm transition-all hover:bg-white/50">
              Example Use Cases
            </button>
            <button className="px-3 py-1 rounded text-sm transition-all hover:bg-white/50">
              Rate this API
            </button>
          </div>
        </div>
      </div>

        {/* Benchmark Scores - Inspired by Market Benchmark Scores */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'UPTIME', value: '99.9%', score: 92 },
            { label: 'LATENCY', value: '45ms', score: 88 },
            { label: 'SUCCESS', value: '99.8%', score: 95 },
            { label: 'HEALTH', value: 'Good', score: 90 }
          ].map((metric) => (
            <div key={metric.label} className="bg-gray-100/50 p-4 rounded-xl border border-gray-100 backdrop-blur-sm shadow-lg">
              <div className="text-sm text-gray-500">{metric.label}</div>
              <div className="text-2xl font-semibold mt-1">{metric.value}</div>
              <div className="mt-2 h-4 rounded-full" >
              {/* <div className="mt-2 h-1 bg-green-300 rounded-full overflow-hidden" 
              style={{
                    width: `${metric.score}%`,
                    boxShadow: '0px 0px 10px rgba(0, 128, 0, 0.5)',
                    filter: 'blur(4px)',
                    top: '-10px'
                  }}/> */}
              <div className="mt-2 h-1 bg-gray-600 rounded-full overflow-hidden" >
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${metric.score}%` }}
                />
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Parameters Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100/50 rounded-xl p-6 border border-gray-100 shadow-sm backdrop-blur-sm shadow-lg">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-mono">PARAMETER METRICS</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100/50 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                  <div className="text-3xl font-semibold text-gray-900 font-quicksand">
                    {api.params.compulsory.length}
                  </div>
                  <div className="text-sm text-gray-500">Required Params</div>
                </div>
                <div className="bg-gray-100/50 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                  <div className="text-3xl font-semibold text-gray-900 font-quicksand">
                    {api.params.optional.length}
                  </div>
                  <div className="text-sm text-gray-500">Optional Params</div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Required Parameters</h3>
                {api.params.compulsory.map(param => (
                  <div key={param} className="bg-gray-100/50 p-3 rounded-lg backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 bg-red-400 rounded-full"
                        style={{
                          boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
                          filter: 'blur(2px)'
                        }}
                      />
                      <div className="absolute w-2 h-2 bg-red-500 rounded-full"/>
                      <span className="text-gray-900 font-mono text-sm">{param}</span>
                    </div>
                  </div>
                ))}
                
                <h3 className="text-sm font-medium text-gray-700 mb-2 mt-6">Optional Parameters</h3>
                {api.params.optional.map(param => (
                  <div key={param} className="bg-gray-100/50 p-3 rounded-lg backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-2">
                    <div 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        style={{
                          boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)',
                          filter: 'blur(2px)'
                        }}
                      />
                      <div className="absolute w-2 h-2 bg-green-500 rounded-full"/>
                      <span className="text-gray-900 font-mono text-sm">{param}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Code Examples Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* JavaScript Example */}
          <div className="bg-gray-100/50 rounded-xl p-6 border border-gray-100 shadow-sm backdrop-blur-sm shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-mono">JavaScript Example</h2>
              <div className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded text-xs font-medium">JS</div>
            </div>
            <CodeCell 
              language="js"
              code={api.jsExample}
            />
          </div>

          {/* Lua Example */}
          <div className="bg-gray-100/50 rounded-xl p-6 border border-gray-100 shadow-sm backdrop-blur-sm shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-mono">Lua Example</h2>
              <div className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">LUA</div>
            </div>
            <CodeCell 
              language="lua"
              code={api.luaExample}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
