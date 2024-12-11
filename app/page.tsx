'use client'
import { Layout } from "@/components/layout"
import { Search } from "@/components/search"
import { SpaceStocksBadge } from "@/components/ui/space-stocks-badge"

export default function Page() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <SpaceStocksBadge />
        </div>
        <div className="mb-8 space-y-2">
          <h1 className="text-6xl font-bold tracking-tight">
            Grab Onchain API
          </h1>
          <p className="text-xl text-gray-600">An onchain data aggregator in AO Ecosystem.</p>
        </div>
        <div className="mb-16">
          <Search />
          <div className="text-center text-sm mt-2 text-gray-600">
            192 searches and counting
          </div>
        </div>
      </div>
    </Layout>
  )
}

