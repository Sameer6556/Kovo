// Icons Import
import { FaArrowRight } from "react-icons/fa"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Section 1 — Hero (two-column) */}
      <div className="relative mx-auto w-11/12 max-w-maxContent text-richblack-5">
        <div className="grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.3rem]">
              Learn to build with
              <HighlightText text={"coding skills"} />
            </h1>
            <p className="max-w-xl text-[17px] leading-7 text-richblack-300">
              Go from curious to career-ready — learn at your own pace with
              hands-on projects, real-world practice, and feedback from
              instructors who've done the work.
            </p>
            <div className="flex flex-row gap-4">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Start learning free
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Book a demo
              </CTAButton>
            </div>
            {/* stats */}
            <div className="mt-2 flex items-center gap-8 border-t border-richblack-700 pt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">50,000+</span>
                <span className="text-[13px] text-richblack-300">Learners</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">200+</span>
                <span className="text-[13px] text-richblack-300">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">4.8/5</span>
                <span className="text-[13px] text-richblack-300">Avg. rating</span>
              </div>
            </div>
          </div>

          {/* Right: video */}
          <div className="relative">
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-richblack-800"
              aria-hidden="true"
            ></div>
            <div className="relative overflow-hidden rounded-2xl border border-richblack-700 shadow-card">
              <video className="block w-full" muted loop autoPlay>
                <source src={Banner} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center gap-7 text-richblack-5">
        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-richblack-5"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-5">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern world dictates its own terms. Today, being a
                competitive professional takes more than just technical
                skills — it takes the right guidance and real practice.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-richblack-5">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviews from Other Learners — auto-hides when there are none */}
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home


// ============================================
// HOMEPAGE DRAFT SECTIONS
// ============================================

// Stats section draft
// const StatsSection = () => {
//   const stats = [
//     { count: '5K+', label: 'Active Students' },
//     { count: '200+', label: 'Courses' },
//     { count: '50+', label: 'Expert Instructors' },
//     { count: '10K+', label: 'Reviews' },
//   ];
//   return (
//     <div className="bg-richblack-800 py-14">
//       <div className="mx-auto flex w-11/12 max-w-maxContent flex-row justify-between">
//         {stats.map((stat, i) => (
//           <div key={i} className="text-center">
//             <h2 className="text-3xl font-bold text-richblack-5">{stat.count}</h2>
//             <p className="text-richblack-300">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Testimonials section draft
// const TestimonialsSection = () => {
//   const testimonials = [
//     { name: 'John D.', role: 'Student', text: 'Great platform for learning new skills.' },
//     { name: 'Sarah M.', role: 'Instructor', text: 'Easy to create and manage courses.' },
//     { name: 'Mike R.', role: 'Student', text: 'The course quality is amazing.' },
//   ];
//   return (
//     <div className="py-14">
//       <h2 className="text-center text-3xl font-bold text-richblack-5 mb-10">
//         What Our Students Say
//       </h2>
//       <div className="mx-auto flex w-11/12 max-w-maxContent gap-6">
//         {testimonials.map((t, i) => (
//           <div key={i} className="flex-1 rounded-lg bg-richblack-800 p-6">
//             <p className="text-richblack-300 mb-4">"{t.text}"</p>
//             <p className="font-semibold text-richblack-5">{t.name}</p>
//             <p className="text-sm text-richblack-400">{t.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// FAQ section draft  
// const FAQSection = () => {
//   const [openFaq, setOpenFaq] = useState(null);
//   const faqs = [
//     { q: 'How do I enroll in a course?', a: 'Click on the course and hit the Enroll button.' },
//     { q: 'Can I get a refund?', a: 'Yes, within 30 days of purchase.' },
//     { q: 'How do I become an instructor?', a: 'Sign up and select Instructor as your account type.' },
//     { q: 'Are certificates provided?', a: 'Yes, upon completion of a course.' },
//     { q: 'Is there a free trial?', a: 'Some courses offer free preview sections.' },
//   ];
//   return null; // TODO: implement
// };

// Newsletter section draft
// const NewsletterSection = () => (
//   <div className="bg-richblack-800 py-14">
//     <div className="mx-auto w-11/12 max-w-maxContent text-center">
//       <h2 className="text-2xl font-bold text-richblack-5 mb-4">Stay Updated</h2>
//       <p className="text-richblack-300 mb-6">Get the latest courses and updates</p>
//       <div className="flex justify-center gap-3">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="rounded-lg bg-richblack-700 px-4 py-3 text-richblack-5 w-80"
//         />
//         <button className="rounded-lg bg-yellow-50 px-6 py-3 font-semibold text-richblack-900">
//           Subscribe
//         </button>
//       </div>
//     </div>
//   </div>
// );

// TODO: add animated counter for stats
// TODO: add testimonial carousel with swiper
// TODO: add FAQ accordion
// TODO: add newsletter signup
// TODO: add featured courses section
// TODO: add partner logos section
