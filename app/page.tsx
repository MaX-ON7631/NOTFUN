"use client"
import { PoweredByBadge } from "@/components/powered-by-badge"
import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { motion } from "framer-motion"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { ServicesViewportSection } from "@/components/services-viewport-section"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        {/* Animated financial data streams */}
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          {/* Floating financial numbers */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`financial-${i}`}
                className="absolute text-green-400/70 font-mono text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `floatAcross ${8 + Math.random() * 12}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {
                  ["$1,247.89", "€892.34", "¥15,678", "₿0.0234", "+2.47%", "-1.23%", "$45.67K", "€123.45M"][
                    Math.floor(Math.random() * 8)
                  ]
                }
              </div>
            ))}

            {/* Currency symbols */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`currency-${i}`}
                className="absolute text-blue-400/60 text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `drift ${6 + Math.random() * 8}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                {["$", "€", "¥", "₿", "£", "₽"][Math.floor(Math.random() * 6)]}
              </div>
            ))}

            {/* Mini financial charts */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`chart-${i}`}
                className="absolute opacity-50"
                style={{
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                  animation: `floatVertical ${4 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <svg width="60" height="30" className="text-emerald-400">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    points={`0,${15 + Math.random() * 10} 15,${10 + Math.random() * 15} 30,${5 + Math.random() * 20} 45,${8 + Math.random() * 12} 60,${3 + Math.random() * 8}`}
                  />
                </svg>
              </div>
            ))}

            {/* Percentage indicators */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`percent-${i}`}
                className="absolute text-cyan-400/65 font-semibold text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `slideHorizontal ${10 + Math.random() * 8}s linear infinite`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              >
                {["+12.5%", "-3.2%", "+8.7%", "+15.3%", "-2.1%", "+5.9%"][Math.floor(Math.random() * 6)]}
              </div>
            ))}

            {/* Data flow lines */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`flow-${i}`}
                className="absolute opacity-30"
                style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes floatAcross {
              0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateX(100vw) translateY(-50px); opacity: 0; }
            }
            @keyframes drift {
              0%, 100% { transform: translateX(0px) translateY(0px); }
              25% { transform: translateX(30px) translateY(-20px); }
              50% { transform: translateX(-20px) translateY(-40px); }
              75% { transform: translateX(40px) translateY(-10px); }
            }
            @keyframes floatVertical {
              0%, 100% { transform: translateY(0px) scale(1); }
              50% { transform: translateY(-30px) scale(1.1); }
            }
            @keyframes slideHorizontal {
              0% { transform: translateX(-50px); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateX(50vw); opacity: 0; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.1; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(1.2); }
            }
          `}</style>
        </div>

        {/* Spinning Earth */}
        <div className="opacity-10">
          <SpinningEarth />
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <ProfileDropdown />

        {true && (
          <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 2xl:px-8">
            <div className="w-full text-center space-y-8 max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="mb-12">
                <PoweredByBadge />
              </div>

              <div className="relative min-h-[200px] sm:min-h-[250px] 2xl:min-h-[300px] flex items-center justify-center">
                {/* Background for better contrast in light mode */}
                <div className="relative z-10 w-full">
                  <TypingHero />
                </div>
              </div>

              <div className="relative">
                <p className="relative z-10 text-muted-foreground max-w-2xl 2xl:max-w-4xl mx-auto text-lg 2xl:text-xl font-medium leading-relaxed px-4">
                  NOTFUN LTD manages equity, dividend flows, and reinvestment strategies to compound long-term value
                  across digital ventures and intellectual property.
                </p>
              </div>

              {/* Button section - Left to Right order */}
              <div className="pt-8"></div>
            </div>
          </section>
        )}

        {true && (
          <div id="about-us" className="pt-20 pb-0">
            <ServicesViewportSection />
            <div id="games" style={{ position: "absolute", top: "-100px" }}></div>
          </div>
        )}

        {true && (
          <section id="contact" className="pt-16 pb-20 px-4 sm:px-6 2xl:px-8 relative bg-black/95 backdrop-blur-sm">
            <div className="w-full text-center space-y-16 max-w-6xl 2xl:max-w-7xl mx-auto">
              <div className="space-y-8">
                <motion.h2
                  className="text-3xl sm:text-6xl 2xl:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="font-bold text-slate-500 opacity-50">Ready to </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                    contact?
                  </span>
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-12 max-w-4xl 2xl:max-w-6xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-emerald-300">Email</h3>
                      <p className="text-muted-foreground text-sm">contact@notfunltd.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-blue-300">Address</h3>
                      <p className="text-muted-foreground text-sm">[Cyprus registered address]</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2h1.064M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-purple-300">Jurisdiction</h3>
                      <p className="text-muted-foreground text-sm">Cyprus (EU)</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              ></motion.div>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
