import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration = 2000, startWhen = false): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startWhen) return
    let current = 0
    const steps = 60
    const increment = target / steps
    const intervalMs = duration / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalMs)
    return () => clearInterval(timer)
  }, [target, duration, startWhen])

  return count
}
