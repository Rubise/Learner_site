import spark from "./sparks.png"
import book from './book.png'
import library from './library.png'
import { ChartNoAxesColumnIncreasing, Clock, BookOpen, CreditCard, Rocket, Send } from 'lucide-react'
import WebDev from "../pages/WebDev"
import Graphics from "../pages/Graphics"
import Marketing from "../pages/Marketing"
import DataAnalysis from "../pages/DataAnalysis"
import AppDev from "../pages/AppDev"
import Writing from "../pages/Writing"
import crdca from './crdca.png'
// import { syllabus } from "./details"


 export const images = { spark, book, library, crdca}

 export const briefProduct = [
    {
        id: 0,
        name: "web-development",
        image1 : library,
        image2 : ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "8 weeks",
        level: "Beginner",
        course: "Web development fundamentals",
        pack: "Learn Html, css, and javascript from scratch. Build real website.",
        price: "25,000"
    },
    {
        id: 1,
        name: "digital-marketing-mastery",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "6 weeks",
        level: "Beginner",
        course: "Digital Marketing Mastery",
        pack: "Learn to grow business online with proven marketing strategies.",
        price: "35,000"
    },
    {
        id: 2,
        name: " graphics-design-essentials",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "5 Weeks",
        level: "Beginner",
        course: "Graphics Design Essentials",
        pack: "create stunning visuals using professional design tools.",
        price: "30,000"
    }
 ]


 export const howItWorks = [
    {
        id: 0,
        icon: BookOpen,
        action: "Choose a Course",
        step: "01",
        action1: "Browse our catalog and pick a course that matches your goals."
    },
    {
        id: 1,
        icon: CreditCard,
        action: "Make Payment",
        step: "02",
        action1: "Transfer to our account and send your proof of payment."
    },
    {
        id: 2,
        icon: Rocket,
        action: "Start Learning",
        step: "03",
        action1: "Receive instant access and begin your learning journey."
    }
 ]



 export const allCourse = [
    {
        id: 0,
        name: "web-development-fundamentals",
        image1 : library,
        image2 : ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "8 weeks",
        level: "Beginner",
        course: "Web Development Fundamentals",
        pack: "Learn Html, css, and javascript from scratch. Build real website.",
        price: "25,000",
        pages: WebDev,
        description: "Master the core technologies that power the web. This comprehensive course takes you from zero to building beautiful, responsive websites.",
        whatToLearn: ["Build responsive websites from scratch", "Master HTML5 semantic elements", "Style with modern CSS techniques", "Add interactivity with Javascript", "Deploy you websites online",],
        syllabus: ["Introduction to Web Development", "HTML Basics & Structure", "CSS Fundamentals & Layouts", "Responsive Design Principles","JavaScript Essentials", "DOM Manipulation", "Building Your First Project","Deployment & Going Live",]
    },
    {
        id: 1,
        name: "digital-marketing-mastery",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "6 weeks",
        level: "Beginner",
        course: "Digital Marketing Mastery",
        pack: "Learn to grow business online with proven marketing strategies.",
        price: "35,000",
        pages: Marketing,
        description: "Discover the secrets of successful digital marketing. From social media to SEO, learn everything you need to promote any business online.",
        whatToLearn: ["Create effective social media strategies", "Master Facebook & Instagram ads", "Understand SEO fundamentals", "Build email marketing campaigns", "Analyze and improve performance",],
        syllabus: ["Digital Marketing Overview", "Social Media Marketing Strategy", "Facebook Ads Deep Dive", "Instagram Marketing","Search Engine Optimization", "Email Marketing Fundamentals", "Content Marketing","Analytics & Optimization",]

    },
    {
        id: 2,
        name: "graphics-design-essentials",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "5 Weeks",
        level: "Beginner",
        course: "Graphics Design Essentials",
        pack: "create stunning visuals using professional design tools.",
        price: "30,000",
        pages: Graphics,
        description: "Unlock your creative potential with this hands-on graphic design course. Learn industry-standard tools and design principles.",
        whatToLearn: ["Master design fundamentals", "Use Canva like a pro", "Create logos and brand identities", "Design social media graphics", "Build a design portfolio",],
        syllabus: ["Design Principles & Theory", "Color Theory & Typography", "Introduction to Canva", "Logo Design Workshop","Social Media Graphics", "Brand Identity Design", "Print vs Digital Design","Portfolio Building",]
    },
    {
        id: 3,
        name: "Data-analysis-with-python",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "10 Weeks",
        level: "Intermediate",
        course: "Data Analysis WIth Python",
        pack: "Turn data into insights using python and popular library.",
        price: "45,000",
        pages: DataAnalysis,
        description: "Learn to analyze, visualize, and extract insights from data. This course covers Python, Pandas, and data visualization techniques.",
        whatToLearn: ["Write Python code confidently", "Clean and prepare datasets", "Perform statistical analysis", "Create compelling visualizations", "Present data-driven insights"],
        syllabus: ["Python Programming Basics", "Working with Data Types", "Introduction to Pandas", "Data Cleaning Techniques","Exploratory Data Analysis", "Data Visualization with Matplotlib", "Statistical Analysis","Real-World Projects",]
    },
    {
        id: 4,
        name: "mobile-app-development",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "12 Weeks",
        level: "Intermediate",
        course: "Mobile App Development",
        pack: "Build ios and android app with React Native.",
        price: "50,000",
        pages: AppDev,
        description: "Create cross-platform mobile applications that work on both iOS and Android. Learn React Native and ship your first app.",
        whatToLearn: ["Understand mobile app architecture", "Build with React Native", "Handle navigation and state", "Work with APIs and data", "Publish to app stores"],
        syllabus: ["Mobile Development Overview", "React Native Setup", "Components & Styling", "Navigation Patterns","State Management", "Working with APIs", "Native Features & Permissions","App Store Deployment",]
    },
    {
        id: 5,
        name: "professional-business-writing",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "5 Weeks",
        level: "Beginner",
        course: "Professional Business Writing",
        pack: "Create clear, impactful business documents and emails.",
        price: "20,000",
        pages: Writing,
        description: "Master the art of professional communication. Learn to write emails, reports, and proposals that get results.",
        whatToLearn: ["Write clear, concise emails", "Structure business reports", "Create persuasive proposals", "Improve grammar and style", "Communicate with confidence"],
        syllabus: ["Principles of Business Writing", "Email Etiquette & Best Practices", "Report Writing Fundamentals", "Proposal Writing","Grammar & Style Guide", "Editing & Proofreading", "Communication Strategies","Final Assessment",]
    }
 ]

 export const makePayment = [
    {
        id: 0,
        icon: CreditCard,
        action: "Make a Transfer",
        step: "step 1",
        action1: "Transfer the course amount to our bank account using the details below."
    },
    {
        id: 1,
        icon: Send,
        action: "Send Proof",
        step: "step 2",
        action1: "Send a screenshot of your payment receipt to our WhatsApp or Email."
    },
    {
        id: 2,
        icon: Clock,
        action: "Receive Access",
        step: "step 3",
        action1: "You will receive your course access within 2-4 hours after verification."
    }
 ]

 export const accessConditions = [
    "Lifetime access to all lessons",
    "Certificate of completion",
    "Direct support via WhatsApp"
 ]
