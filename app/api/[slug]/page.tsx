import { notFound } from 'next/navigation'
import apiData from '@/public/apis.json'
import { APIShowcase } from '@/components/api-showcase'
import { Header } from '@/components/header-mini'

export async function generateStaticParams() {
  return apiData.apis.map((api) => ({
    slug: api.slug,
  }))
}

export default function APIPage({ params }: { params: { slug: string } }) {
  const api = apiData.apis.find(api => api.slug === params.slug)

  if (!api) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7e9] to-[#f5f0e6] relative overflow-hidden text-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [background-position:center_center]" />
        <Header />
        <div className="container mx-auto px-4 py-8">
          <APIShowcase api={api} />
        </div>
    </div>

  )
}

