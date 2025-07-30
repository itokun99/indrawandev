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
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank", "noopener,noreferrer")
  }

  const visitChannel = () => {
    window.open("https://youtube.com/@indrawandev", "_blank", "noopener,noreferrer")
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-mobile-h2 mb-3 sm:mb-4 gradient-text">YouTube Channel</h2>
          <p className="text-mobile-body text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge through video tutorials and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {youtubeVideos.map((video) => (
            <Card key={video.id} className="modern-card overflow-hidden group">
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
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
                    {video.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
                <CardTitle className="text-base sm:text-lg leading-tight">{video.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4 text-mobile-small leading-relaxed">
                  {video.description}
                </CardDescription>
                <Button
                  onClick={() => openVideo(video.videoId)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 bg-transparent"
            onClick={visitChannel}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Channel
          </Button>
        </div>
      </div>
    </section>
  )
}
