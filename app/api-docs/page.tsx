import Link from "next/link"
import { Code, ArrowRight } from "lucide-react"
import config from "@/config/default/config.json"
import type { Metadata } from "next"
import FloatingMenu from "@/components/FloatingMenu"

export const metadata: Metadata = {
  title: "API Documentation - " + config.site_name,
  description: "Documentation for the API endpoints available in " + config.site_name,
  robots: "index, follow",
}

export default function ApiDocsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"

  const endpoints = [
    {
      name: "Search",
      path: "/api/search",
      method: "GET",
      params: [{ name: "q", type: "string", required: true, description: "Search query" }],
      response: `{
  "results": [
    {
      "id": "example123",
      "title": "Example Song",
      "image": "https://example.com/image.jpg",
      "duration": "3:45",
      "views": "1.2M",
      "uploaded": "2 months ago"
    },
    // More results...
  ]
}`,
    },
    {
      name: "Info",
      path: "/api/info",
      method: "GET",
      params: [{ name: "file_code", type: "string", required: true, description: "File code/ID of the song" }],
      response: `{
  "info": {
    "id": "example123",
    "title": "Example Song",
    "image": "https://example.com/image.jpg",
    "duration": "3:45",
    "views": "1.2M",
    "uploaded": "2 months ago",
    "size": "4.2 MB",
    "protected_embed": false
  }
}`,
    },
    {
      name: "Related",
      path: "/api/related",
      method: "GET",
      params: [{ name: "id", type: "string", required: true, description: "ID of the song to find related songs for" }],
      response: `{
  "relatedItems": [
    {
      "id": "related123",
      "title": "Related Song",
      "image": "https://example.com/image.jpg",
      "duration": "4:20",
      "views": "850K",
      "uploaded": "1 month ago"
    },
    // More related items...
  ]
}`,
    },
    {
      name: "Download",
      path: "/api/download",
      method: "GET",
      params: [
        { name: "id", type: "string", required: true, description: "ID of the song to download" },
        {
          name: "quality",
          type: "string",
          required: true,
          description: "Quality of the download (e.g., 128kbps, 320kbps, 360p, 720p)",
        },
        { name: "type", type: "string", required: true, description: "Type of download (audio or video)" },
      ],
      response: "Binary file data (MP3 or video file)",
    },
  ]

  return (
    <div className="container">
      <section className="text-center py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-secondary">
          Explore the API endpoints available in {config.site_name}. Use these endpoints to integrate with our service.
        </p>
      </section>

      <section className="download-section mb-8">
        <h2 className="text-xl font-bold mb-4">Base URL</h2>
        <p className="mb-4">All API endpoints are relative to the base URL:</p>
        <div className="bg-background-card p-4 rounded-md">
          <code>{baseUrl}</code>
        </div>
      </section>

      {endpoints.map((endpoint, index) => (
        <section key={index} className="download-section mb-8">
          <h2 className="text-xl font-bold mb-4">
            <Code size={20} className="inline mr-2" />
            {endpoint.name} Endpoint
          </h2>

          <div className="mb-4">
            <h3 className="font-bold mb-2">Request</h3>
            <div className="bg-background-card p-4 rounded-md mb-2">
              <code>
                {endpoint.method} {endpoint.path}
              </code>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-2">Parameters</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-background-card">
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Required</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {endpoint.params.map((param, paramIndex) => (
                  <tr key={paramIndex} className="border-t border-border">
                    <td className="p-2">{param.name}</td>
                    <td className="p-2">{param.type}</td>
                    <td className="p-2">{param.required ? "Yes" : "No"}</td>
                    <td className="p-2">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-bold mb-2">Response</h3>
            <div className="bg-background-card p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
                <code>{endpoint.response}</code>
              </pre>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href={`/functions#${endpoint.name.toLowerCase()}-api`}
              className="text-primary-color hover:underline flex items-center"
            >
              View implementation details
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      ))}

      <FloatingMenu />
    </div>
  )
}

