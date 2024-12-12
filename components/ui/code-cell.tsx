"use client"

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, Sun, Moon } from 'lucide-react'

interface CodeCellProps {
  language: 'js' | 'ts' | 'lua'
  code: string
}

export function CodeCell({ language, code }: CodeCellProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const languageLabels = {
    js: 'JavaScript',
    ts: 'TypeScript',
    lua: 'Lua'
  }

  return (
    <div className={`relative rounded-lg overflow-hidden border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className={`flex items-center justify-between px-3 py-1.5 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50/50'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center space-x-2">
          <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
          }`}>
            {languageLabels[language]}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={toggleTheme}
            className={`p-1 rounded-md ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            } transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-gray-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-gray-600" />
            )}
          </button>
          <button
            onClick={handleCopy}
            className={`p-1 rounded-md ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
            } transition-colors`}
            aria-label="Copy code"
          >
            {isCopied ? (
              <Check className="w-3.5 h-3.5 text-green-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
            )}
          </button>
        </div>
      </div>
      <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-300" style={{ maxHeight: '400px' }}>
        <SyntaxHighlighter
          language={language}
          style={isDark ? tomorrow : oneLight}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            fontFamily: 'var(--font-geist-mono)',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
