import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-12 md:py-24 bg-teal-50 dark:bg-teal-950/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Take Action Today</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Small changes can make a big difference in your child's development.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-muted-foreground">
              Whether you're concerned about virtual autism or simply want to promote healthy development, taking steps
              to balance screen time with real-world experiences is beneficial for all children.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="#resources">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Explore Resources
                </Button>
              </Link>
              <Link href="#faq">
                <Button size="lg" variant="outline">
                  Read FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-12 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Start Small</h3>
            <p className="text-sm text-muted-foreground">
              Begin with manageable changes like screen-free meals or setting time limits. Small consistent steps are
              more effective than dramatic changes that are difficult to maintain.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Be Consistent</h3>
            <p className="text-sm text-muted-foreground">
              Children thrive with consistent expectations. Establish clear rules about when and how screens can be
              used, and follow through consistently.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Seek Support</h3>
            <p className="text-sm text-muted-foreground">
              You're not alone in this journey. Connect with other parents, educators, and healthcare providers who can
              offer guidance and encouragement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

