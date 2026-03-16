import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import { NavbarLinks } from "../../data/navbar-links"
import KovoLogo from "../../assets/Logo/Logo-Full-Light.svg"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"

// const subLinks = [
//   {
//     title: "Python",
//     link: "/catalog/python",
//   },
//   {
//     title: "javascript",
//     link: "/catalog/javascript",
//   },
//   {
//     title: "web-development",
//     link: "/catalog/web-development",
//   },
//   {
//     title: "Android Development",
//     link: "/catalog/Android Development",
//   },
// ];

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ; (async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        const apiSubLinks = Array.isArray(res?.data?.data) ? res.data.data : []
        setSubLinks(apiSubLinks)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className="sticky top-0 z-50 flex h-16 items-center justify-center border-b border-b-richblack-700 bg-white/80 backdrop-blur-md transition-all duration-200"
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={KovoLogo}
            alt="Kovo Logo"
            width={132}
            height={32}
            className="object-contain"
          />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 text-[15px] font-medium ${matchRoute("/catalog/:catalogName")
                          ? "text-blue-400"
                          : "text-richblack-100 hover:text-richblack-5"
                        }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-xl border border-richblack-700 bg-white p-3 text-richblack-5 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded border-l border-t border-richblack-700 bg-white"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : Array.isArray(subLinks) && subLinks.length ? (
                          <>
                            {subLinks?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-3 pl-4 text-[15px] hover:bg-richblack-800"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`text-[15px] font-medium transition-colors ${matchRoute(link?.path)
                          ? "text-blue-400"
                          : "text-richblack-100 hover:text-richblack-5"
                        }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-blue-400 text-center text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-lg border border-richblack-600 px-[16px] py-[8px] text-[15px] font-medium text-richblack-5 transition-all duration-200 hover:bg-richblack-800">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-lg bg-richblack-5 px-[16px] py-[9px] text-[15px] font-semibold text-white transition-all duration-200 hover:bg-richblack-25">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#71717a" />
        </button>
      </div>
    </div>
  )
}

export default Navbar


// ============================================
// NAVBAR DRAFT CODE - WIP
// ============================================
// Mobile menu state
// const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// const [searchOpen, setSearchOpen] = useState(false);
// const [searchQuery, setSearchQuery] = useState('');
// const [notifications, setNotifications] = useState([]);
// const [showNotifications, setShowNotifications] = useState(false);

// Search functionality draft
// const handleSearch = async (query) => {
//   if (!query.trim()) return;
//   try {
//     console.log('Searching for:', query);
//     // const results = await apiConnector('GET', '/api/v1/course/search', { q: query });
//     // navigate('/search?q=' + encodeURIComponent(query));
//   } catch (err) {
//     console.error('Search failed:', err);
//   }
// };

// Notification polling draft
// useEffect(() => {
//   if (!token) return;
//   const pollNotifications = async () => {
//     try {
//       // const res = await apiConnector('GET', '/api/v1/notifications', null, { Authorization: 'Bearer ' + token });
//       // setNotifications(res.data.notifications || []);
//     } catch (err) {
//       console.error('Failed to fetch notifications:', err);
//     }
//   };
//   pollNotifications();
//   const interval = setInterval(pollNotifications, 30000);
//   return () => clearInterval(interval);
// }, [token]);

// Mobile menu toggle
// const toggleMobileMenu = () => {
//   setMobileMenuOpen(!mobileMenuOpen);
//   document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
// };

// Close mobile menu on route change
// useEffect(() => {
//   setMobileMenuOpen(false);
//   document.body.style.overflow = 'auto';
// }, [location.pathname]);

// Scroll lock when mobile menu is open
// useEffect(() => {
//   if (mobileMenuOpen) {
//     document.body.classList.add('overflow-hidden');
//   } else {
//     document.body.classList.remove('overflow-hidden');
//   }
//   return () => document.body.classList.remove('overflow-hidden');
// }, [mobileMenuOpen]);

// TODO: implement search with debounce
// TODO: add notification dropdown
// TODO: hamburger animation
// TODO: sticky navbar with scroll detection
// TODO: add breadcrumbs
