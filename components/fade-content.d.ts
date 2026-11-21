import { CSSProperties, ReactNode } from 'react'

export interface FadeContentProps {
  children?: ReactNode
  container?: string | HTMLElement | null
  effect?: 'fade' | 'focus' | 'develop' | 'dissolve' | 'mist' | 'pixel'
  blur?: boolean | number
  duration?: number
  ease?: string
  delay?: number
  threshold?: number
  initialOpacity?: number
  stagger?: number
  staggerFrom?: 'start' | 'end' | 'center' | 'edges' | 'random'
  trigger?: 'scroll' | 'mount'
  once?: boolean
  exit?: boolean
  scrub?: boolean | number
  disappearAfter?: number
  disappearDuration?: number
  disappearEase?: string
  onStart?: () => void
  onComplete?: () => void
  onDisappearanceComplete?: () => void
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

declare const FadeContent: React.FC<FadeContentProps>
export default FadeContent
