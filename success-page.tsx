"use client"

import { Check, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = "https://www.google.com"
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/ekmand-background.png" alt="Ekmand background" fill priority className="object-cover" />
      </div>

      <Card className="w-full max-w-md border-none shadow-lg bg-white/90 backdrop-blur-sm relative z-10">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="mb-6 bg-blue-100 p-4 rounded-full">
            <Check className="h-12 w-12 text-blue-600" />
          </div>

          <h1 className="text-2xl font-bold mb-2">You're Connected!</h1>

          <div className="flex items-center gap-2 mb-6">
            <Wifi className="h-5 w-5 text-slate-600" />
            <p className="text-slate-600">Internet access established</p>
          </div>

          <div className="w-full h-1 bg-slate-100 rounded-full mb-6">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${(countdown / 5) * 100}%` }}
            />
          </div>

          <p className="text-slate-500 mb-6">
            Redirecting you in <span className="font-medium">{countdown}</span> seconds...
          </p>

          <div className="flex gap-3 w-full">
            <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Link href="https://www.google.com">Continue Now</Link>
            </Button>
          </div>

          <p className="text-xs text-slate-400 mt-6">Thank you for connecting to Ekmand Network</p>
        </CardContent>
      </Card>

      <div className="mt-8 text-center relative z-10">
        <p className="text-sm text-white font-medium">
          Powered by <span className="font-bold">Ekmand</span>
        </p>
        <p className="text-xs text-white/80 mt-1">© {new Date().getFullYear()} Ekmand. All rights reserved</p>
      </div>
    </div>
  )
}
