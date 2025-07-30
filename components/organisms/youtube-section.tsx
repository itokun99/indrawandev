"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Calendar, Eye } from "lucide-react"

const youtubeVideos = [
  {
    id: 1,
    title: "Build a REST API with Hono and Bun",
    description:
      "Learn how to build a high-performance REST API using Hono framework and Bun runtime. This comprehensive tutorial covers setup, routing, middleware, and deployment strategies for modern web applications.",
    thumbnail: "https://img.youtube.com/vi/xzVnqg9O6DM/hqdefault.jpg",
    videoId: "xzVnqg9O6DM",
    duration: "28:45",
    views: "15.2K",
    publishedAt: "2024-01-20",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "React Developer Roadmap 2025",
    description:
      "Complete roadmap for becoming a React developer in 2025. Covers essential skills, tools, frameworks, and career progression tips based on industry trends and real-world experience.",
    thumbnail: "https://img.youtube.com/vi/rNbjFgPNhAw/hqdefault.jpg",
    videoId: "rNbjFgPNhAw",
    duration: "22:18",
    views: "32.8K",
    publishedAt: "2024-01-15",
    category: "Career",
  },
  {
    id: 3,
    title: "Exploring ATAC: TUI Postman Replacement (Live Coding & Relaxing)",
    description:
      "Join me for a relaxing live coding session as we explore ATAC, a terminal-based API testing tool that could replace Postman. Perfect background coding content with real-time problem solving.",
    thumbnail: "https://img.youtube.com/vi/HmugOX_lQxU/hqdefault.jpg",
    videoId: "HmugOX_lQxU",
    duration: "45:12",
    views: "8.9K",
    publishedAt: "2024-01-10",
    category: "Live Coding",
  },
  {
    id: 4,
    title: "Daily Life as Software Engineer",
    description:
      "A glimpse into the daily routine of a software engineer - from morning standup meetings to debugging sessions, code reviews, and continuous learning. Real behind-the-scenes content.",
    thumbnail: "https://img.youtube.com/vi/ugcQ6jB80Dg/maxresdefault.jpg",
    videoId: "mb1APcYNJXw",
    duration: "0:58",
    views: "45.1K",
    publishedAt: "2024-01-08",
    category: "Short",
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
              <span className="text-blue-500">youtube-dl --list-formats @indrawandev</span>
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
            <a href="https://youtube.com/@indrawandev" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              VISIT_CHANNEL() // Subscribe for more content
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
