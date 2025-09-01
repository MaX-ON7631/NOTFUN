import { useState } from "react"
import { FooterPopup } from "./footer-popup"

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const footerSections = [
    {
      id: "games",
      title: "Games",
      items: ["Web Development", "Mobile Apps", "Physical Products", "SEO", "Google Ads", "Patent Services"],
    },
    {
      id: "company",
      title: "Company",
      items: ["About Us", "Portfolio", "Careers", "Contacts", "Blog"],
    },
    {
      id: "resources",
      title: "Resources",
      items: ["Documentation", "Support", "API", "Status", "Security", "Downloads"],
    },
    {
      id: "legal",
      title: "Legal",
      items: ["Privacy", "Terms", "Cookies", "GDPR", "Accessibility", "Licenses"],
    },
  ]

  return (
    <footer
      className="py-8 px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundColor: "transparent !important",
        background: "none !important",
        backgroundImage: "none !important",
      }}
    >
      <div
        className="w-full relative z-10 max-w-7xl mx-auto"
        style={{ backgroundColor: "transparent !important", background: "none !important" }}
      >
        {/* Desktop Footer */}
        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105"
              aria-label="Scroll to top"
              style={{ backgroundColor: "transparent !important", background: "none !important" }}
            >
              <img
                src="/images/notfun-logo-white-footer.png"
                alt="notfun"
                className="h-12 sm:h-14 bg-transparent"
                style={{
                  backgroundColor: "transparent !important",
                  background: "none !important",
                }}
              />
            </button>
            <FooterPopup />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} notfun. All rights reserved.
            </div>

            <div className="flex items-center gap-4"></div>
          </div>
        </div>

        {/* Mobile Footer - Stacked with collapsible sections */}
        <div className="md:hidden space-y-6">
          {/* Logo and main info */}
          <div className="text-center space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105 mx-auto block"
              aria-label="Scroll to top"
              style={{ backgroundColor: "transparent !important", background: "none !important" }}
            >
              <img
                src="/images/notfun-logo-white-footer.png"
                alt="notfun"
                className="h-10 sm:h-12 bg-transparent"
                style={{
                  backgroundColor: "transparent !important",
                  background: "none !important",
                }}
              />
            </button>
            <div className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} notfun. All rights reserved.
            </div>
          </div>

          <div className="flex justify-center">
            <FooterPopup />
          </div>
        </div>
      </div>
    </footer>
  )
}
