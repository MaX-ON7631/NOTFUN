"use client"

import { Database } from "lucide-react"

const GrowthChart = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 p-3 sm:p-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-400/5" />
    <div className="relative z-10 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Database className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
          <span className="text-xs text-gray-400">Growth Analytics</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full" />
        </div>
      </div>

      <div className="flex-1 relative flex items-end justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 pb-8 sm:pb-12">
        <div className="absolute inset-0 overflow-hidden">
          {/* Colorful floating orbs */}
          <div className="absolute top-4 left-8 w-8 h-8 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-sm animate-pulse" />
          <div
            className="absolute top-12 right-12 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-20 left-1/3 w-4 h-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-sm animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Colorful grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-2">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-full h-full rounded-sm ${
                    i % 3 === 0
                      ? "bg-gradient-to-br from-purple-400/20 to-pink-400/20"
                      : i % 3 === 1
                        ? "bg-gradient-to-br from-blue-400/20 to-cyan-400/20"
                        : "bg-gradient-to-br from-emerald-400/20 to-teal-400/20"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Animated sparkles */}
          <div className="absolute top-6 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" />
          <div
            className="absolute top-16 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-60"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-24 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Growth chart bars */}
        <div className="flex items-end space-x-0.5 sm:space-x-1">
          <div className="w-2 sm:w-3 h-10 sm:h-20 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm shadow-lg shadow-emerald-400/30" />
          <div className="w-2 sm:w-3 h-12 sm:h-24 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm shadow-lg shadow-emerald-400/30" />
          <div className="w-2 sm:w-3 h-14 sm:h-28 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm shadow-lg shadow-emerald-400/30" />
          <div className="w-2 sm:w-3 h-16 sm:h-32 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm shadow-lg shadow-emerald-400/30" />
          <div className="w-2 sm:w-3 h-18 sm:h-36 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm shadow-lg shadow-emerald-400/30" />
        </div>

        <div className="flex items-end space-x-0.5 sm:space-x-1 ml-2 sm:ml-4">
          <div className="w-2 sm:w-3 h-11 sm:h-22 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm shadow-lg shadow-teal-400/30" />
          <div className="w-2 sm:w-3 h-13 sm:h-26 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm shadow-lg shadow-teal-400/30" />
          <div className="w-2 sm:w-3 h-15 sm:h-30 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm shadow-lg shadow-teal-400/30" />
          <div className="w-2 sm:w-3 h-17 sm:h-34 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm shadow-lg shadow-emerald-400/30" />
          <div className="w-2 sm:w-3 h-19 sm:h-38 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-sm shadow-lg shadow-teal-400/30" />
        </div>

        {/* Animated data points */}
        <div className="absolute top-2 sm:top-4 left-4 sm:left-8">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
          <div className="text-xs text-emerald-400 font-mono mt-1 hidden sm:block">$2.4M</div>
        </div>

        <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-400/50" />
          <div className="text-xs text-teal-400 font-mono mt-1 hidden sm:block">$4.1M</div>
        </div>

        <div className="absolute top-3 sm:top-6 right-4 sm:right-8">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-300 rounded-full animate-pulse shadow-lg shadow-emerald-300/50" />
          <div className="text-xs text-emerald-300 font-mono mt-1 hidden sm:block">$6.8M</div>
        </div>

        {/* Performance indicators */}
        <div className="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-1">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-500 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Growth trend line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120">
          <defs>
            <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M 40 80 Q 80 60 120 40 Q 140 30 160 20"
            stroke="url(#growthGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,2"
          />
          {/* Growth indicators */}
          <circle cx="40" cy="80" r="2" fill="#10b981" />
          <circle cx="80" cy="60" r="2" fill="#10b981" />
          <circle cx="120" cy="40" r="2" fill="#14b8a6" />
          <circle cx="160" cy="20" r="2" fill="#14b8a6" />
        </svg>

        {/* Performance metrics overlay */}
        <div className="absolute top-1/3 right-2 sm:right-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              <div className="text-xs text-purple-400 font-mono hidden sm:block">ROI</div>
            </div>
            <div className="flex items-center space-x-1">
              <div
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div className="text-xs text-blue-400 font-mono hidden sm:block">Growth</div>
            </div>
            <div className="flex items-center space-x-1">
              <div
                className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div className="text-xs text-yellow-400 font-mono hidden sm:block">YoY</div>
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2">
          <div className="w-3 h-3 border-l-2 border-t-2 border-emerald-400/50 rounded-tl-lg" />
        </div>
        <div className="absolute top-2 right-2">
          <div className="w-3 h-3 border-r-2 border-t-2 border-teal-400/50 rounded-tr-lg" />
        </div>
        <div className="absolute bottom-8 left-2">
          <div className="w-3 h-3 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg" />
        </div>
        <div className="absolute bottom-8 right-2">
          <div className="w-3 h-3 border-r-2 border-b-2 border-purple-400/50 rounded-br-lg" />
        </div>

        {/* Quarter indicators */}
        <div className="absolute bottom-12 sm:bottom-16 left-1/4 transform -translate-x-1/2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-emerald-400 rounded-full bg-emerald-400/20 animate-pulse" />
          <div className="text-xs text-emerald-400 font-mono mt-1 hidden sm:block">Q1</div>
        </div>

        <div className="absolute bottom-11 sm:bottom-15 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-teal-400 rounded-full bg-teal-400/20 animate-pulse" />
          <div className="text-xs text-teal-400 font-mono mt-1 hidden sm:block">Q2</div>
        </div>

        <div className="absolute bottom-12 sm:bottom-16 right-1/4 transform translate-x-1/2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-emerald-300 rounded-full bg-emerald-300/20 animate-pulse" />
          <div className="text-xs text-emerald-300 font-mono mt-1 hidden sm:block">Q3</div>
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="flex justify-between items-center pt-2 sm:pt-4 border-t border-gray-700/50">
        <div className="flex space-x-2 sm:space-x-4">
          <div className="text-center">
            <div className="text-xs sm:text-sm font-bold text-emerald-400">2023</div>
            <div className="text-xs text-gray-500">Base</div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm font-bold text-teal-400">2024</div>
            <div className="text-xs text-gray-500">Growth</div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm font-bold text-emerald-300">2025</div>
            <div className="text-xs text-gray-500">Target</div>
          </div>
        </div>
        <div className="flex space-x-1 sm:space-x-2">
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded border border-gray-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full" />
          </div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded border border-gray-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full" />
          </div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded border border-gray-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default GrowthChart
