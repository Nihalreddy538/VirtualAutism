import Image from "next/image"

// This component explains what virtual autism is
export default function WhatIsSection() {
  return (
    <section id="what-is" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What is Virtual Autism?</h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            {/* Using a placeholder image for now - will replace with our own later */}
            <Image
              src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=1000"
              alt="Child with tablet"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">
              Virtual autism is when children show autism-like behaviors because they spend too much time on screens
              (phones, tablets, TVs) and not enough time interacting with real people.
            </p>
            <p className="mb-4">
              It's not an official medical diagnosis, but many doctors and researchers have noticed that some children
              who spend a lot of time on screens develop problems with communication, social skills, and behavior.
            </p>
            <p>
              The good news is that many children show improvement when screen time is reduced and they spend more time
              playing and talking with others.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">Important to Know:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Virtual autism is different from autism spectrum disorder (ASD)</li>
            <li>Children under 3 years old are most at risk</li>
            <li>Symptoms can improve when screen time is reduced</li>
            <li>Face-to-face interaction is important for brain development</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

