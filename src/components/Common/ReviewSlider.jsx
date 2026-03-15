import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apis"

// Shown only when the database has no real reviews yet.
const dummyReviews = [
  {
    user: { firstName: "Aarav", lastName: "Sharma", image: "" },
    course: { courseName: "Full Stack Web Development" },
    review: "Started with zero code. Now I build full websites on my own.",
    rating: 5,
  },
  {
    user: { firstName: "Priya", lastName: "Nair", image: "" },
    course: { courseName: "UI/UX Design" },
    review: "The instructor never rushes. I could pause, redo, and actually get it.",
    rating: 5,
  },
  {
    user: { firstName: "Rohan", lastName: "Mehta", image: "" },
    course: { courseName: "Data Science with Python" },
    review: "Switched careers at 28 and was terrified. The projects got me interview-ready.",
    rating: 5,
  },
  {
    user: { firstName: "Sneha", lastName: "Reddy", image: "" },
    course: { courseName: "Python for Beginners" },
    review: "Short lessons I can finish on my Metro commute. Easy on a phone too.",
    rating: 5,
  },
  {
    user: { firstName: "Vikram", lastName: "Singh", image: "" },
    course: { courseName: "DSA & Problem Solving" },
    review: "The DSA section is the real deal. Cleared two product-company rounds after.",
    rating: 5,
  },
  {
    user: { firstName: "Ananya", lastName: "Iyer", image: "" },
    course: { courseName: "Full Stack Web Development" },
    review: "Bought it on a sale and finished in five weeks. Genuinely enjoyed it.",
    rating: 4,
  },
  {
    user: { firstName: "Karthik", lastName: "Menon", image: "" },
    course: { courseName: "Cloud Computing Essentials" },
    review: "Doubts get answered fast and the notes are clean. Felt properly supported.",
    rating: 5,
  },
  {
    user: { firstName: "Neha", lastName: "Gupta", image: "" },
    course: { courseName: "UI/UX Design" },
    review: "First online course I've ever finished without losing interest halfway.",
    rating: 4,
  },
]

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 30

  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  // console.log(reviews)

  // Use real reviews when available, otherwise fall back to sample reviews.
  const displayReviews = reviews && reviews.length > 0 ? reviews : dummyReviews

  return (
    <div className="w-full text-richblack-5">
      <h2 className="mt-8 text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        Loved by learners
      </h2>
      <div className="mx-auto my-[40px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
        >
          {displayReviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex h-[160px] flex-col gap-3 rounded-2xl border border-richblack-700 bg-richblack-800 p-4 text-[14px] text-richblack-25">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
