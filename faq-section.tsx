"use client"

import { useState } from "react"

// FAQ section with toggle functionality
export default function FaqSection() {
  // State to track which question is open
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  // Toggle function for opening/closing questions
  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(index)
    }
  }

  // FAQ data
  const faqs = [
    {
      question: "What is virtual autism?",
      answer:
        "Virtual autism is when children show autism-like behaviors because they spend too much time on screens (phones, tablets, TVs) and not enough time interacting with real people. It's not an official medical diagnosis, but many doctors have noticed that some children who spend a lot of time on screens develop problems with communication, social skills, and behavior.",
    },
    {
      question: "Is virtual autism the same as regular autism?",
      answer:
        "No, they're different. Regular autism (Autism Spectrum Disorder) is something children are born with and is related to genetics and brain development. Virtual autism refers to autism-like behaviors that develop because of too much screen time. A key difference is that many children with virtual autism show improvement when screen time is reduced, while regular autism is a lifelong condition.",
    },
    {
      question: "How much screen time is too much for young children?",
      answer:
        "According to experts, children under 18-24 months should have no screen time except video chatting with family. Children 2-5 years old should have no more than 1 hour per day of high-quality programming, ideally with an adult watching with them. Any amount that replaces important activities like face-to-face interaction, physical play, and exploration could be considered too much.",
    },
    {
      question: "What are the warning signs of virtual autism?",
      answer:
        "Warning signs include: delayed speech, reduced eye contact, not responding to name, lack of interest in playing with others, repetitive behaviors, strong attachment to devices, tantrums when screen time ends, and reduced imaginative play. If you notice these signs, it's important to talk to your child's doctor.",
    },
    {
      question: "Can children recover from virtual autism?",
      answer:
        "Many children showing signs of virtual autism improve significantly when screen time is reduced and replaced with interactive play, conversation, and real-world experiences. The degree of improvement varies, but research suggests that many children can develop typical social and communication skills with appropriate changes. Early intervention tends to work better.",
    },
    {
      question: "How should I reduce my child's screen time if they're already used to it?",
      answer:
        "Gradual reduction is usually better than suddenly taking away all screens, which can cause distress. Start by establishing screen-free times and zones, replacing screen time with fun alternatives, being present and interactive during play, and modeling healthy screen habits yourself. Be consistent and prepare for some behavioral challenges during the transition period.",
    },
  ]

  return (
    <section id="faq" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 bg-blue-50 dark:bg-blue-900 font-bold flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                <span>{openQuestion === index ? "−" : "+"}</span>
              </button>

              {openQuestion === index && (
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

