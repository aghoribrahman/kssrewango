"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface GalleryItem {
  id: string | number
  title: string
  url: string
  description?: string
}

interface Gallery4Props {
  items: GalleryItem[]
  title: string
  subtitle?: string
}

export const Gallery4: React.FC<Gallery4Props> = ({ items, title, subtitle }) => {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const next = () => setIndex((prev) => (prev + 1) % items.length)
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <section className="py-20 bg-parchment overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>

      <div className="relative group">
        <div className="flex gap-4 px-4 md:px-12 overflow-x-auto no-scrollbar scroll-smooth">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-[400px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-lg group/card"
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white font-serif">{item.title}</h3>
                {item.description && <p className="mt-2 text-sm text-white/80 line-clamp-2">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
