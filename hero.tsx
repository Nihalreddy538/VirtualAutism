import Image from "next/image"

// Main hero component for the landing page
export default function Hero() {
  // TODO: Add animation to the hero section
  console.log("Hero component rendered") // for debugging

  return (
    <section className="py-10 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Virtual Autism Awareness</h1>
            <p className="text-lg mb-6">
              Learn about how too much screen time can affect children's development and what you can do to help.
            </p>
            {/* Maybe add another button here later */}
            <a href="#what-is" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md inline-block">
              Learn More
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hoVBMheTff21m6ikempD3OG2xGtO1N.png"
              alt="Child using smartphone"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

