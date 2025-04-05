// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  // Load links if available
  const LINKS = window.LINKS || {}

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
      console.log("Mobile menu toggled") // For debugging
    })
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  const themeToggleMobile = document.getElementById("theme-toggle-mobile")
  const themeDropdown = document.getElementById("theme-dropdown")
  const themeDropdownMobile = document.getElementById("theme-dropdown-mobile")

  // Function to set theme
  function setTheme(theme) {
    // Remove all theme classes
    document.documentElement.classList.remove("light", "dark")

    if (theme === "system") {
      // Check system preference
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.add(systemPrefersDark ? "dark" : "light")
      document.body.classList.toggle("dark-mode", systemPrefersDark)
    } else {
      // Set specific theme
      document.documentElement.classList.add(theme)
      document.body.classList.toggle("dark-mode", theme === "dark")
    }

    // Update icons
    updateThemeIcon(themeToggle, theme)
    updateThemeIcon(themeToggleMobile, theme)

    // Save preference to localStorage
    localStorage.setItem("theme", theme)

    console.log("Theme set to:", theme) // For debugging

    // Hide dropdowns after selection
    if (themeDropdown) themeDropdown.classList.add("hidden")
    if (themeDropdownMobile) themeDropdownMobile.classList.add("hidden")
  }

  // Toggle theme dropdown visibility
  function toggleThemeDropdown(dropdown) {
    if (!dropdown) return
    dropdown.classList.toggle("hidden")
  }

  function updateThemeIcon(element, theme) {
    if (!element) return

    // Clear existing icon
    element.innerHTML = ""

    // Create new icon based on theme
    const icon = document.createElement("svg")
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    icon.setAttribute("width", "20")
    icon.setAttribute("height", "20")
    icon.setAttribute("viewBox", "0 0 24 24")
    icon.setAttribute("fill", "none")
    icon.setAttribute("stroke", "currentColor")
    icon.setAttribute("stroke-width", "2")
    icon.setAttribute("stroke-linecap", "round")
    icon.setAttribute("stroke-linejoin", "round")

    if (theme === "dark") {
      // Moon icon for dark mode
      icon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>'
    } else if (theme === "light") {
      // Sun icon for light mode
      icon.innerHTML =
        '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'
    } else {
      // Computer icon for system mode
      icon.innerHTML =
        '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>'
    }

    element.appendChild(icon)
  }

  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem("theme") || "system"
  setTheme(savedTheme)

  // Add event listeners for theme toggles
  if (themeToggle) {
    themeToggle.addEventListener("click", () => toggleThemeDropdown(themeDropdown))
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", () => toggleThemeDropdown(themeDropdownMobile))
  }

  // Add event listeners for theme options
  document.querySelectorAll(".theme-option").forEach((option) => {
    option.addEventListener("click", () => {
      const theme = option.dataset.theme
      setTheme(theme)
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (themeToggle && themeDropdown && !themeToggle.contains(e.target) && !themeDropdown.contains(e.target)) {
      themeDropdown.classList.add("hidden")
    }
    if (
      themeToggleMobile &&
      themeDropdownMobile &&
      !themeToggleMobile.contains(e.target) &&
      !themeDropdownMobile.contains(e.target)
    ) {
      themeDropdownMobile.classList.add("hidden")
    }
  })

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("theme") === "system") {
      setTheme("system")
    }
  })

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // FAQ toggle functionality
  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling
      answer.classList.toggle("active")

      // Toggle plus/minus icon
      const icon = question.querySelector(".faq-icon")
      if (icon) {
        icon.textContent = answer.classList.contains("active") ? "−" : "+"
      }
    })
  })

  // Initialize the symptoms checker quiz
  initQuiz()

  // Initialize the chatbot
  initChatbot()

  // Initialize external links
  initExternalLinks()
})

