import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import formatPrice from "../../../utils/formatPrice"
import RatingStars from "../../Common/RatingStars"

function Course_Card({ course, Height }) {
  // const avgReviewCount = GetAvgRating(course.ratingAndReviews)
  // console.log(course.ratingAndReviews)
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])
  // console.log("count............", avgReviewCount)

  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="group rounded-2xl border border-richblack-700 p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
          <div className="overflow-hidden rounded-xl">
            <img
              src={course?.thumbnail}
              alt="course thumbnail"
              className={`${Height} w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105`}
            />
          </div>
          <div className="flex flex-col gap-1.5 px-2 py-3">
            <p className="text-lg font-semibold text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-300">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-brown-200">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-sm text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-xl font-bold text-richblack-5">{formatPrice(course?.price)}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Course_Card
