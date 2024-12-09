import Image from 'next/image'

interface CompanyButtonProps {
  name: string
  symbol: string
  logo: string
}

export function CompanyButton({ name, symbol, logo }: CompanyButtonProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg pl-2 pr-3 py-2 shadow-sm flex items-center space-x-2 hover:bg-white/95 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="w-6 h-6 relative">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <span className="text-sm font-medium text-gray-900">{name}</span>
      <span className="text-xs text-gray-500">({symbol})</span>
    </div>
  )
}

