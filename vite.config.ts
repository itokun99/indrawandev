import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { tamaguiExtractPlugin } from "@tamagui/vite-plugin"

export default defineConfig({
  plugins: [
    react(),
    tamaguiExtractPlugin({
      components: ["tamagui"],
      config: "./tamagui.config.ts",
      outputCSS: "./src/tamagui.css",
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
