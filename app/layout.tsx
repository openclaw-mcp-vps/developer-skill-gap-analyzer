import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillGap Analyzer — Identify Your Developer Skill Gaps',
  description: 'Compare your skills against job descriptions and get a personalized learning roadmap powered by AI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ea18be82-1042-443d-ba07-862fe81f2f54"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
