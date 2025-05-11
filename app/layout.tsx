import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "You're Connected!",
  description: "Successfully connected to Ekmand Network",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/https://ekmand.dev/ekmand-logo.deb0435b.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
