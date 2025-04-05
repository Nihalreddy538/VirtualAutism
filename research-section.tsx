import { Card, CardContent } from "@/components/ui/card"
import { FileText, BookOpen, BarChart } from "lucide-react"

export default function ResearchSection() {
  return (
    <section id="research" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research Findings</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Emerging research is exploring the relationship between screen time and autism-like symptoms in young
              children.
            </p>
          </div>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-2">
                  <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">Key Studies</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Romania Study (2017)</h4>
                  <p className="text-sm text-muted-foreground">
                    Research in Romania found that some children diagnosed with autism showed significant improvement
                    when screen time was eliminated and replaced with human interaction.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Screen Time and Development (2019)</h4>
                  <p className="text-sm text-muted-foreground">
                    A study published in JAMA Pediatrics found that increased screen time in children aged 2-5 was
                    associated with poorer performance on developmental screening tests.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Brain Development Research (2020)</h4>
                  <p className="text-sm text-muted-foreground">
                    Neuroimaging studies have shown differences in brain structure and function in children with high
                    screen use compared to those with limited exposure.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-2">
                  <BarChart className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">Statistical Trends</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Rising Diagnoses</h4>
                  <p className="text-sm text-muted-foreground">
                    The increase in autism diagnoses has paralleled the rise in early childhood screen exposure, though
                    correlation does not prove causation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Screen Time Metrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Studies show that children under 2 years old in many countries are getting 2-3 hours of screen time
                    daily, far exceeding recommendations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Intervention Outcomes</h4>
                  <p className="text-sm text-muted-foreground">
                    Data suggests that approximately 75-80% of children with virtual autism symptoms show improvement
                    with screen reduction and increased social interaction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-teal-100 dark:bg-teal-900/30 p-2">
                  <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">Expert Perspectives</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Dr. Marius Zamfir</h4>
                  <p className="text-sm text-muted-foreground">
                    Romanian psychologist who first observed the phenomenon, noting that some children diagnosed with
                    autism showed remarkable improvement when screen time was eliminated.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">American Academy of Pediatrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Recommends no screen time for children under 18-24 months, except for video chatting, and limited
                    high-quality programming with adult co-viewing for older toddlers.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Developmental Specialists</h4>
                  <p className="text-sm text-muted-foreground">
                    Many experts emphasize that while virtual autism is not an official diagnosis, the impact of
                    excessive screen time on development warrants serious attention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center">Research Limitations</h3>
            <p className="text-center text-muted-foreground">
              It's important to note the current limitations in research on virtual autism:
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  <h4 className="font-medium">Limited Long-term Studies</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-4">
                  Few longitudinal studies have tracked children with virtual autism symptoms over many years to
                  document long-term outcomes.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  <h4 className="font-medium">Correlation vs. Causation</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-4">
                  Research has not definitively established whether screen time causes these symptoms or if children
                  with developmental differences are more drawn to screens.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  <h4 className="font-medium">Sample Size Considerations</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-4">
                  Many studies have relatively small sample sizes, which can limit the generalizability of findings.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                  <h4 className="font-medium">Confounding Variables</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-4">
                  Other factors like parenting styles, socioeconomic status, and genetic predispositions may influence
                  outcomes alongside screen time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

