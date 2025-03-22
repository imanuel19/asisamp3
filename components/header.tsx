"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, Music } from "lucide-react"
import { useRouter } from "next/navigation"
import config from "@/config/default/config.json"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/${config.search_permalink.replace("%query%", encodeURIComponent(searchQuery.trim()))}`)
      setSearchQuery("")
      setIsSearchExpanded(false)
    }
  }

  return (
    <header className={`header ${isSearchExpanded ? "search-expanded" : ""}`}>
      <div className="header-content">
        <Link href="/" className="logo">
          <Music size={24} className="mr-2" />
          {config.site_name}
        </Link>

        <div className="search-container">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for songs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <Search size={18} />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        <button className="mobile-search-toggle" onClick={toggleSearch}>
          {isSearchExpanded ? <X size={24} /> : <Search size={24} />}
        </button>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/playlist/top-hits" className="nav-link">
                Playlists
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/functions" className="nav-link">
                Functions
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/api-docs" className="nav-link">
                API Docs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

