import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { Menu, X, Handshake } from "lucide-react"
import { useLanguage } from "../contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About Us", href: "#about-us-content", icon: <Handshake className="w-4 h-4" /> },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Games", href: "#games" },
    { name: "Contacts", href: "#contact" },
  ]

  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    if (href.startsWith("#") && e) {
      e.preventDefault()
    }

    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const isMobile = window.innerWidth < 1024 // lg breakpoint
      
      console.log(`Attempting to scroll to: ${targetId}, Mobile: ${isMobile}`)
      
      // Список возможных ID для каждой секции
      const fallbackIds: { [key: string]: string[] } = {
        "about-us-content": ["about-us-content", "about-us", "about"],
        "portfolio": ["portfolio", "our-portfolio"],
        "games": ["games", "our-games"],
        "contact": ["contact", "contacts"]
      }
      
      let element = document.getElementById(targetId)
      
      // Если элемент не найден по основному ID, пробуем fallback ID
      if (!element && fallbackIds[targetId]) {
        for (const fallbackId of fallbackIds[targetId]) {
          element = document.getElementById(fallbackId)
          if (element) {
            console.log(`Found element with fallback ID: ${fallbackId}`)
            break
          }
        }
      }
      
      // Если элемент все еще не найден, пробуем querySelector
      if (!element) {
        element = document.querySelector(href)
        if (element) {
          console.log(`Found element with querySelector: ${href}`)
        }
      }

      if (element) {
        console.log(`Found element with ID: ${targetId}`, element)
        // Добавляем большую задержку для мобильных устройств
        const delay = isMobile ? 200 : 100
        setTimeout(() => {
          // Проверяем, что элемент все еще существует
          if (element && document.contains(element)) {
            element.scrollIntoView({ 
              behavior: "smooth", 
              block: "start"
            })
          } else {
            console.warn(`Element ${targetId} no longer exists in DOM`)
          }
        }, delay)
      } else {
        // Fallback: попробуем найти элемент через большую задержку
        const fallbackDelay = isMobile ? 500 : 300
        setTimeout(() => {
          let delayedElement = document.getElementById(targetId)
          
          // Пробуем fallback ID
          if (!delayedElement && fallbackIds[targetId]) {
            for (const fallbackId of fallbackIds[targetId]) {
              delayedElement = document.getElementById(fallbackId)
              if (delayedElement) break
            }
          }
          
          if (delayedElement) {
            console.log(`Found delayed element with fallback ID for: ${targetId}`, delayedElement)
            // Проверяем, что элемент все еще существует
            if (document.contains(delayedElement)) {
              delayedElement.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
              })
            } else {
              console.warn(`Delayed element ${targetId} no longer exists in DOM`)
            }
          } else {
            // Если элемент все еще не найден, прокручиваем в начало
            console.warn(`Element with ${href} not found after all attempts, scrolling to top`)
            console.log(`Tried IDs:`, fallbackIds[targetId] || [targetId])
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }, fallbackDelay)
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2"
          >
            <img
              src="/images/notfun-logo-white.png"
              alt="notfun"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => {
                    console.log(`Desktop navigation clicked: ${item.href}`)
                    scrollToSection(item.href, e)
                  }}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 hover:scale-105 ${
                    location.pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.icon && item.icon}
                  <span>{item.name}</span>
                </button>
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
                  <button
                    key={item.name}
                    onClick={(e) => {
                      console.log(`Mobile navigation clicked: ${item.href}`)
                      setIsOpen(false)
                      // Добавляем большую задержку для мобильных устройств
                      setTimeout(() => {
                        scrollToSection(item.href, e)
                      }, 200)
                    }}
                    className={`flex items-center space-x-3 text-base font-medium transition-colors duration-200 py-2 w-full text-left ${
                      location.pathname === item.href ? "text-emerald-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.icon && <div className="w-5 h-5">{item.icon}</div>}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
