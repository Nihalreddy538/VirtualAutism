import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Clock, Users, BrainCircuit } from "lucide-react"

export default function CausesSection() {
  return (
    <section id="causes" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Causes of Virtual Autism</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Understanding the factors that contribute to virtual autism can help parents and caregivers make informed
              decisions.
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                <Smartphone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Excessive Screen Time</h3>
                <p className="text-muted-foreground">
                  Young children exposed to screens for multiple hours daily miss out on essential real-world
                  interactions that build neural pathways.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Early Age Exposure</h3>
                <p className="text-muted-foreground">
                  The earlier and more frequent the screen exposure, particularly before age 2, the greater the
                  potential impact on development.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Reduced Human Interaction</h3>
                <p className="text-muted-foreground">
                  When screens replace face-to-face interaction, children miss crucial opportunities to develop social
                  and communication skills.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-3">
                <BrainCircuit className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Neurological Impact</h3>
                <p className="text-muted-foreground">
                  Fast-paced screen content can overstimulate developing brains and alter attention patterns and sensory
                  processing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 space-y-4 text-center">
          <h3 className="text-2xl font-bold">Contributing Factors</h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Modern lifestyle factors have contributed to increased screen use among young children:
          </p>
          <ul className="mx-auto mt-6 max-w-[600px] space-y-2 text-left">
            <li className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              <span>Busy parent schedules and the convenience of digital babysitting</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              <span>Marketing of educational apps and content for infants and toddlers</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              <span>Increased availability and accessibility of digital devices</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              <span>Decreased outdoor play and face-to-face social interaction opportunities</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400"></div>
              <span>Parental screen habits modeling behavior for children</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

