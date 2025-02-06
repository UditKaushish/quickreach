"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  { id: 1, title: "E-commerce Website", category: "Web Development", image: "/placeholder.svg" },
  { id: 2, title: "AI Chatbot for Customer Support", category: "AI Integration", image: "/placeholder.svg" },
  { id: 3, title: "Social Media Marketing Campaign", category: "Brand Marketing", image: "/placeholder.svg" },
  { id: 4, title: "SaaS Platform UI/UX Design", category: "Web Development", image: "/placeholder.svg" },
  { id: 5, title: "Lead Generation Chatbot", category: "AI Integration", image: "/placeholder.svg" },
  { id: 6, title: "SEO Optimization Project", category: "Brand Marketing", image: "/placeholder.svg" },
]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id = "portfolio" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Updated container class */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Portfolio</h2>
        <div className="flex justify-center mb-8 space-x-4">
          {["All", "Web Development", "AI Integration", "Brand Marketing"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

