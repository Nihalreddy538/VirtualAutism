"use client"

import { useState } from "react"
import { FileText, Download, ExternalLink } from "lucide-react"

export default function VideoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  // PDF resources with actual URLs
  const pdfResources = [
    {
      title: "Virtual Autism: A Comprehensive Guide",
      description: "24-page guide on virtual autism",
      size: "2.4 MB",
      url: "https://www.autismspeaks.org/sites/default/files/2018-08/Parents%20Guide%20to%20Autism.pdf",
    },
    {
      title: "Screen Time and Child Development: Research Summary",
      description: "Research findings on screen time effects",
      size: "1.8 MB",
      url: "https://www.who.int/docs/default-source/documents/guidelines-on-physical-activity-sleep-and-screen-time.pdf",
    },
  ]

  return (
    <section id="video" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expert Insights</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Watch this informative TEDx talk about autism and explore our downloadable resources.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mb-16">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="animate-pulse flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">Loading video...</p>
                </div>
              </div>
            )}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sgOIGv2Vvvs"
              title="TEDx Talk on Autism"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold">
              Autism is a difference, not a disorder | Katie Forbes | TEDxAberdeen
            </h3>
            <p className="text-muted-foreground mt-2">
              In this insightful TEDx talk, Katie Forbes challenges conventional perspectives on autism and discusses
              how understanding autism as a difference rather than a disorder can transform our approach to
              neurodiversity.
            </p>
          </div>
        </div>

        <div className="space-y-4 mt-16">
          <h3 className="text-2xl font-bold text-center">Downloadable Resources</h3>
          <p className="text-center text-muted-foreground mb-6">
            Access these guides about autism and screen time to learn more about the topic.
          </p>

          <div className="max-w-2xl mx-auto space-y-4">
            {pdfResources.map((resource, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-4 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {resource.description} ({resource.size})
                    </p>
                  </div>
                </div>
                <div className="flex mt-3 space-x-2 justify-end">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" /> View PDF
                  </a>
                  <a
                    href={resource.url}
                    download
                    className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <Download className="h-4 w-4 mr-1" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

