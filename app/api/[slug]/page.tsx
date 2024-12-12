import { APIPageClient } from '@/components/api-page-client'
import apiData from '@/public/apis.json'

// Server component
export async function generateStaticParams() {
  return apiData.apis.map((api) => ({
    slug: api.slug,
  }))
}

export default function APIPage({ params }: { params: { slug: string } }) {
  return <APIPageClient params={params} />
}

