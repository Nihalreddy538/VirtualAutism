"use client"

import { useState } from "react"

// Interactive symptoms checker component
export default function SymptomsChecker() {
  // State for tracking current question and answers
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  // Debugging
  console.log("Current answers:", answers)

  // Questions for the quiz
  const questions = [
    {
      question: "How much screen time does your child have daily?",
      options: ["Less than 1 hour", "1-2 hours", "2-4 hours", "More than 4 hours"],
    },
    {
      question: "Does your child make eye contact when talking to others?",
      options: ["Yes, consistently", "Sometimes", "Rarely", "Almost never"],
    },
    {
      question: "How does your child react when screen time ends?",
      options: [
        "Transitions easily to other activities",
        "Shows minor frustration but moves on",
        "Gets upset but calms down quickly",
        "Has major tantrums or meltdowns",
      ],
    },
    {
      question: "Does your child engage in pretend play?",
      options: ["Yes, regularly", "Sometimes", "Rarely", "Never"],
    },
    {
      question: "How would you describe your child's speech development?",
      options: [
        "On track or advanced for age",
        "Slightly delayed but progressing",
        "Significantly delayed",
        "Very limited or absent",
      ],
    },
    {
      question: "Does your child show interest in playing with other children?",
      options: [
        "Yes, seeks out other children",
        "Sometimes plays with others",
        "Prefers to play alone but will join occasionally",
        "Avoids playing with other children",
      ],
    },
    {
      question: "Does your child repeat phrases from TV shows or videos instead of speaking normally?",
      options: ["Never or rarely", "Occasionally", "Frequently", "Most of their speech is repeating from videos"],
    },
    {
      question: "At what age did your child start using screens regularly?",
      options: ["After age 2", "Between 18-24 months", "Between 12-18 months", "Before 12 months"],
    },
    {
      question: "Does your child show repetitive movements (like hand-flapping, rocking)?",
      options: ["Never", "Occasionally", "Frequently", "Very often"],
    },
    {
      question: "How does your child respond when called by name?",
      options: ["Almost always responds", "Usually responds", "Sometimes responds", "Rarely or never responds"],
    },
  ]

  // Handle when user selects an answer
  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed, show results
      setShowResults(true)
    }
  }

  // Calculate the result based on answers
  const calculateResult = () => {
    // Calculate total score (0-30)
    // Higher score means higher likelihood of virtual autism symptoms
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0)

    // For debugging
    console.log("Total score:", totalScore)

    if (totalScore <= 7) {
      return {
        risk: "Low Risk",
        color: "bg-green-100 dark:bg-green-900",
        message:
          "Based on your answers, your child shows few signs of virtual autism. Continue to monitor screen time and encourage face-to-face interaction.",
      }
    } else if (totalScore <= 15) {
      return {
        risk: "Moderate Risk",
        color: "bg-yellow-100 dark:bg-yellow-900",
        message:
          "Your child shows some signs that could be related to excessive screen time. Consider reducing screen time and increasing interactive play.",
      }
    } else if (totalScore <= 23) {
      return {
        risk: "High Risk",
        color: "bg-orange-100 dark:bg-orange-900",
        message:
          "Your child shows several signs that may be related to virtual autism. We recommend significantly reducing screen time and consulting with your pediatrician.",
      }
    } else {
      return {
        risk: "Very High Risk",
        color: "bg-red-100 dark:bg-red-900",
        message:
          "Your child shows many signs associated with virtual autism. We strongly recommend eliminating or strictly limiting screen time and seeking professional evaluation.",
      }
    }
  }

  // Reset the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const result = calculateResult()

  return (
    <section id="checker" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Virtual Autism Symptoms Checker</h2>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          {!showResults ? (
            <div>
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-3 border rounded-md hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Your Results</h3>

              <div className={`p-4 rounded-lg mb-6 ${result.color}`}>
                <p className="text-xl font-bold">{result.risk}</p>
                <p className="mt-2">{result.message}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">What to do next:</h4>
                <ul className="text-left list-disc pl-5 space-y-2">
                  <li>Reduce screen time according to age-appropriate guidelines</li>
                  <li>Increase face-to-face interaction and play</li>
                  <li>Read books together daily</li>
                  <li>Spend time outdoors</li>
                  <li>If concerned, consult with your child's doctor</li>
                </ul>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Note: This tool is not a diagnostic instrument. It's designed to help identify potential concerns
                related to screen time.
              </p>

              <button onClick={restartQuiz} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                Take the Quiz Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

