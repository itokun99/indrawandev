"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Calendar, Eye } from "lucide-react"

const youtubeVideos = [
  {
    id: 1,
    title: "React Native Architecture Best Practices",
    description: "Deep dive into scalable React Native app architecture patterns and folder structures.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    duration: "15:42",
    views: "12.5K",
    publishedAt: "2024-01-15",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Building Microservices with Go",
    description: "Complete guide to building and deploying microservices using Go and Docker.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    videoId: "dQw4w9WgXcQ",
    duration: "22:18",
    views: "8.9K",
    publishedAt: "2024-01-08",
    category: "Backend",
  },
  {
    id: 3,
    title: "Career Journey: From Junior to Senior Developer",
    description: "My personal journey and lessons learned in 6+ years of software development.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    videoId: "dQw4w9WgXcQ",
    duration: "18:35",
    views: "25.3K",
    publishedAt: "2023-12-20",
    category: "Career",
  },
  {
    id: 4,
    title: "TypeScript Tips for React Native",
    description: "Advanced TypeScript patterns and tricks for better React Native development.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    videoId: "dQw4w9WgXcQ",
    duration: "12:24",
    views: "6.7K",
    publishedAt: "2023-12-10",
    category: "Tutorial",
  },
]

export function YouTubeSection() {
  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="terminal-window max-w-2xl mx-auto p-6 pt-12 mb-8">
            <div className="code-block">
              <span className="text-green-500">$</span>{" "}
              <span className="text-blue-500">youtube-dl --list-formats @byito.dev</span>
              <br />
              <span className="text-muted-foreground">{youtubeVideos.length} videos available for streaming</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-mono">
            {"<"}
            <span className="text-primary">YOUTUBE_CHANNEL</span>
            {" />"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            // Sharing knowledge through video tutorials and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {youtubeVideos.map((video, index) => (
            <Card
              key={video.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-dashed hover:border-solid overflow-hidden"
            >
              <div className="relative aspect-video bg-gradient-to-br from-red-500/10 to-red-600/10">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    onClick={() => openVideo(video.videoId)}
                    className="rounded-full bg-red-600 hover:bg-red-700 text-white border-0"
                  >
                    <Play className="h-6 w-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-mono">
                  [{String(index + 1).padStart(2, "0")}]
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-mono">
                  {video.duration}
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="font-mono border border-dashed">
                    {video.category.toUpperCase()}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(video.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors font-mono text-lg leading-tight">
                  {video.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4 font-mono text-sm leading-relaxed">
                  {video.description}
                </CardDescription>
                <Button
                  onClick={() => openVideo(video.videoId)}
                  className="w-full font-mono border-2 border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  WATCH_ON_YOUTUBE()
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="font-mono border-2 border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <a href="https://youtube.com/@byito.dev" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              VISIT_CHANNEL() // Subscribe for more content
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
