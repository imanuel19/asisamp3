import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import config from "@/config/default/config.json"
import type { Metadata } from "next"
import FloatingMenu from "@/components/FloatingMenu"

type Props = {
  params: { function: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const functionName = params.function.replace(/-/g, " ")

  return {
    title: `${functionName} Function - ${config.site_name}`,
    description: `Learn about the ${functionName} function in ${config.site_name} and how it works.`,
    robots: "index, follow",
  }
}

export default async function FunctionDetailPage({ params }: Props) {
  const functionName = params.function.replace(/-/g, " ")

  // Function details mapping
  const functionDetails: Record<string, { description: string; implementation: string; usage: string }> = {
    "search-songs": {
      description:
        "The Search Songs function allows users to search for songs by title, artist, or keywords. It uses the AGC library to fetch search results from the API.",
      implementation: `async function searchSongs(query: string) {
  try {
    const songs = await agc.getSearch(query)
    return songs && songs.length > 0 ? songs : fallbackSongs
  } catch (error) {
    console.error(\`Error searching for "\${query}":\`, error)
    return fallbackSongs
  }
}`,
      usage: `// In a page component
const songs = await searchSongs("example query")

// Display the results
songs.map(song => (
  <SongCard key={song.id} song={song} />
))`,
    },
    "download-songs": {
      description:
        "The Download Songs function allows users to download songs in MP3 or video format with different quality options. It uses the AGC library to fetch download information.",
      implementation: `async function getSongById(id: string) {
  try {
    const song = await agc.getDownload(id)
    if (song) return song

    // Return a fallback song if the real one isn't found
    return {
      id,
      title: "Sample Song",
      // ... other properties
    }
  } catch (error) {
    console.error(\`Error getting song with ID "\${id}":\`, error)
    return {
      id,
      title: "Sample Song",
      // ... other properties
    }
  }
}`,
      usage: `// In a download page
const song = await getSongById(params.id)

// Create download links
<a href={\`/api/download?id=\${song.id}&quality=320kbps&type=audio\`} className="btn btn-primary" download>
  <Download size={16} />
  Download MP3 (320kbps)
</a>`,
    },
    "related-songs": {
      description:
        "The Related Songs function finds songs that are related to the current song. It uses the AGC library to fetch related songs based on the title of the current song.",
      implementation: `async function getRelatedSongs(id: string) {
  try {
    const songs = await agc.getRelated(id)
    return songs && songs.length > 0 ? songs : fallbackSongs
  } catch (error) {
    console.error(\`Error getting related songs for ID "\${id}":\`, error)
    return fallbackSongs
  }
}`,
      usage: `// In a song detail page
const relatedSongs = await getRelatedSongs(params.id)

// Display related songs
relatedSongs.map(song => (
  <RelatedSongCard key={song.id} song={song} />
))`,
    },
    // Add more function details as needed
  }

  const details = functionDetails[params.function] || {
    description: `Details for the ${functionName} function are not available.`,
    implementation: "// Implementation not available",
    usage: "// Usage example not available",
  }

  return (
    <div className="container">
      <Link href="/functions" className="flex items-center text-secondary hover:text-primary mb-4">
        <ArrowLeft size={16} className="mr-2" />
        Back to All Functions
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-4">{functionName}</h1>

      <div className="download-section mb-6">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p>{details.description}</p>
      </div>

      <div className="download-section mb-6">
        <h2 className="text-xl font-bold mb-2">Implementation</h2>
        <div className="bg-background-card p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{details.implementation}</code>
          </pre>
        </div>
      </div>

      <div className="download-section mb-6">
        <h2 className="text-xl font-bold mb-2">Usage Example</h2>
        <div className="bg-background-card p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{details.usage}</code>
          </pre>
        </div>
      </div>

      <FloatingMenu />
    </div>
  )
}

