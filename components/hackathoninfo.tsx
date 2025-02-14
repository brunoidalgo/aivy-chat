'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, Users } from 'lucide-react'

export function HackathonInfo({ attendees }: { attendees: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = attendees / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
            current += 1
            setCount(Math.min(Math.floor(current * increment), attendees))

            if (current >= steps) {
                clearInterval(timer)
            }
        }, stepDuration)

        return () => clearInterval(timer)
    }, [attendees])

    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-8 border shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-500">January 17, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-500">4 Hours</span>
                </div>
            </div>

            {/* Main Content */}
            <h2 className="text-4xl font-bold text-center mb-8">
                World's Shortest Hackathon
            </h2>
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="h-6 w-6 text-gray-500" />
                    <p className="text-6xl font-bold tabular-nums">{count}</p>
                </div>
                <p className="text-gray-500 text-xl">Attendees</p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t text-center">
                <p className="text-sm text-gray-500">
                    Breaking records for the fastest innovation event
                </p>
            </div>
        </div>
    )
}

