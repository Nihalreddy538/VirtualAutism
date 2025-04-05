// Component to display symptoms of virtual autism
export default function SymptomsSection() {
  // TODO: Add toggle functionality to show/hide detailed descriptions

  return (
    <section id="symptoms" className="py-10 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Signs and Symptoms</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-500">Communication Problems</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delayed speech or not talking at all</li>
              <li>Repeating words from TV shows instead of having conversations</li>
              <li>Not responding when called by name</li>
              <li>Avoiding eye contact</li>
              <li>Difficulty expressing needs or wants</li>
              {/* <li>Limited vocabulary for age</li> */}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-500">Social Interaction Issues</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Not interested in playing with other children</li>
              <li>Prefers to play alone</li>
              <li>Doesn't share enjoyment or interests with others</li>
              <li>Difficulty understanding feelings or facial expressions</li>
              <li>Doesn't engage in pretend play</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-500">Behavior Patterns</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Repetitive movements like hand-flapping or rocking</li>
              <li>Gets very upset when screen time ends</li>
              <li>Strong attachment to electronic devices</li>
              <li>Prefers screens over toys or people</li>
              <li>Difficulty transitioning between activities</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-500">Screen-Related Behaviors</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Intense focus on screens for long periods</li>
              <li>Tantrums when devices are taken away</li>
              <li>Calms down only when given a screen</li>
              <li>Watches the same videos repeatedly</li>
              <li>Seems "in their own world" when using screens</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
          <p className="font-bold">
            If you notice these signs in your child, it doesn't automatically mean they have autism. Talk to your doctor
            about your concerns and consider reducing screen time to see if behaviors improve.
          </p>
        </div>
      </div>
    </section>
  )
}

