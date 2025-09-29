import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <div className="animate-fade-in min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Contact />
    </div>
  )
} 