// Function to initialize external links from links.js
function initExternalLinks() {
  // Check if LINKS is available (loaded from links.js)
  if (!window.LINKS) {
    console.warn("Links file not loaded. External links may not work correctly.")
    return
  }

  // Example: Update resource links in the articles section
  const articleLinks = document.querySelectorAll(".article-link")
  articleLinks.forEach((link) => {
    const linkType = link.dataset.linkType
    const linkId = link.dataset.linkId

    if (linkType && linkId && window.LINKS[linkType] && window.LINKS[linkType][linkId]) {
      link.href = window.LINKS[linkType][linkId]
    }
  })

  // Example: Update organization links in the footer
  const orgLinks = document.querySelectorAll(".org-link")
  orgLinks.forEach((link) => {
    const orgId = link.dataset.orgId

    if (orgId && window.LINKS.ORGANIZATION_LINKS && window.LINKS.ORGANIZATION_LINKS[orgId]) {
      link.href = window.LINKS.ORGANIZATION_LINKS[orgId]
    }
  })

  // Example: Update navigation links
  const navLinks = document.querySelectorAll("nav a")
  navLinks.forEach((link) => {
    const pageId = link.dataset.pageId

    if (pageId && window.LINKS.PAGE_LINKS && window.LINKS.PAGE_LINKS[pageId]) {
      link.href = window.LINKS.PAGE_LINKS[pageId]
    }
  })
}

