import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="ml-4 flex justify-between sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-xl:container flex items-center h-14 max-w-screen-2xl">
        <Link href="/chat" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Aivy Chat</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4 mr-4">
        <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Button variant="ghost" size="sm">
          Contato
        </Button>
        <Button size="sm">Saber mais</Button>
      </div>
    </header>
  )
}

