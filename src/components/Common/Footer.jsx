import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import KovoLogo from "../../assets/Logo/Logo-Full-Light.svg";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Practice Sheets",
  "Code Challenges",
  "Docs",
  "Projects",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const FooterColumn = ({ title, items }) => (
  <div>
    <h4 className="text-[14px] font-semibold text-richblack-5">{title}</h4>
    <div className="mt-3 flex flex-col gap-2">
      {items.map((ele, i) => (
        <Link
          key={i}
          to={ele.split(" ").join("-").toLowerCase()}
          className="text-[14px] text-richblack-200 transition-colors hover:text-richblack-5"
        >
          {ele}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t border-richblack-700 bg-richblack-800">
      <div className="mx-auto w-11/12 max-w-maxContent">
        {/* Top grid */}
        <div className="flex flex-col gap-10 border-b border-richblack-700 py-14 lg:flex-row lg:gap-8">
          {/* Brand block */}
          <div className="flex flex-col gap-4 lg:w-[26%]">
            <img
              src={KovoLogo}
              alt="Kovo Logo"
              width={120}
              height={30}
              className="self-start object-contain"
            />
            <p className="max-w-[260px] text-[14px] leading-6 text-richblack-200">
              Kovo is a modern learning platform helping people across India
              build real, job-ready skills — at their own pace.
            </p>
            <div className="mt-1 flex gap-4 text-[18px] text-richblack-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-richblack-5"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-colors hover:text-richblack-5"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-richblack-5"><FaLinkedin /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="transition-colors hover:text-richblack-5"><FaYoutube /></a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <FooterColumn title="Company" items={["About", "Careers", "Affiliates"]} />
            <FooterColumn title="Resources" items={Resources} />
            <FooterColumn title="Plans" items={Plans} />
            <FooterColumn title="Community" items={Community} />

            {FooterLink2.slice(0, 2).map((group, i) => (
              <div key={i}>
                <h4 className="text-[14px] font-semibold text-richblack-5">{group.title}</h4>
                <div className="mt-3 flex flex-col gap-2">
                  {group.links.slice(0, 7).map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.link}
                      className="text-[14px] text-richblack-200 transition-colors hover:text-richblack-5"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-[13px] text-richblack-300 lg:flex-row">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()} Kovo</span>
            <span className="text-richblack-500">•</span>
            <span>Made in India 🇮🇳</span>
            <span className="text-richblack-500">•</span>
            <span>Hyderabad, India</span>
          </div>
          <div className="flex items-center gap-1">
            {BottomFooter.map((ele, i) => (
              <Link
                key={i}
                to={ele.split(" ").join("-").toLowerCase()}
                className={`px-3 transition-colors hover:text-richblack-5 ${
                  i !== BottomFooter.length - 1 ? "border-r border-richblack-600" : ""
                }`}
              >
                {ele}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
