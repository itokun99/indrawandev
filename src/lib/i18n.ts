export type Lang = "id" | "en"

export const translations = {
  en: {
    header: {
      title: "Indrawan Lisanto",
    },
    nav: {
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      videos: "Videos",
      connect: "Connect",
    },
    hero: {
      title: "Indrawan Lisanto",
      role: "AI-Native Full-Stack Engineer · Mobile-first",
      subtitle: "Building robust, scalable systems with modern technologies. Specializing in React Native, Go, Microservices, and API Architecture.",
      email: "Email",
      resume: "Resume",
    },
    skills: {
      title: "Skills",
    },
    experience: {
      title: "Experience",
      tech: "Tech",
    },
    projects: {
      title: "Projects",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      tech: "Tech",
    },
    videos: {
      title: "Videos & Content",
    },
    connect: {
      title: "Connect",
    },
    footer: {
      copyright: "All rights reserved.",
    },
    blog: {
      title: "Blog",
      backToList: "Back to all posts",
      published: "Published",
      updated: "Updated",
      tags: "Tags",
      readMore: "Read more",
      prev: "Previous",
      next: "Next",
      empty: "No posts yet.",
      sampleNote: "This is sample content, shown until real posts exist.",
    },
  },
  id: {
    header: {
      title: "Indrawan Lisanto",
    },
    nav: {
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      videos: "Video",
      connect: "Terhubung",
    },
    hero: {
      title: "Indrawan Lisanto",
      role: "AI-Native Full-Stack Engineer · Mobile-first",
      subtitle: "Membangun sistem yang robust dan scalable dengan teknologi modern. Spesialisasi dalam React Native, Go, Microservices, dan API Architecture.",
      email: "Email",
      resume: "Lihat CV",
    },
    skills: {
      title: "Keahlian",
    },
    experience: {
      title: "Pengalaman",
      tech: "Tech",
    },
    projects: {
      title: "Proyek",
      liveDemo: "Lihat Demo",
      sourceCode: "Kode Sumber",
      tech: "Tech",
    },
    videos: {
      title: "Video & Konten",
    },
    connect: {
      title: "Terhubung",
    },
    footer: {
      copyright: "Semua hak dilindungi.",
    },
    blog: {
      title: "Blog",
      backToList: "Kembali ke semua tulisan",
      published: "Diterbitkan",
      updated: "Diperbarui",
      tags: "Tag",
      readMore: "Baca selengkapnya",
      prev: "Sebelumnya",
      next: "Berikutnya",
      empty: "Belum ada tulisan.",
      sampleNote: "Ini konten contoh, ditampilkan sampai tulisan asli tersedia.",
    },
  },
}

export function t(lang: Lang, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}
