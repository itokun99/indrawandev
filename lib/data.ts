import personalInfo from "@/data/json/personal-info.json"
import workExperience from "@/data/json/work-experience.json"
import socialLinks from "@/data/json/social-link.json"
import webConfig from "@/data/json/web-config.json"

export const getPersonalInfo = () => personalInfo
export const getWorkExperience = () => workExperience.experiences
export const getSocialLinks = () => socialLinks.socialLinks
export const getWebConfig = () => webConfig
export const getSkills = () => webConfig.skills
export const getProjects = () => webConfig.projects
export const getTestimonials = () => webConfig.testimonials
export const getFeaturedInsights = () => webConfig.featuredInsights
export const getYouTubeVideos = () => webConfig.youtubeVideos
export const getNavigation = () => webConfig.navigation
