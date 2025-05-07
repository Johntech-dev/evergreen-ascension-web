"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, Users, Database, Phone } from "lucide-react"

export default function CTPSDiagram() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      const timeout = setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            4th CTPS: Personal Cognitive Computing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive system architecture enabling adaptive, IA-enhanced time perception and cognitive computing capabilities
          </p>
        </div>

        <div className="relative w-full max-w-[900px] min-h-[500px] h-[60vw] max-h-[900px] mx-auto flex items-center justify-center bg-white overflow-hidden rounded-xl shadow-lg">
          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer circle */}
            <circle cx="450" cy="450" r="250" stroke="#e0e7ff" strokeWidth="1" strokeDasharray="6 4" fill="none" />

            {/* Vertical connection lines */}
            <line x1="450" y1="200" x2="450" y2="150" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="450" y1="700" x2="450" y2="750" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="6 4" />

            {/* Horizontal connection lines */}
            <line x1="200" y1="450" x2="150" y2="450" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="700" y1="450" x2="750" y2="450" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="6 4" />
          </svg>

          {/* Central hub */}
          <motion.div
            className="absolute  -translate-x-1/2 -translate-y-1/2 w-[300px] bg-white rounded-xl shadow-lg z-10 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4 bg-blue-50 rounded-t-xl">
              <h3 className="text-center font-semibold text-gray-800">Enterprise systems / knowledgebase</h3>
            </div>
            <div className="p-6 flex items-center justify-center gap-6 flex-wrap">
              {/* Enterprise logos in blue */}
              <div className="text-blue-600 font-bold text-xl">SAP</div>
              <div className="text-blue-600 font-bold text-xl">CRM</div>
              <div className="text-blue-600 font-bold text-xl">ERP</div>
              <div className="text-blue-600 font-bold text-xl">SCM</div>
            </div>
          </motion.div>

          {/* Top card - Automate */}
          <motion.div
            className="absolute top-[-30px]  -translate-x-1/2 w-[300px] bg-white rounded-xl shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Automate</h2>
              <p className="text-sm text-gray-600 mb-4">
                Dynamic AI agents for omni-channel, human-like support on 35+ channels
              </p>
              <div className="flex justify-around mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="22"></line>
                    </svg>
                  </div>
                  <span className="text-xs mt-1 font-medium">Voice</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span className="text-xs mt-1 font-medium">Email</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                  </div>
                  <span className="text-xs mt-1 font-medium">Chat</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom card - Assist */}
          <motion.div
            className="absolute bottom-[-25px]  -translate-x-1/2 w-[300px] bg-white rounded-xl shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Assist</h2>
              <p className="text-sm text-gray-600 mb-4">
                Dynamic AI assistants for agent performance and better customer service
              </p>
              <div className="flex justify-around mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Database size={20} />
                  </div>
                  <span className="text-xs mt-1 font-medium">Service cloud</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <span className="text-xs mt-1 font-medium">Contact centre</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left card - Analyze */}
          <motion.div
            className="absolute top-1/2 left-[-30px] -translate-y-1/2 w-[250px] bg-white rounded-xl shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="p-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
                <BarChart3 size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Analyze</h2>
              <p className="text-sm text-gray-600">Analyze automation and agent metrics</p>
            </div>
          </motion.div>

          {/* Right card - Manage */}
          <motion.div
            className="absolute top-1/2 right-[30px] -translate-y-1/2 w-[250px] bg-white rounded-xl shadow-lg"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="p-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white mb-3">
                <Users size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Manage</h2>
              <p className="text-sm text-gray-600">Manage dynamic AI agents and knowledgebase</p>
            </div>
          </motion.div>

          {/* Animated connection indicators */}
          {isAnimating && (
            <>
              <motion.div
                className="absolute top-[175px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[175px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"
                animate={{
                  y: [0, 25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-[175px] w-3 h-3 rounded-full bg-blue-600"
                animate={{
                  x: [0, -25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 right-[175px] w-3 h-3 rounded-full bg-blue-600"
                animate={{
                  x: [0, 25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
