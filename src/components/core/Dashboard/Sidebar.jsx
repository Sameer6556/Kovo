import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../Common/ConfirmationModal"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}


// ============================================
// SIDEBAR DRAFT - RESPONSIVE BEHAVIOR
// ============================================

// Mobile sidebar state
// const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
// const [mobileOpen, setMobileOpen] = useState(false);

// Handle resize
// useEffect(() => {
//   const handleResize = () => {
//     const isMobile = window.innerWidth < 768;
//     setCollapsed(isMobile);
//     if (!isMobile) setMobileOpen(false);
//   };
//   window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
// }, []);

// Toggle sidebar
// const toggleSidebar = () => {
//   if (window.innerWidth < 768) {
//     setMobileOpen(!mobileOpen);
//   } else {
//     setCollapsed(!collapsed);
//   }
// };

// Keyboard shortcut to toggle sidebar
// useEffect(() => {
//   const handleKeyDown = (e) => {
//     if (e.key === '[' && (e.ctrlKey || e.metaKey)) {
//       e.preventDefault();
//       toggleSidebar();
//     }
//   };
//   window.addEventListener('keydown', handleKeyDown);
//   return () => window.removeEventListener('keydown', handleKeyDown);
// }, [collapsed, mobileOpen]);

// Close mobile sidebar on route change
// useEffect(() => {
//   setMobileOpen(false);
// }, [location.pathname]);

// TODO: add drag to resize sidebar
// TODO: add sidebar collapse animation
// TODO: persist collapsed state in localStorage
// TODO: add keyboard navigation for sidebar links
// TODO: add sidebar footer with app version
