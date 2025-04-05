"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Navigation component with mobile responsiveness
export default function Navbar() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log("Menu toggled:", !isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Virtual Autism Awareness
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#what-is" className="hover:text-blue-500">
            What is Virtual Autism
          </Link>
          <Link href="#symptoms" className="hover:text-blue-500">
            Symptoms
          </Link>
          <Link href="#checker" className="hover:text-blue-500">
            Symptoms Checker
          </Link>
          <Link href="#chatbot" className="hover:text-blue-500">
            AI Helper
          </Link>
          <Link href="#solutions" className="hover:text-blue-500">
            Solutions
          </Link>
          <Link href="#articles" className="hover:text-blue-500">
            Articles
          </Link>
          <Link href="#faq" className="hover:text-blue-500">
            FAQ
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background p-4 border-b">
          <div className="flex flex-col space-y-4">
            <Link href="#what-is" onClick={() => setIsMenuOpen(false)}>
              What is Virtual Autism
            </Link>
            <Link href="#symptoms" onClick={() => setIsMenuOpen(false)}>
              Symptoms
            </Link>
            <Link href="#checker" onClick={() => setIsMenuOpen(false)}>
              Symptoms Checker
            </Link>
            <Link href="#chatbot" onClick={() => setIsMenuOpen(false)}>
              AI Helper
            </Link>
            <Link href="#solutions" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link href="#articles" onClick={() => setIsMenuOpen(false)}>
              Articles
            </Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

