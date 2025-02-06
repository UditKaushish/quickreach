"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About QuickReach AI</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Innovating the future of digital presence</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg"
              alt="QuickReach AI Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2023, QuickReach AI emerged from a vision to revolutionize how businesses approach their
              digital presence. Our co-founders, Udit and Aditya, recognized the need for a holistic solution that
              combines cutting-edge web development, AI-driven marketing, and innovative chatbot technology.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With their backgrounds in AI, marketing, and web development from Delhi University, they assembled a team
              of passionate experts dedicated to delivering fast, scalable, and intelligent solutions for businesses of
              all sizes.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, QuickReach AI stands at the forefront of digital innovation, helping brands not just keep up with
              the rapidly evolving digital landscape, but stay ahead of the curve.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing the boundaries of what's possible in digital solutions.",
              },
              { title: "Client Success", description: "Your growth and success are at the heart of everything we do." },
              { title: "Integrity", description: "Building trust through transparency and ethical practices." },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs

