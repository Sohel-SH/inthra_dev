'use client'

import { useEffect, useRef, useState } from 'react'

// Hero with looping video background
export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Insider Threat Detection.'
  const [hasStarted, setHasStarted] = useState(false)
  const [heroHeight, setHeroHeight] = useState<number | null>(null)

  // Measure viewport height minus header height
  useEffect(() => {
    const updateHeroHeight = () => {
      if (typeof window === 'undefined') return

      const viewportHeight = window.innerHeight
      // const header = document.querySelector('header') as HTMLElement | null
      // const headerHeight = header?.offsetHeight ?? 0

      setHeroHeight(viewportHeight)
    }

    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)

    return () => {
      window.removeEventListener('resize', updateHeroHeight)
    }
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node || hasStarted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTypedText(fullText.slice(0, index))
      if (index >= fullText.length) {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [hasStarted, fullText])

  return (
    <section
      ref={sectionRef}
      className="section-padding animate-fade-in relative overflow-hidden"
      style={
        heroHeight
          ? {
              minHeight: `${heroHeight}px`,
              // top: '80px',
              display: 'flex',
              alignItems: 'center',
            }
          : {
              minHeight: '100vh',
              // top: '80px',
              display: 'flex',
              alignItems: 'center',
            }
      }
    >
      {/* Video background (only render when hero is in view to avoid heavy initial load) */}
      {hasStarted && (
        <video
          className="absolute h-full w-full object-cover"
          src="/heroBanner.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      {/* Light grey overlay on top of video for readability */}
      <div className="absolute inset-0 bg-gray-100/20" />

      {/* Soft animated blue glow behind hero content */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 flex justify-center">
        <div className="w-[520px] h-[260px] rounded-full bg-[#233EFF]/25 blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium animate-slide-up">
          Insider Threat Detection, Reimagined
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 max-w-4xl animate-slide-up">
          The new era of
        </h1>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 max-w-4xl animate-slide-up">
          <span className="bg-gradient-to-r from-[#233EFF] via-[#233EFF] to-[#233EFF] bg-clip-text text-transparent typing-caret">
            {typedText}
          </span>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl animate-slide-up">
          Inthra combines AI, graph analytics, and intelligent rules to surface risky behavior in minutes,
          not months—so your team can act before an incident becomes a breach.
        </p>
      </div>
    </section>
  )
}
