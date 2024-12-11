import { Rocket } from 'lucide-react'

export function SpaceStocksBadge() {
  return (
    <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 shadow-sm">
      <Rocket className="mr-2 h-4 w-4 text-purple-600" />
      <span className="text-sm font-medium text-purple-600">Largest Onchain API Aggregator</span>
    </div>
  )
}

