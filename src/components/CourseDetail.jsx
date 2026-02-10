import React from 'react'
import { useParams } from 'react-router-dom'
import { briefProduct } from '../assets/assets'

function CourseDetail() {
    const { name } = useParams()

    const url = decodeURIComponent(name)
    const course = briefProduct.find((item) => item.name === url);

    
    if (!course) {
        return <h2>Course not found!</h2>;
    }
  return (
    <div>{course.course}</div>
  )
}

export default CourseDetail