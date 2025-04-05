"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function StoriesSection() {
  const stories = [
    {
      name: "Emma's Journey",
      age: "4 years old",
      story:
        "Emma was diagnosed with autism at age 3 after her parents noticed she rarely made eye contact, had limited speech, and showed repetitive behaviors. She had been watching videos on tablets since she was 6 months old, often for 4-5 hours daily while her parents worked from home. After learning about virtual autism, they gradually reduced her screen time and enrolled her in play therapy. Within six months, Emma's language skills improved dramatically, she began engaging more with family members, and her repetitive behaviors decreased. Her therapist noted that while she still had some developmental delays, her progress was remarkable compared to typical autism intervention outcomes.",
      parent: "Jennifer, Emma's mother",
    },
    {
      name: "Noah's Story",
      age: "3 years old",
      story:
        "Noah was a happy baby who seemed to be developing normally until around 18 months. As his screen time increased to several hours daily, his parents noticed he stopped responding to his name, lost the few words he had been using, and became fixated on watching the same videos repeatedly. Concerned, they consulted a developmental pediatrician who suggested they try significantly reducing screen exposure before pursuing an autism diagnosis. After three months with minimal screens and increased interactive play, Noah began making eye contact again, attempting to communicate, and showing interest in toys and people. By his third birthday, he was speaking in short sentences and engaging in pretend play.",
      parent: "Mark, Noah's father",
    },
    {
      name: "Sophia's Experience",
      age: "5 years old",
      story:
        "Sophia had been using educational apps since she was a toddler. By age 4, she was having frequent meltdowns, struggling in preschool, and showing little interest in other children. Her teachers suggested she might have autism spectrum disorder. Her parents researched and decided to implement a 'screen detox' along with professional support. The first few weeks were challenging with increased tantrums, but gradually Sophia began to engage more with her environment. Six months later, she was playing cooperatively with peers, having conversations, and showing emotional regulation skills that had previously seemed impossible. Her developmental specialist noted that while she still needed some support, she no longer met the criteria for an autism diagnosis.",
      parent: "Maria, Sophia's mother",
    },
    {
      name: "Ethan's Transformation",
      age: "4 years old",
      story:
        "Ethan was glued to screens from his earliest days. By age 3, he rarely spoke, avoided eye contact, and had intense meltdowns when his devices were taken away. His pediatrician referred him for autism evaluation, but also suggested dramatically reducing screen time. His parents created a screen-free home environment and focused on outdoor play, reading, and social activities. The transition was difficult, but after several months, they noticed Ethan making more eye contact, attempting to communicate his needs, and showing interest in interactive games. While he still required speech therapy, his progress surprised his therapists. By age 4, he was actively engaging with other children and showing emotional connections that had previously been absent.",
      parent: "David, Ethan's father",
    },
  ]

  const [currentStory, setCurrentStory] = useState(0)

  const nextStory = () => {
    setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1))
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1))
  }

  return (
    <section id="stories" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real-Life Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experiences from families who have navigated virtual autism concerns.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-10 relative">
          <Card className="border-teal-200 dark:border-teal-800">
            <CardContent className="p-6 md:p-10">
              <Quote className="h-12 w-12 text-teal-200 dark:text-teal-800 mb-4" />
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold">{stories[currentStory].name}</h3>
                  <span className="text-sm text-muted-foreground">({stories[currentStory].age})</span>
                </div>
                <p className="text-muted-foreground">{stories[currentStory].story}</p>
                <div className="pt-4 italic">— {stories[currentStory].parent}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            <Button variant="outline" size="icon" onClick={prevStory} aria-label="Previous story">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {stories.map((_, index) => (
              <Button
                key={index}
                variant={currentStory === index ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentStory(index)}
                aria-label={`Story ${index + 1}`}
                aria-current={currentStory === index ? "true" : "false"}
              >
                {index + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextStory} aria-label="Next story">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Important Note About These Stories</h3>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              These stories represent individual experiences and should not be taken as medical advice or typical
              outcomes. Every child is unique, and developmental concerns should always be evaluated by qualified
              healthcare professionals. These narratives are shared to illustrate the potential impact of screen time
              reduction and increased social interaction, not to suggest that all children will have similar
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

