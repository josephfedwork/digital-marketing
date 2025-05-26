"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-amber-500">MATRIX</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-amber-500">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-amber-500">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-amber-500">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-amber-500">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "container md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[300px] py-4" : "max-h-0",
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}

