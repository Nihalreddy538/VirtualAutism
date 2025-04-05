import Image from "next/image"

// Component to explain how screens affect children's brains
export default function EffectsSection() {
  return (
    <section id="effects" className="py-10 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How Screens Affect Children's Brains</h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5H8gB90ayK53a2E4coGzxG3x9oHVNN.png"
              alt="Brain neural pathways visualization"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-3">The Developing Brain</h3>
            <p className="mb-4">
              Children's brains grow very fast in the first 3 years of life. During this time, they need real
              interactions with people and the world around them to develop properly.
            </p>
            <p className="mb-4">
              When children spend too much time on screens instead of interacting with people, they miss out on
              important experiences that help their brains develop social, language, and emotional skills.
            </p>
            <p>
              Screens provide fast-paced, colorful stimulation that can be very different from real-world interactions.
              This can affect how children learn to pay attention, communicate, and understand emotions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-500">Short-Term Effects</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Difficulty paying attention to non-screen activities</li>
              <li>Sleep problems</li>
              <li>Less time for creative play and exploration</li>
              <li>Reduced physical activity</li>
              <li>Tantrums when screen time ends</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-500">Long-Term Effects</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delayed language development</li>
              <li>Difficulty with social interactions</li>
              <li>Problems with emotional regulation</li>
              <li>Reduced creativity and problem-solving skills</li>
              <li>Potential dependency on screens for entertainment</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-2">The Good News!</h3>
          <p>
            Many children show improvement when screen time is reduced and replaced with interactive play, outdoor
            activities, and face-to-face conversations. The brain is very adaptable, especially in young children!
          </p>
        </div>
      </div>
    </section>
  )
}

