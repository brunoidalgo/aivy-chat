import { ChatForm } from "@/components/chat-form"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function Page() {
    return (
        <TooltipProvider>
            <ChatForm />
        </TooltipProvider>
    )
}

