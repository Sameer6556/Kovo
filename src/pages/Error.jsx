import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-center gap-5 px-4 text-center">
      <p className="text-[80px] font-bold leading-none tracking-tight text-richblack-5 sm:text-[120px]">
        404
      </p>
      <h1 className="text-2xl font-semibold text-richblack-5">
        This page took a wrong turn
      </h1>
      <p className="max-w-md text-richblack-300">
        The page you're looking for doesn't exist or may have been moved. Let's
        get you back on track.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-richblack-5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-richblack-25"
        >
          Back to home
        </Link>
        <Link
          to="/contact"
          className="rounded-full border border-richblack-600 px-6 py-3 text-sm font-semibold text-richblack-5 transition-all duration-200 hover:bg-richblack-800"
        >
          Contact support
        </Link>
      </div>
    </div>
  )
}

export default Error
