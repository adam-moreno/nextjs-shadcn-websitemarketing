"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface PortfolioItem {
  id: string
  name: string
  description: string
  image: string
  category: string
  services: string[]
  results: {
    label: string
    value: string
  }[]
  link: string
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="group relative cursor-pointer"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.name}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-white/80 text-sm mb-4">{item.category}</p>
            <div className="flex items-center text-white gap-2">
              <span className="text-sm">View Project</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{item.name}</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={600}
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">About the Project</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services Provided</h4>
                <div className="flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  {item.results.map((result) => (
                    <div key={result.label} className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

