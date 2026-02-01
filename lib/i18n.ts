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
      role: "Senior Software Engineer",
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
      role: "Senior Software Engineer",
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
  },
}

export function getLanguage(): "en" | "id" {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language || (navigator.languages ? navigator.languages[0] : "en")
    return browserLang.startsWith("id") ? "id" : "en"
  }
  return "en"
}

export function t(lang: "en" | "id", key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}
