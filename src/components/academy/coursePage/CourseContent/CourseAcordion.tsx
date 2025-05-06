"use client"

import { useState } from "react"
import { ChevronDown, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface CourseModuleAccordionProps {
  module: {
    title: string
    lessons: number
    topics: string[]
  }
  index: number
}

export function CourseModuleAccordion({ module, index }: CourseModuleAccordionProps) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <div className="border border-zinc-700/50 rounded-lg overflow-hidden">
      <button
        className="bg-zinc-800 md:hidden p-4 flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className=" flex gap-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 p-2 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold">
              {index + 1}
            </div>
            <h3 className="font-bold text-sm md:text-base text-white">{module.title}</h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">{module.lessons} lecciones</span>
            <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition-transform", isOpen && "transform rotate-180")} />
          </div>
        </div>
      </button>
      <button
        className="bg-zinc-800 p-4 hidden md:flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 p-2 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold">
            {index + 1}
          </div>
          <h3 className="font-bold text-xs md:text-base text-white">{module.title}</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-400">{module.lessons} lecciones</span>
          <ChevronDown className={cn("h-5 w-5 text-zinc-400 transition-transform", isOpen && "transform rotate-180")} />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 space-y-3 bg-zinc-900/50">
          {module.topics.map((topic, i) => (
            <div key={i} className="flex items-start gap-3 p-2 hover:bg-zinc-800/50 rounded-lg transition-colors">
              <BookOpen className="h-5 w-5 text-yellow-500 mt-0.5" />
              <span className="text-zinc-300">{topic}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