// Quiz functionality
function initQuiz() {
  const quizContainer = document.getElementById("quiz-container")
  const resultsContainer = document.getElementById("results-container")
  const progressBar = document.getElementById("progress-bar")
  const currentQuestionElement = document.getElementById("current-question")
  const totalQuestionsElement = document.getElementById("total-questions")
  const questionText = document.getElementById("question-text")
  const optionsContainer = document.getElementById("options-container")
  const restartButton = document.getElementById("restart-quiz")

  if (!quizContainer || !resultsContainer) return

  // Quiz questions
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

  let currentQuestion = 0
  let answers = []

  // Update total questions display
  if (totalQuestionsElement) {
    totalQuestionsElement.textContent = questions.length
  }

  // Display a question
  function displayQuestion() {
    if (currentQuestionElement) {
      currentQuestionElement.textContent = currentQuestion + 1
    }

    if (progressBar) {
      progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`
    }

    if (questionText) {
      questionText.textContent = questions[currentQuestion].question
    }

    if (optionsContainer) {
      optionsContainer.innerHTML = ""

      questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button")
        button.className = "option w-full text-left p-3 border rounded-md hover:bg-blue-50"
        button.textContent = option
        button.dataset.value = index

        button.addEventListener("click", () => handleAnswer(index))

        optionsContainer.appendChild(button)
      })
    }
  }

  // Handle answer selection
  function handleAnswer(answerIndex) {
    answers.push(answerIndex)

    if (currentQuestion < questions.length - 1) {
      currentQuestion++
      displayQuestion()
    } else {
      showResults()
    }
  }

  // Calculate and show results
  function showResults() {
    if (quizContainer) quizContainer.classList.add("hidden")
    if (resultsContainer) resultsContainer.classList.remove("hidden")

    // Calculate total score (0-30)
    // Higher score means higher likelihood of virtual autism symptoms
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0)

    // For debugging
    console.log("Total score:", totalScore)

    const resultBox = document.getElementById("result-box")
    const riskLevel = document.getElementById("risk-level")
    const resultMessage = document.getElementById("result-message")

    let result

    if (totalScore <= 7) {
      result = {
        risk: "Low Risk",
        color: "bg-green-100",
        message:
          "Based on your answers, your child shows few signs of virtual autism. Continue to monitor screen time and encourage face-to-face interaction.",
      }
    } else if (totalScore <= 15) {
      result = {
        risk: "Moderate Risk",
        color: "bg-yellow-100",
        message:
          "Your child shows some signs that could be related to excessive screen time. Consider reducing screen time and increasing interactive play.",
      }
    } else if (totalScore <= 23) {
      result = {
        risk: "High Risk",
        color: "bg-orange-100",
        message:
          "Your child shows several signs that may be related to virtual autism. We recommend significantly reducing screen time and consulting with your pediatrician.",
      }
    } else {
      result = {
        risk: "Very High Risk",
        color: "bg-red-100",
        message:
          "Your child shows many signs associated with virtual autism. We strongly recommend eliminating or strictly limiting screen time and seeking professional evaluation.",
      }
    }

    if (resultBox) {
      resultBox.className = `p-4 rounded-lg mb-6 ${result.color}`
    }

    if (riskLevel) {
      riskLevel.textContent = result.risk
    }

    if (resultMessage) {
      resultMessage.textContent = result.message
    }
  }

  // Reset the quiz
  function restartQuiz() {
    currentQuestion = 0
    answers = []

    if (quizContainer) quizContainer.classList.remove("hidden")
    if (resultsContainer) resultsContainer.classList.add("hidden")

    displayQuestion()
  }

  // Add event listener for restart button
  if (restartButton) {
    restartButton.addEventListener("click", restartQuiz)
  }

  // Initialize the quiz
  displayQuestion()
}

// Chatbot functionality (simplified version)
function initChatbot() {
  const chatForm = document.getElementById("chat-form")
  const chatInput = document.getElementById("chat-input")
  const chatMessages = document.getElementById("chat-messages")
  const messagesEnd = document.getElementById("messages-end")

  if (!chatForm || !chatInput || !chatMessages) return

  // Initial bot message
  addMessage("assistant", "Hi! I'm Alex, your virtual autism awareness assistant. How can I help you today?")

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const message = chatInput.value.trim()
    if (!message) return

    // Add user message
    addMessage("user", message)
    chatInput.value = ""

    // Show typing indicator
    const typingIndicator = document.createElement("div")
    typingIndicator.className = "bg-gray-100 p-2 rounded-lg max-w-[85%] typing-indicator"
    typingIndicator.innerHTML = `
            <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
        `
    chatMessages.appendChild(typingIndicator)
    scrollToBottom()

    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      // Remove typing indicator
      chatMessages.removeChild(typingIndicator)

      // Add bot response
      let response =
        "I'm sorry, I don't have enough information to answer that question specifically. Virtual autism refers to autism-like symptoms that develop in young children due to excessive screen time. If you have specific questions about symptoms, recommendations, or interventions, I'd be happy to help!"

      // Simple keyword matching for demo purposes
      if (message.toLowerCase().includes("screen time")) {
        response =
          "The American Academy of Pediatrics recommends: no screen time for children under 18-24 months (except video chatting), 1 hour per day of quality programming for ages 2-5, and consistent limits for children 6 and older."
      } else if (message.toLowerCase().includes("symptom") || message.toLowerCase().includes("sign")) {
        response =
          "Common signs of virtual autism include: delayed speech, reduced eye contact, not responding to name, lack of interest in playing with others, repetitive behaviors, and tantrums when screen time ends."
      } else if (message.toLowerCase().includes("help") || message.toLowerCase().includes("what can i do")) {
        response =
          "To help a child showing signs of virtual autism: gradually reduce screen time, increase face-to-face interaction, read books together daily, spend time outdoors, and consult with your child's doctor if you're concerned."
      }

      addMessage("assistant", response)
    }, 1500)
  })

  function addMessage(role, content) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `p-2 rounded-lg max-w-[85%] ${role === "user" ? "bg-blue-100 ml-auto" : "bg-gray-100"}`
    messageDiv.textContent = content

    chatMessages.appendChild(messageDiv)
    scrollToBottom()
  }

  function scrollToBottom() {
    if (messagesEnd) {
      messagesEnd.scrollIntoView({ behavior: "smooth" })
    } else {
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
  }
}

