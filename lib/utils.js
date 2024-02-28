import { clsx } from 'clsx'
import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const moreDes = ({ showFullDescription, des, length }) => {
  const description = showFullDescription ? des : des?.slice(0, length)
  return description
}

export const debounce = (func) => {
  let timer
  return function (...args) {
    const context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      func.apply(context, args)
    }, 500)
  }
}
