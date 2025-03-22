import { Code, Database, Search, Music, Download, Share2, List } from "lucide-react"
import config from "@/config/default/config.json"
import { getTopSongs } from "@/lib/data"
import type { Metadata } from "next"
import FloatingMenu from "@/components/FloatingMenu"
import FunctionCard from "@/components/FunctionCard"

export const metadata: Metadata = {
  title: "All Functions - " + config.site_name,
  description: "Explore all available functions and features of " + config.site_name,
  robots: "index, follow",
}

export default async function FunctionsPage() {
  // Get some sample data to demonstrate the functions
  const topSongs = await getTopSongs()

  // Define all the functions available in the application
  const functions = [
    {
      title: "Search Songs",
      description: "Search for songs by title, artist, or keywords",
      icon: <Search size={24} />,
      path: `/${config.search_permalink.replace("%query%", "popular")}`,
      category: "User Features",
    },
    {
      title: "Download Songs",
      description: "Download songs in MP3 format with different quality options",
      icon: <Download size={24} />,
      path: topSongs.length > 0 ? `/${config.download_permalink.replace("%id%", topSongs[0].id)}` : "/",
      category: "User Features",
    },
    {
      title: "Related Songs",
      description: "Find songs related to what you're currently viewing",
      icon: <Music size={24} />,
      path: topSongs.length > 0 ? `/${config.download_permalink.replace("%id%", topSongs[0].id)}` : "/",
      category: "User Features",
    },
    {
      title: "Playlists",
      description: "Browse and play curated playlists",
      icon: <List size={24} />,
      path: "/playlist/top-hits",
      category: "User Features",
    },
    {
      title: "Share Content",
      description: "Share songs with friends on social media",
      icon: <Share2 size={24} />,
      path: topSongs.length > 0 ? `/${config.download_permalink.replace("%id%", topSongs[0].id)}` : "/",
      category: "User Features",
    },
    {
      title: "Search API",
      description: "API endpoint for searching songs",
      icon: <Code size={24} />,
      path: "/api/search?q=example",
      category: "API Endpoints",
    },
    {
      title: "Download API",
      description: "API endpoint for downloading songs",
      icon: <Code size={24} />,
      path: "/api/download?id=example&quality=320kbps&type=audio",
      category: "API Endpoints",
    },
    {
      title: "Info API",
      description: "API endpoint for getting song information",
      icon: <Code size={24} />,
      path: "/api/info?file_code=example",
      category: "API Endpoints",
    },
    {
      title: "Related API",
      description: "API endpoint for getting related songs",
      icon: <Code size={24} />,
      path: "/api/related?id=example",
      category: "API Endpoints",
    },
    {
      title: "Data Cache",
      description: "Caching mechanism for faster data retrieval",
      icon: <Database size={24} />,
      path: "/functions#data-cache",
      category: "Backend Features",
    },
  ]

  // Group functions by category
  const groupedFunctions = functions.reduce(
    (acc, func) => {
      if (!acc[func.category]) {
        acc[func.category] = []
      }
      acc[func.category].push(func)
      return acc
    },
    {} as Record<string, typeof functions>,
  )

  return (
    <div className="container">
      <section className="text-center py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">All Functions</h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-secondary">
          Explore all the features and functions available in {config.site_name}. From searching and downloading to API
          endpoints.
        </p>
      </section>

      {Object.entries(groupedFunctions).map(([category, categoryFunctions]) => (
        <section key={category} className="mb-8">
          <h2 className="related-videos-title mb-4">
            {category === "User Features" ? (
              <Music size={20} />
            ) : category === "API Endpoints" ? (
              <Code size={20} />
            ) : (
              <Database size={20} />
            )}
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryFunctions.map((func, index) => (
              <FunctionCard
                key={index}
                title={func.title}
                description={func.description}
                icon={func.icon}
                path={func.path}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="download-section mb-8">
        <h2 className="text-xl font-bold mb-4">Data Cache Implementation</h2>
        <div className="bg-background-card p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>
              {`// Cache implementation
class AGC {
  private cache: NodeCache

  constructor() {
    this.cache = new NodeCache({ stdTTL: 3600 }) // Cache for 1 hour
  }

  // Cache key generation and retrieval
  const cacheKey = \`search_\${this.md5(q)}\`
  let items = this.cache.get(cacheKey)

  // Cache storage
  this.cache.set(cacheKey, items)
}`}
            </code>
          </pre>
        </div>
      </section>

      <section className="download-section mb-8">
        <h2 className="text-xl font-bold mb-4">Server-Side Rendering</h2>
        <p className="mb-4">
          All pages in this application are server-side rendered for optimal performance and SEO. This means:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Faster initial page load</li>
          <li>Better SEO as search engines can crawl the content</li>
          <li>Improved performance on mobile devices</li>
          <li>Reduced client-side JavaScript</li>
        </ul>
        <p>The application uses Next.js App Router for server-side rendering, with features like:</p>
        <ul className="list-disc pl-6">
          <li>Static metadata generation</li>
          <li>Dynamic route parameters</li>
          <li>Server components for data fetching</li>
          <li>Optimized image loading</li>
        </ul>
      </section>

      <FloatingMenu />
    </div>
  )
}

