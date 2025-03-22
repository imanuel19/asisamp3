import Link from "next/link"
import type { ReactNode } from "react"

interface FunctionCardProps {
  title: string
  description: string
  icon: ReactNode
  path: string
}

export default function FunctionCard({ title, description, icon, path }: FunctionCardProps) {
  return (
    <Link href={path} className="download-section block hover:bg-background-card-hover transition-colors">
      <div className="flex items-start">
        <div className="mr-4 text-primary-color">{icon}</div>
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-secondary">{description}</p>
        </div>
      </div>
    </Link>
  )
}

