import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TypingHero() {
  const [displayText, setDisplayText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const phrases = [
    { text: "Development", color: "text-emerald-400", cursorColor: "bg-emerald-400" },
    { text: "Emerging Technologies", color: "text-blue-400", cursorColor: "bg-blue-400" },
    { text: "Digital Innovation", color: "text-purple-400", cursorColor: "bg-purple-400" },
    { text: "Gaming Ventures", color: "text-orange-400", cursorColor: "bg-orange-400" },
  ]

  const baseText = "Private Investment Holding" // Сокращаю заголовок для 2 строк на мобильных
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 2000

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex].text

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(currentCharIndex - 1)
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next phrase
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    }

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [currentCharIndex, isDeleting, currentPhraseIndex])

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-6">
        <img
          src="/images/notfun-logo-white.png"
          alt="NotFun Logo"
          className="h-20 sm:h-24 2xl:h-32 w-auto object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <h1
        className="text-2xl sm:text-7xl 2xl:text-8xl font-bold tracking-tight drop-shadow-lg w-full font-inter" // Уменьшаю размер с text-3xl до text-2xl для мобильных
      >
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-center">
            <span className="text-white drop-shadow-md text-balance leading-tight">{baseText}</span>
          </div>
          <div className="flex items-center justify-center min-h-[1.5em] sm:min-h-[1.2em]">
            <span className="text-white drop-shadow-md mr-4 sm:mr-6 leading-none mt-0.5 sm:mt-0">for</span>
            <div className="relative min-w-[320px] sm:min-w-[600px] lg:min-w-[800px] h-[1.5em] sm:h-[1.2em]">
              {/* Скрытый текст для резервирования места под самую длинную фразу */}
              <span className="invisible absolute top-0 left-0 leading-none" style={{ whiteSpace: "nowrap" }}>
                Emerging Technologies
              </span>
              <div className="absolute top-0 left-0 flex items-baseline leading-none">
                <span
                  className={`${phrases[currentPhraseIndex].color} drop-shadow-md leading-none`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {displayText}
                </span>
                {showCursor && (
                  <motion.span
                    className={`w-1.5 sm:w-2 ml-0.5 ${phrases[currentPhraseIndex].cursorColor}`}
                    style={{ height: "1em" }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </h1>

      <div className="text-center mt-8"></div>
    </div>
  )
}
