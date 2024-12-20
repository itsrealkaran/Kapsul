import { Header } from "./header"
import { Footer } from "./footer"
import { ButtonGrid } from "./button-grid"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-orange-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden text-gray-900 dark:text-gray-100">
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-orange-100 relative overflow-hidden text-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [background-position:center_center]" />
      <ButtonGrid />
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
