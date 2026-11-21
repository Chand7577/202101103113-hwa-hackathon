import { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface SpecularButtonProps {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  radius?: number
  tint?: string
  tintOpacity?: number
  blur?: number
  textColor?: string
  lineColor?: string
  baseColor?: string
  intensity?: number
  idleIntensity?: number
  shineSize?: number
  shineFade?: number
  thickness?: number
  glow?: number
  speed?: number
  followMouse?: boolean
  proximity?: number
  autoAnimate?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

declare const SpecularButton: React.FC<SpecularButtonProps>
export default SpecularButton
