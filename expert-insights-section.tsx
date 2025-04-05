import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExpertInsightsSection() {
  return (
    <section id="expert-insights" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expert Insights</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Perspectives from professionals in child development, psychology, and neuroscience.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-10">
          <Tabs defaultValue="pediatrician" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pediatrician">Pediatrician</TabsTrigger>
              <TabsTrigger value="psychologist">Psychologist</TabsTrigger>
              <TabsTrigger value="researcher">Researcher</TabsTrigger>
            </TabsList>

            <TabsContent value="pediatrician" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start space-y-2 md:w-1/3">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" alt="Dr. Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground">Developmental Pediatrician</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <blockquote className="italic border-l-4 border-teal-600 dark:border-teal-400 pl-4 py-2">
                        "In my practice, I've observed a concerning trend of very young children with significant
                        developmental delays who have had extensive screen exposure from infancy. What's remarkable is
                        how many of these children show improvement when parents implement screen-free periods and
                        increase face-to-face interaction."
                      </blockquote>
                      <p className="text-muted-foreground">
                        Dr. Johnson emphasizes that while screens themselves aren't inherently harmful, they can
                        displace the essential interactions and experiences that build healthy brains during critical
                        developmental windows. She recommends that parents prioritize direct interaction, outdoor play,
                        and hands-on experiences, especially during the first three years of life.
                      </p>
                      <p className="text-muted-foreground">
                        "The developing brain needs responsive, contingent interaction—something that even the best
                        digital content cannot provide. When a baby babbles and a parent responds, or when a toddler
                        points and receives appropriate language input, these serve as building blocks for communication
                        and social development."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="psychologist" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start space-y-2 md:w-1/3">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" alt="Dr. Michael Chen" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg">Dr. Michael Chen</h3>
                        <p className="text-sm text-muted-foreground">Child Psychologist</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <blockquote className="italic border-l-4 border-teal-600 dark:border-teal-400 pl-4 py-2">
                        "The concept of virtual autism highlights an important consideration in child development:
                        environmental factors can significantly influence how children's brains develop and how they
                        learn to interact with the world. While we must be careful not to oversimplify complex
                        developmental conditions, we should take seriously the impact of early experiences."
                      </blockquote>
                      <p className="text-muted-foreground">
                        Dr. Chen notes that children learn about emotions, social cues, and communication through
                        thousands of micro-interactions with caregivers and peers—experiences that cannot be replicated
                        through screens. He emphasizes that for children showing developmental concerns, a comprehensive
                        approach is essential.
                      </p>
                      <p className="text-muted-foreground">
                        "When parents express concerns about their child's development, I always include questions about
                        media use as part of my assessment. Reducing screen time is often one component of a broader
                        intervention plan that might include speech therapy, play-based learning, and parent coaching on
                        responsive interaction techniques."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="researcher" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start space-y-2 md:w-1/3">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" alt="Dr. Elena Rodriguez" />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg">Dr. Elena Rodriguez</h3>
                        <p className="text-sm text-muted-foreground">Neuroscience Researcher</p>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <blockquote className="italic border-l-4 border-teal-600 dark:border-teal-400 pl-4 py-2">
                        "Our research on early brain development shows that the type of stimulation children receive
                        directly affects neural pathway formation. The rapid visual and auditory stimulation from
                        screens activates different neural circuits than the multisensory, socially contingent
                        experiences of real-world interaction."
                      </blockquote>
                      <p className="text-muted-foreground">
                        Dr. Rodriguez explains that while research on virtual autism is still emerging, studies on brain
                        development provide important context. The brain's plasticity—its ability to change in response
                        to experience—is at its peak during early childhood, making young children both vulnerable to
                        negative influences and responsive to positive interventions.
                      </p>
                      <p className="text-muted-foreground">
                        "What's particularly interesting is how the brain's reward systems respond to digital stimuli.
                        Screens can provide immediate, predictable rewards that activate dopamine pathways, potentially
                        making real-world interactions, which are more complex and less predictable, seem less engaging
                        by comparison. This may help explain why some children become so fixated on screens and
                        resistant to other activities."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 bg-teal-50 dark:bg-teal-950/20 rounded-lg p-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Expert Recommendations</h3>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Common recommendations from experts across disciplines:
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-6">
              <div className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-2">Prevention</h4>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Follow age-appropriate screen time guidelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Prioritize face-to-face interaction from birth</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Create screen-free zones and times</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-2">Intervention</h4>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Seek professional evaluation for concerns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Implement a gradual screen reduction plan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Increase interactive play and outdoor activities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-teal-600 dark:text-teal-400 mb-2">Support</h4>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Connect with parent support groups</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Consider developmental therapies if needed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5"></div>
                    <span>Maintain consistent routines and expectations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

