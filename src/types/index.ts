export interface CounterProps {
  title?: string
  initialCount?: number
  theme?: 'light' | 'dark'
  minValue?: number
  maxValue?: number
  stepSizes?: number[]
}

export interface CounterMethods {
  increment: () => void
  decrement: () => void
  reset: () => void
  toggleLimits: () => void
}
