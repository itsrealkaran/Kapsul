import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomColor(seed: string): { backgroundColor: string; color: string } {
  // Pastel background colors with matching text colors
  const colors = [
    { backgroundColor: '#E3F2FD', color: '#1565C0' }, // blue
    { backgroundColor: '#E8F5E9', color: '#2E7D32' }, // green
    { backgroundColor: '#F3E5F5', color: '#7B1FA2' }, // purple
    { backgroundColor: '#FFF3E0', color: '#E65100' }, // orange
    { backgroundColor: '#FCE4EC', color: '#C2185B' }, // pink
    { backgroundColor: '#E0F2F1', color: '#00695C' }, // teal
    { backgroundColor: '#E8EAF6', color: '#283593' }, // indigo
    { backgroundColor: '#FFEBEE', color: '#B71C1C' }, // red
    { backgroundColor: '#E0F7FA', color: '#006064' }, // cyan
    { backgroundColor: '#FFF8E1', color: '#FF6F00' }, // amber
  ]
  
  const index = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  return colors[index]
}

