import React from "react"
import ReactDOM from "react-dom/client"
import { TamaguiProvider } from "tamagui"
import { config } from "../tamagui.config"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      <App />
    </TamaguiProvider>
  </React.StrictMode>,
)
