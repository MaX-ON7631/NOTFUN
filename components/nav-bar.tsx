"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Handshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Games", href: "#games" },
    { name: "Contacts", href: "#contact" },
    { name: "About Us", href: "#about-us", icon: <Handshake className="w-4 h-4" /> },
  ]

  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    if (href.startsWith("#") && e) {
      e.preventDefault()
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href)

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      } else {
        // Fallback: попробуем найти элемент через небольшую задержку
        setTimeout(() => {
          const delayedElement = document.querySelector(href)
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth", block: "center" })
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-gray-800/50" : "bg-black/30 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/images/notfun-logo-white.png"
              alt="notfun"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 hover:scale-105 ${
                    pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.icon && item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 p-1"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-gray-800 ${
                scrolled ? "bg-black/70" : "bg-black/30"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false)
                      scrollToSection(item.href, e)
                    }}
                    className={`flex items-center space-x-3 text-base font-medium transition-colors duration-200 py-2 ${
                      pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.icon && <div className="w-5 h-5">{item.icon}</div>}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
