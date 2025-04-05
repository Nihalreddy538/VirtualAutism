// Simple footer component
export default function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-100 dark:bg-blue-950 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Virtual Autism Awareness</h3>
          <p className="mb-4">
            This website was created by students to raise awareness about virtual autism and the effects of screen time
            on children.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Virtual Autism Awareness Project. All information is for educational purposes only.
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:underline">
            Contact Us
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            About Us
          </a>
        </div>
      </div>
    </footer>
  )
}

