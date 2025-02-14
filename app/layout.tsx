import "./globals.css"
import { cn } from "@/lib/utils"
import { Lexend } from "next/font/google";
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aivy Chat",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={cn`${lexend.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}



import './globals.css'