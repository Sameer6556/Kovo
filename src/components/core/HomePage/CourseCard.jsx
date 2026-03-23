import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] overflow-hidden rounded-2xl border transition-all duration-200 lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "border-richblack-5 bg-white shadow-card"
          : "border-richblack-700 bg-richblack-800 hover:border-richblack-600"
      } h-[300px] box-border cursor-pointer text-richblack-25`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="flex h-[80%] flex-col gap-3 border-b-2 border-dashed border-richblack-600 p-6">
        <div
          className={` ${
            currentCard === cardData?.heading ? "text-richblack-5" : "text-richblack-25"
          } text-[20px] font-semibold`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessonNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
