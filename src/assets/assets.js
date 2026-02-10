import spark from "./sparks.png"
import book from './book.png'
import library from './library.png'
import { ChartNoAxesColumnIncreasing, Clock, BookOpen, CreditCard, Rocket } from 'lucide-react'

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


 export const makePayment = [
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


