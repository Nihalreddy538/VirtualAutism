import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Users, Calendar, Lightbulb, Heart } from "lucide-react"

export default function RecommendationsSection() {
  return (
    <section id="resources" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recommendations & Resources</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Practical guidance for parents and educators to promote healthy development.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-10">
          <Tabs defaultValue="parents" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="parents">For Parents</TabsTrigger>
              <TabsTrigger value="educators">For Educators</TabsTrigger>
            </TabsList>

            <TabsContent value="parents" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div className="space-y-2">
                        <h3 className="font-bold">Screen Time Guidelines</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Ages 0-18 months: No screen time except video chatting</li>
                          <li>Ages 18-24 months: Limited high-quality programming with adult interaction</li>
                          <li>Ages 2-5 years: Maximum 1 hour per day of quality content</li>
                          <li>Ages 6+: Consistent limits on time and content type</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div className="space-y-2">
                        <h3 className="font-bold">Creating Healthy Routines</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Establish consistent screen-free times (meals, bedtime)</li>
                          <li>Create screen-free zones in your home</li>
                          <li>Use visual timers to help children understand time limits</li>
                          <li>Plan alternative activities in advance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div className="space-y-2">
                        <h3 className="font-bold">Promoting Social Interaction</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Prioritize face-to-face family time daily</li>
                          <li>Arrange playdates and social opportunities</li>
                          <li>Engage in back-and-forth conversation throughout the day</li>
                          <li>Narrate daily activities to build language skills</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div className="space-y-2">
                        <h3 className="font-bold">Alternative Activities</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Reading books together daily</li>
                          <li>Outdoor exploration and nature play</li>
                          <li>Arts, crafts, and sensory activities</li>
                          <li>Building with blocks and construction toys</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Recommended Resources for Parents</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Books</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>"Reset Your Child's Brain" by Victoria Dunckley, MD</li>
                        <li>"The Art of Screen Time" by Anya Kamenetz</li>
                        <li>"Raising Humans in a Digital World" by Diana Graber</li>
                        <li>"Screen-Free Fun" by Shannon Philpott-Sanders</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Organizations & Websites</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>American Academy of Pediatrics - HealthyChildren.org</li>
                        <li>Common Sense Media - Screen Time Resources</li>
                        <li>Campaign for a Commercial-Free Childhood</li>
                        <li>Center on Media and Child Health</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="educators" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Lightbulb className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div className="space-y-2">
                        <h3 className="font-bold">Classroom Strategies</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Limit screen use to specific educational purposes</li>
                          <li>Balance digital activities with hands-on learning</li>
                          <li>Incorporate movement breaks throughout the day</li>
                          <li>Create opportunities for face-to-face collaboration</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      <div className="space-y-2">
                        <h3 className="font-bold">Supporting Social Development</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Facilitate structured social interactions</li>
                          <li>Teach and model social skills explicitly</li>
                          <li>Create inclusive environments for all children</li>
                          <li>Use visual supports for children who need additional help</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Parent Communication</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Educators play a vital role in sharing information with families about healthy development and
                      screen habits:
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium">Information Sharing</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Share age-appropriate screen time guidelines</li>
                          <li>Provide resources on digital wellbeing</li>
                          <li>Discuss signs of problematic screen use</li>
                          <li>Offer alternatives to screen-based activities</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Collaborative Approach</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Partner with parents on consistent approaches</li>
                          <li>Acknowledge challenges families face</li>
                          <li>Celebrate progress and improvements</li>
                          <li>Connect families with additional resources when needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Professional Development Resources</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Training & Courses</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Media Literacy Education Professional Development</li>
                        <li>Early Childhood Technology Integration Courses</li>
                        <li>Social-Emotional Learning Workshops</li>
                        <li>Developmental Screening and Referral Training</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Educational Resources</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>National Association for the Education of Young Children</li>
                        <li>Edutopia - Technology Integration Resources</li>
                        <li>PBS Teachers - Digital Media Literacy</li>
                        <li>Zero to Three - Early Development Resources</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

