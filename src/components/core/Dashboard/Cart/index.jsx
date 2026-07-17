import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import RenderCartCourses from "./RenderCartCourses"
import RenderTotalAmount from "./RenderTotalAmount"

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart)
  const { paymentLoading } = useSelector((state) => state.course)

  if (paymentLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="spinner"></div>
      </div>
    )

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
        {totalItems} Courses in Cart
      </p>
      {total > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-richblack-800 text-richblack-300">
            <AiOutlineShoppingCart className="text-3xl" />
          </div>
          <p className="text-2xl font-semibold text-richblack-5">
            Your cart is empty
          </p>
          <p className="max-w-sm text-richblack-300">
            Looks like you haven't added any courses yet. Explore the catalog and
            start learning today.
          </p>
          <Link
            to="/"
            className="mt-2 rounded-full bg-richblack-5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-richblack-25"
          >
            Browse courses
          </Link>
        </div>
      )}
    </>
  )
}
