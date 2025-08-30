import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { BusinessProfileHeader } from "@/components/business-profile-header"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "notfun", // Изменено с "Weltivation" на "notfun"
  description: "Revolutionary technology solutions that drive growth and innovation",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white dark`}
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <LanguageProvider>
          <BusinessProfileHeader />
          <NavBar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
