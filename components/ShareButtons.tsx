"use client"

import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react"

interface ShareButtonsProps {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    alert("Link copied to clipboard!")
  }

  return (
    <div className="share-buttons">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button facebook"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button twitter"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button linkedin"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <button
        onClick={handleCopyLink}
        className="share-button"
        style={{ backgroundColor: "#333" }}
        aria-label="Copy link"
      >
        <Link2 size={20} />
      </button>
    </div>
  )
}

