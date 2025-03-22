"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  title: string
  thumbnail: string
}

export default function VideoPlayer({ videoId, title, thumbnail }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="player-container">
      <div className="player-wrapper">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="player-iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            <button className="play-button" onClick={() => setIsPlaying(true)} aria-label="Play video">
              <Play size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

