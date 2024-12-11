import { getRandomColor } from '@/lib/utils'

interface CompanyButtonProps {
  name: string
  id: string
}

export function CompanyButton({ name, id }: CompanyButtonProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg pl-2 pr-3 py-2 shadow-sm flex items-center space-x-2 hover:bg-white/95 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="w-6 h-6 rounded-md flex items-center justify-center" style={getRandomColor(id)}>
        <span className="text-xs font-medium">{name.charAt(0)}</span>
      </div>
      <span className="text-sm font-medium text-gray-900">{name}</span>
    </div>
  )
}

