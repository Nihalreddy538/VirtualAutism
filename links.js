/**
 * links.js - Central repository for all hyperlinks used in the Virtual Autism Awareness website
 *
 * This file contains all external and internal links used throughout the website.
 * By centralizing links in one file, we make it easier to:
 * 1. Update URLs if they change
 * 2. Track which external resources we're linking to
 * 3. Ensure consistency across the site
 */

// Organization websites
const ORGANIZATION_LINKS = {
  AAP: "https://www.healthychildren.org/English/family-life/Media/Pages/Where-We-Stand-TV-Viewing-Time.aspx",
  WHO: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders",
  CDC: "https://www.cdc.gov/ncbddd/childdevelopment/index.html",
  ZERO_TO_THREE: "https://www.zerotothree.org/resource/screen-time-recommendations-for-children-under-two/",
  COMMON_SENSE_MEDIA: "https://www.commonsensemedia.org/screen-time",
  CAMPAIGN_COMMERCIAL_FREE: "https://commercialfreechildhood.org/",
  CENTER_MEDIA_CHILD_HEALTH: "https://cmch.tv/",
}

// Research articles
const RESEARCH_LINKS = {
  SCREEN_TIME_AUTISM_STUDY:
    "https://publications.aap.org/pediatrics/article/142/6/e20174161/37513/Young-Children-s-Screen-Time-and-Physical-Activity",
  DIGITAL_MEDIA_EXPOSURE: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2722666",
  ROMANIAN_STUDY: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5849631/",
  AAP_GUIDELINES: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds",
}

// Book recommendations
const BOOK_LINKS = {
  RESET_BRAIN: "https://www.amazon.com/Reset-Your-Childs-Brain-Screen-Time/dp/1608682846",
  ART_SCREEN_TIME: "https://www.amazon.com/Art-Screen-Time-Families-Balance/dp/1610396723",
  RAISING_HUMANS: "https://www.amazon.com/Raising-Humans-Digital-World-Helping/dp/0814439799",
  SCREEN_FREE_FUN: "https://www.amazon.com/Screen-Free-Fun-Activities-Imagination-Creativity/dp/1507206305",
}

// Resources for parents
const PARENT_RESOURCES = {
  SCREEN_TIME_GUIDELINES:
    "https://www.healthychildren.org/English/family-life/Media/Pages/Where-We-Stand-TV-Viewing-Time.aspx",
  ALTERNATIVE_ACTIVITIES:
    "https://www.zerotothree.org/resource/beyond-screen-time-give-your-baby-meaningful-experiences/",
  DEVELOPMENT_MILESTONES: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
  PARENT_SUPPORT_GROUPS: "https://www.facebook.com/groups/screenfreeparenting/",
}

// Resources for educators
const EDUCATOR_RESOURCES = {
  NAEYC: "https://www.naeyc.org/resources/topics/technology-and-media",
  EDUTOPIA: "https://www.edutopia.org/topic/technology-integration",
  PBS_TEACHERS: "https://www.pbs.org/education/digital-media-literacy",
  ZERO_TO_THREE_EDUCATORS: "https://www.zerotothree.org/professional-development/professional-resources-educators/",
}

// Internal page links
const PAGE_LINKS = {
  HOME: "#",
  WHAT_IS: "#what-is",
  SYMPTOMS: "#symptoms",
  CHECKER: "#checker",
  CHATBOT: "#chatbot",
  SOLUTIONS: "#solutions",
  ARTICLES: "#articles",
  FAQ: "#faq",
  CONTACT: "contact.html",
  PRIVACY: "privacy.html",
  ABOUT: "about.html",
}

// Social media links
const SOCIAL_LINKS = {
  FACEBOOK: "https://facebook.com/virtualautismawareness",
  TWITTER: "https://twitter.com/vaa_official",
  INSTAGRAM: "https://instagram.com/virtualautismawareness",
  YOUTUBE: "https://youtube.com/c/virtualautismawareness",
}

// Export all link categories
const LINKS = {
  ORGANIZATION_LINKS,
  RESEARCH_LINKS,
  BOOK_LINKS,
  PARENT_RESOURCES,
  EDUCATOR_RESOURCES,
  PAGE_LINKS,
  SOCIAL_LINKS,
}

// For use in browser without import/export
if (typeof window !== "undefined") {
  window.LINKS = LINKS
}

// For use with module imports
if (typeof module !== "undefined" && module.exports) {
  module.exports = LINKS
}

