'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0.5
    let width = 0
    let animFrame: number
    const canvas = canvasRef.current
    if (!canvas) return

    const onResize = () => {
      if (canvas) width = canvas.offsetWidth
    }
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0.5,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.9, 0.95, 1],
      markerColor: [0.22, 0.47, 0.95],
      glowColor: [0.75, 0.85, 1.0],
      markers: [
        { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
        { location: [40.7128, -74.006],  size: 0.07 },  // New York
        { location: [51.5074, -0.1278],  size: 0.06 },  // London
        { location: [48.8566,  2.3522],  size: 0.05 },  // Paris
        { location: [35.6762, 139.6503], size: 0.07 },  // Tokyo
        { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
        { location: [52.52,   13.405],   size: 0.05 },  // Berlin
        { location: [43.6532, -79.3832], size: 0.05 },  // Toronto
        { location: [19.4326, -99.1332], size: 0.05 },  // Mexico City
        { location: [-23.5505,-46.6333], size: 0.06 },  // São Paulo
      ],
    })

    // Drive rotation with rAF + globe.update
    const frame = () => {
      phi += 0.003
      globe.update({ phi, width: width * 2, height: width * 2 })
      animFrame = requestAnimationFrame(frame)
    }
    animFrame = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(animFrame)
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', aspectRatio: '1', cursor: 'default' }}
    />
  )
}
