import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
        {/* Text */}
        <div className="flex flex-col gap-7 lg:w-[50%]">
          <span className="w-fit rounded-full border border-richblack-600 bg-richblack-800 px-4 py-1 text-[13px] font-medium text-richblack-200">
            For instructors
          </span>
          <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl lg:w-[80%]">
            Become an
            <HighlightText text={"instructor"} />
          </h2>
          <p className="w-[90%] text-[16px] leading-7 text-richblack-300">
            Instructors from around the world teach millions of students on
            Kovo. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:w-[50%]">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-richblack-800" aria-hidden="true"></div>
          <img
            src={Instructor}
            alt="Become an instructor on Kovo"
            className="relative w-full rounded-3xl border border-richblack-700 object-cover shadow-card"
          />
        </div>
      </div>
    </div>
  )
}

export default InstructorSection
