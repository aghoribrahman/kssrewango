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
  compressed?: boolean
}

export const Gallery4: React.FC<Gallery4Props> = ({ items, title, subtitle, compressed = false }) => {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2 // scroll-speed
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const next = () => setIndex((prev) => (prev + 1) % items.length)
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <section className={cn(
      "bg-parchment overflow-hidden",
      compressed ? "py-12" : "py-20"
    )}>
      <div className={cn(
        "container mx-auto px-4",
        compressed ? "mb-8" : "mb-12"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={cn(
            "font-bold font-serif text-foreground",
            compressed ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
          )}>{title}</h2>
          {subtitle && (
            <p className={cn(
              "text-muted-foreground max-w-2xl",
              compressed ? "mt-2 text-sm" : "mt-4"
            )}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="relative group">
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={cn(
            "flex gap-4 px-4 md:px-12 overflow-x-auto no-scrollbar scroll-smooth select-none",
            isDragging ? "cursor-grabbing" : "cursor-grab"
          )}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl overflow-hidden shadow-lg group/card shrink-0",
                compressed 
                  ? "min-w-[240px] md:min-w-[320px] h-[220px] md:h-[280px]" 
                  : "min-w-[280px] md:min-w-[400px] h-[300px] md:h-[400px]"
              )}
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className={cn(
                "absolute bottom-0 left-0 right-0",
                compressed ? "p-4" : "p-6"
              )}>
                <h3 className={cn(
                  "font-bold text-white font-serif",
                  compressed ? "text-lg" : "text-xl"
                )}>{item.title}</h3>
                {item.description && (
                  <p className={cn(
                    "text-white/80 line-clamp-2",
                    compressed ? "mt-1 text-xs" : "mt-2 text-sm"
                  )}>
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
