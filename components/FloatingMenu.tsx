"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Search, Info, Code } from "lucide-react"

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="fab" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fab-menu">
          <Link href="/" className="fab-item" style={{ backgroundColor: "#4CAF50" }}>
            <Home size={24} />
          </Link>
          <Link href="/f/popular" className="fab-item" style={{ backgroundColor: "#2196F3" }}>
            <Search size={24} />
          </Link>
          <Link href="/functions" className="fab-item" style={{ backgroundColor: "#FF9800" }}>
            <Code size={24} />
          </Link>
          <Link href="/page/about" className="fab-item" style={{ backgroundColor: "#9C27B0" }}>
            <Info size={24} />
          </Link>
        </div>
      )}
    </>
  )
}

