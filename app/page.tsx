export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#ffffff",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#00ff00" }}>$ Your Vite Portfolio is Running</h1>
        <p style={{ marginBottom: "2rem", color: "#cccccc" }}>
          This Next.js app directory has been replaced with Vite + React
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666666" }}>
          Build command: npm run build
          <br />
          Dev command: npm run dev
        </p>
      </div>
    </div>
  )
}
