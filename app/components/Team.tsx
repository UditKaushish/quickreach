"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Udit",
    role: "CTO",
    image: "/placeholder.svg",
    quote: "Pushing the boundaries of AI and web development to create innovative solutions.",
  },
  {
    name: "Aditya",
    role: "CMO",
    image: "/placeholder.svg",
    quote: "Crafting data-driven marketing strategies that deliver exceptional results.",
  },
]

const Team = () => {
  return (
    <section id = "team" className="py-20 bg-white dark:bg-gray-900">
      <div className="id = team w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 italic">"{member.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

