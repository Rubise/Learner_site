import spark from "./sparks.png"
import book from './book.png'
import library from './library.png'
import { ChartNoAxesColumnIncreasing, Clock, BookOpen, CreditCard, Rocket, Send } from 'lucide-react'


 export const images = { spark, book, library}

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
        name: "web-development",
        image1 : library,
        image2 : ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "8 weeks",
        level: "Beginner",
        course: "Web development fundamentals",
        pack: "Learn Html, css, and javascript from scratch. Build real website.",
        price: "25,000",
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
        name: "graphics-design-essentials",
        image1: library,
        image2: ChartNoAxesColumnIncreasing,
        image3: Clock,
        duration: "5 Weeks",
        level: "Beginner",
        course: "Graphics Design Essentials",
        pack: "create stunning visuals using professional design tools.",
        price: "30,000"
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
        price: "45,000"
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
        price: "50,000"
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
        price: "20,000"
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

