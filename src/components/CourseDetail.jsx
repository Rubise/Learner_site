import React from 'react'
import { useParams } from 'react-router-dom'
import { allCourse } from '../assets/assets'

function CourseDetail() {
    const { name } = useParams()
    const course = allCourse.find((item) => item.name === name);

  
    if (!course) {
        return <h2>Course not found!</h2>;
    }
  return (
    <div>
      {course.course}
    </div>
  )
}

export default CourseDetail