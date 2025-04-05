"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, Laptop } from "lucide-react"

// Theme toggle component for switching between light, dark, and system mode
export function ThemeToggle() {
  // State to track current theme
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Apply theme on initial load and when theme changes
  useEffect(() => {
    // Get saved theme or use system default
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark" | "system") || "system"
    setTheme(savedTheme)
    applyTheme(savedTheme)

    // Listen for clicks outside to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Apply theme function
  const applyTheme = (newTheme: "light" | "dark" | "system") => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
    }

    localStorage.setItem("theme", newTheme)
    console.log("Theme set to:", newTheme)
  }

  // Change theme handler
  const changeTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme)
    applyTheme(newTheme)
    setIsDropdownOpen(false)
  }

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Get current theme icon
  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />
      case "dark":
        return <Moon className="h-5 w-5" />
      case "system":
        return <Laptop className="h-5 w-5" />
    }
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle theme"
      >
        {getThemeIcon()}
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10"
        >
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => changeTheme("light")}
          >
            <Sun className="mr-2 h-4 w-4" />
            Light
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => changeTheme("dark")}
          >
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => changeTheme("system")}
          >
            <Laptop className="mr-2 h-4 w-4" />
            System
          </button>
        </div>
      )}
    </div>
  )
}

