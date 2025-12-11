import logo from "./logo.jpg"
import headerbg from './headebg.jpg'
import dataAnalysis from './dataAnalysis.jpg'
import digitalMarketing from './digitalMarketing.jpg'
import java from './Java.jpg'
import js from './Javascript.jpg'
import python from './pythonBasics.jpg'
import webDesign from './webDesign.jpg'



export const Images = {logo, headerbg}


export const productArray = [
    {
        id: 0,
        image: webDesign,
        desc: "Webdesign",
        level: "Beginner",
        price: "$49",
        button: "Enroll Now",
        productId: "design"
    },
    {
        id: 1,
        image: python,
        desc: "Python basics",
        level: "Beginner",
        price: "$39",
        button: "Enroll Now",
        productId: "pyth"
    },
    {
        id: 2,
        image: digitalMarketing,
        desc: "Digital marketing",
        level: "Intermediate",
        price: "$59",
        button: "Enroll Now",
        productId: "digit"
    },
    {
        id: 3,
        image: dataAnalysis,
        desc: "Data Analysis",
        level: "Advance",
        price: "$120",
        button: "Enroll Now",
        productId: "data"
    },
    {
        id: 4,
        image: java,
        desc: "Java",
        level: "Intermediate",
        price: "$59",
        button: "Enroll Now",
        productId: "java"
    },
    {
        id: 5,
        image: js,
        desc: "Javascript",
        level: "Beginner",
        price: "$39",
        button: "Enroll Now",
        productId: "js"
    }
]