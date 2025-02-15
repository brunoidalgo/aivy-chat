"use client"

import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export default function ButtonLogout() {
    return (
        <Button className="text-white bg-transparent hover:bg-transparent" onClick={() => signOut({ callbackUrl: "/" })}>
            Sair
        </Button>
    )
}