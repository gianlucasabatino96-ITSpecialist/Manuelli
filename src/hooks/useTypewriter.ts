import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 60, startWhen = false): string {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!startWhen) {
      setDisplayed('')
      return
    }
    let i = 0
    setDisplayed('')
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, startWhen])

  return displayed
}
