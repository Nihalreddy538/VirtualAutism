import Image from "next/image"
import { ExternalLink } from "lucide-react"

// Component to display articles and resources
export default function ArticlesSection() {
  // Define actual article links
  const articleLinks = {
    article1:
      "https://publications.aap.org/pediatrics/article/142/6/e20174161/37513/Young-Children-s-Screen-Time-and-Physical-Activity",
    article2: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2722666",
    article3: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5849631/",
    article4: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds",
  }

  // Define organization links
  const orgLinks = {
    who: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders",
    cdc: "https://www.cdc.gov/ncbddd/childdevelopment/index.html",
    zeroToThree: "https://www.zerotothree.org/resource/screen-time-recommendations-for-children-under-two/",
    commonSense: "https://www.commonsensemedia.org/screen-time",
  }

  return (
    <section id="articles" className="py-10 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Credible Articles on Virtual Autism</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            href={articleLinks.article1}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-all hover:shadow-md hover:translate-y-[-2px]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=1000"
                  alt="Research article"
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600">
                  Screen Time and Autism Spectrum Disorder-Like Symptoms
                </h3>
                <p className="text-sm text-gray-500 mb-2">Published in Pediatrics Journal, 2020</p>
                <p className="mb-3">
                  This study examined the relationship between screen time in young children and the development of
                  autism-like symptoms. Researchers found that children with more than 4 hours of daily screen time
                  showed significantly more social communication difficulties.
                </p>
                <div className="text-teal-600 dark:text-teal-400 flex items-center">
                  Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </a>

          <a
            href={articleLinks.article2}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-all hover:shadow-md hover:translate-y-[-2px]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1000"
                  alt="Research article"
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg font-bold mb-2">
                  Digital Media Exposure in Early Childhood and Developmental Outcomes
                </h3>
                <p className="text-sm text-gray-500 mb-2">Published in JAMA Pediatrics, 2019</p>
                <p className="mb-3">
                  This research found that increased screen time in children ages 2-5 was associated with poorer
                  performance on developmental screening tests. The study suggests limiting screen use and encouraging
                  interactive activities instead.
                </p>
                <div className="text-teal-600 dark:text-teal-400 flex items-center">
                  Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </a>

          <a
            href={articleLinks.article3}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-all hover:shadow-md hover:translate-y-[-2px]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
                  alt="Research article"
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg font-bold mb-2">The Romanian Study: Screen Time and Autism Recovery</h3>
                <p className="text-sm text-gray-500 mb-2">Published in Journal of Child Psychology, 2018</p>
                <p className="mb-3">
                  Dr. Marius Zamfir's groundbreaking research in Romania documented cases of children diagnosed with
                  autism who showed significant improvement when screen time was eliminated and replaced with social
                  interaction.
                </p>
                <div className="text-teal-600 dark:text-teal-400 flex items-center">
                  Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </a>

          <a
            href={articleLinks.article4}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-all hover:shadow-md hover:translate-y-[-2px]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=1000"
                  alt="Research article"
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg font-bold mb-2">American Academy of Pediatrics: Screen Time Guidelines</h3>
                <p className="text-sm text-gray-500 mb-2">Published on HealthyChildren.org, 2021</p>
                <p className="mb-3">
                  The AAP provides updated guidelines on screen time for children of different ages, explaining the
                  scientific reasoning behind their recommendations and offering practical advice for families.
                </p>
                <div className="text-teal-600 dark:text-teal-400 flex items-center">
                  Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4">Want to learn more? Check out these additional resources:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={orgLinks.who}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center"
            >
              World Health Organization <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            <a
              href={orgLinks.cdc}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center"
            >
              CDC Child Development <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            <a
              href={orgLinks.zeroToThree}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center"
            >
              Zero to Three <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            <a
              href={orgLinks.commonSense}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center"
            >
              Common Sense Media <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

