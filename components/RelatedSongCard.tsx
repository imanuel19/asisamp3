import Link from "next/link"

interface RelatedSongCardProps {
  song: {
    id: string
    title: string
    image: string
    duration?: string
    views?: string
    uploaded?: string
  }
  downloadPermalink: string
}

export default function RelatedSongCard({ song, downloadPermalink }: RelatedSongCardProps) {
  return (
    <Link href={`/${downloadPermalink.replace("%id%", song.id)}`} className="video-card">
      <div className="video-thumbnail">
        <img src={song.image || "/placeholder.svg"} alt={song.title} className="w-full h-full object-cover" />
        {song.duration && <div className="video-duration">{song.duration}</div>}
      </div>
      <div className="video-info">
        <h3 className="video-title">{song.title}</h3>
        <div className="video-meta">
          {song.views && <span className="video-views">{song.views} views</span>}
          {song.uploaded && <span className="video-date">{song.uploaded}</span>}
        </div>
      </div>
    </Link>
  )
}

