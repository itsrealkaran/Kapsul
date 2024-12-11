import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomGradient(seed: string): string {
  // Theme colors - you can adjust these
  const colors = [
    ['from-blue-100', 'to-indigo-100'],
    ['from-green-100', 'to-emerald-100'],
    ['from-purple-100', 'to-pink-100'],
    ['from-orange-100', 'to-amber-100'],
    ['from-teal-100', 'to-cyan-100']
  ]
  
  // Use the seed string to pick a consistent color pair
  const index = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  
  return `bg-gradient-to-br ${colors[index][0]} ${colors[index][1]}`
}

