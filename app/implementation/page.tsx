import Link from "next/link"
import { Code, Database, ArrowLeft } from "lucide-react"
import config from "@/config/default/config.json"
import FloatingMenu from "@/components/FloatingMenu"

export default function ImplementationPage() {
  return (
    <div className="container">
      <Link href="/functions" className="flex items-center text-secondary hover:text-primary mb-4">
        <ArrowLeft size={16} className="mr-2" />
        Back to All Functions
      </Link>

      <section className="text-center py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Implementation Details</h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-secondary">
          Technical details about how {config.site_name} is implemented, including server-side rendering, caching, and
          API integration.
        </p>
      </section>

      <section className="download-section mb-8">
        <h2 className="text-xl font-bold mb-4">
          <Database size={20} className="inline mr-2" />
          Caching Implementation
        </h2>
        <p className="mb-4">
          The application uses a caching mechanism to improve performance and reduce API calls. Here's how it works:
        </p>
        <div className="bg-background-card p-4 rounded-md mb-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`class AGC {
  private cache: NodeCache

  constructor() {
    this.cache = new NodeCache({ stdTTL: 3600 }) // Cache for 1 hour
  }

  async getSearch(query: string) {
    const q = encodeURIComponent(query)
    const cacheKey = \`search_\${this.md5(q)}\`
    let items = this.cache.get(cacheKey)

    if (!items) {
      // Fetch from API if not in cache
      // ...
      this.cache.set(cacheKey, items)
    }

    return items || []
  }

  // Similar pattern for other methods
}`}</code>
          </pre>
        </div>
        <p>
          The cache uses a TTL (Time To Live) of 1 hour, after which the cached data expires and will be fetched again
          from the API.
        </p>
      </section>

      <section className="download-section mb-8">
        <h2 className="text-xl font-bold mb-4">
          <Code size={20} className="inline mr-2" />
          Server-Side Rendering
        </h2>
        <p className="mb-4">
          All pages in this application use server-side rendering with Next.js App Router. This provides several
          benefits:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Better SEO as search engines can crawl the fully rendered content</li>
          <li>Faster initial page load as the HTML is already rendered on the server</li>
          <li>Reduced client-side JavaScript, improving performance on mobile devices</li>
          <li>Better accessibility as content is available without JavaScript</li>
        </ul>
        <div className="bg-background-card p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{`// Example of a server component in Next.js App Router
export default async function Page({ params }) {
  // Data fetching happens on the server
  const data = await fetchData(params.id)
  
  // The component is rendered on the server with the data
  return (
    <div>
      <h1>{data.title}</h1>
      {/* Rest of the component */}
    </div>
  )
}`}</code>
          </pre>
        </div>
      </section>

      <section className="download-section mb-8">
        <h2 className="text-xl font-bold mb-4">
          <Code size={20} className="inline mr-2" />
          SEO Optimization
        </h2>
        <p className="mb-4">The application is optimized for search engines with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Dynamic metadata generation for each page</li>
          <li>Proper HTML semantics with appropriate heading levels</li>
          <li>Server-side rendering for complete content indexing</li>
          <li>Sitemap generation for better crawling</li>
          <li>Proper alt text for images</li>
        </ul>
        <div className="bg-background-card p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
            <code>{`// Example of dynamic metadata generation
// export async function generateMetadata({ params }) {
//   const song = await getSongById(params.id)

//   return {
//     title: config.download_title.replace("%title%", song.title),
//     description: config.download_description
//       .replace(/%title%/g, song.title)
//       .replace("%size%", song.size || ""),
//     robots: config.download_robots,
//   }
// }`}</code>
          </pre>
        </div>
      </section>

      <FloatingMenu />
    </div>
  )
}

