import { notFound } from 'next/navigation'
import apiData from '@/public/apis.json'
import { APIShowcase } from '@/components/api-showcase'
import { Header } from '@/components/header-mini'
import { Footer } from '@/components/footer'

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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-orange-100 relative overflow-hidden text-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [background-position:center_center]" />
      <div className="relative flex flex-col justify-between min-h-screen">
        <Header />
        <div className="container">
          <APIShowcase api={api} />
        </div>
        <Footer />
    </div>
    </div>
  )
}

