// Component with solutions and recommendations
export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What You Can Do</h2>

        {/* Screen time guidelines */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Screen Time Guidelines</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold">Ages 0-18 months:</span> No screen time except video chatting with family
              </li>
              <li>
                <span className="font-bold">Ages 18-24 months:</span> Limited high-quality programming with adult
                watching together
              </li>
              <li>
                <span className="font-bold">Ages 2-5 years:</span> No more than 1 hour per day of quality programming
              </li>
              <li>
                <span className="font-bold">Ages 6+ years:</span> Consistent limits and make sure screens don't replace
                sleep, physical activity, and other healthy behaviors
              </li>
            </ul>
          </div>

          {/* Alternative activities */}
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Better Activities for Kids</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reading books together</li>
              <li>Playing outside</li>
              <li>Building with blocks or other toys</li>
              <li>Arts and crafts</li>
              <li>Singing songs and dancing</li>
              <li>Playing with other children</li>
              <li>Helping with simple chores</li>
              <li>Going for walks and exploring nature</li>
            </ul>
          </div>
        </div>

        {/* Specific advice for different groups */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-3 text-blue-500">For Parents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Set clear rules about screen time</li>
              <li>Create screen-free zones (like bedrooms and dining areas)</li>
              <li>Be a good role model with your own screen use</li>
              <li>Watch programs together and talk about what you see</li>
              <li>Use parental controls and timers</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-3 text-blue-500">If You're Concerned</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Talk to your child's doctor about your concerns</li>
              <li>Gradually reduce screen time (don't stop suddenly)</li>
              <li>Increase face-to-face interaction time</li>
              <li>Be patient - improvement takes time</li>
              <li>Consider professional evaluation if needed</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-3 text-blue-500">For Teachers</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Limit screen use in classrooms, especially for young children</li>
              <li>Encourage face-to-face collaboration</li>
              <li>Include plenty of physical activity</li>
              <li>Share information with parents about healthy screen habits</li>
              <li>Watch for signs of screen dependency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

