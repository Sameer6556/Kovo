import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Human-readable browser-tab titles per route. Dynamic routes (course /
// catalog pages) fall back to the brand name and let the page set its own.
const TITLES = {
  "/": "Kovo — Learn real, job-ready skills",
  "/about": "About · Kovo",
  "/contact": "Contact · Kovo",
  "/login": "Log in · Kovo",
  "/signup": "Sign up · Kovo",
  "/verify-email": "Verify email · Kovo",
  "/forgot-password": "Reset password · Kovo",
  "/dashboard/my-profile": "My Profile · Kovo",
  "/dashboard/enrolled-courses": "Enrolled Courses · Kovo",
  "/dashboard/cart": "Cart · Kovo",
  "/dashboard/settings": "Settings · Kovo",
  "/dashboard/instructor": "Instructor Dashboard · Kovo",
  "/dashboard/my-courses": "My Courses · Kovo",
  "/dashboard/add-course": "Add Course · Kovo",
}

// Scrolls to the top and updates the document title whenever the route changes,
// so navigating never lands mid-scroll and the browser tab stays meaningful.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] || "Kovo"
  }, [pathname])

  return null
}
