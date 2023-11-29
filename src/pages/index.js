import Head from "next/head";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import { Hero } from "@/layouts/hero";
import { Section } from "@/layouts/section";
import { UserCard } from "@/components/userCard";
import { People } from "@/utilities/people";
import { useKeenSlider } from "keen-slider/react";

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  const sliderControls = (
    <>
      <button
        aria-label="Previous slide"
        id="keen-slider-previous-desktop"
        onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
        className="rounded-xl border border-primary p-1 text-primary transition hover:bg-primary hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 rtl:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        id="keen-slider-next-desktop"
        onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
        className="rounded-xl border border-primary p-1 text-primary transition hover:bg-primary hover:text-white"
      >
        <svg
          className="h-5 w-5 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </>
  );
  return (
    <div>
      <Head>
        <title>runit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNavbar />
      <Hero
        title={"Plan and Organize events with runit!"}
        desc={
          <>
            With runit, we aim to build the most user friendly event match
            making interface while providing users with myriads of social-media
            like functionalities.
          </>
        }
        height={"h-[33rem]"}
        logoWidth={"w-10/12"}
      />
      <Section cols={2} id="about">
        <div className="order-last text-start">
          <h2 className="sm:text-5xl">Events</h2>
          <p>   
            Customize your experience by creating events tailored to your preferences. 
            Choose from real-time happenings or design events to your liking. 
            Set specific details such as time, participant limits, and effortlessly 
            manage event status. Need to make adjustments? Easily cancel or modify 
            events with just a few clicks. Your event, your way—seamless, flexible, 
            and at your fingertips!   
          </p>
        </div>
        <div>
          <img
            // src="/runit.png"
            className=""
            alt="runit Logo"
          />
        </div>
      </Section>
      <Section cols={2}>
        <div className="text-start">
          <h2 className="sm:text-5xl">Collaboration</h2>
          <p>
            Dive into the world of shared experiences. 
            Join other exciting events or open your doors for others to join yours. 
            Receive instant notifications for join requests, making it easy to accept 
            applicants and manage your event community. Engage in conversations with comments, 
            make impactful announcements, and send notifications to keep everyone in the loop. 
            Collaborate seamlessly, connect effortlessly—because every event is an opportunity 
            to create lasting moments together!
          </p>
        </div>
        <div>
          <img
            // src="/runit.png"
            className=""
            alt="runit Logo"
          />
        </div>
      </Section>
      <Section cols={2}>
        <div className="order-last  text-start">
          <h2 className="sm:text-5xl">Security & Profile</h2>
          <p>
            Explore a variety of tabs for a personalized experience. 
            Review your activity history on your profile or check out others' 
            public activities. Navigate the calendar tab to view events by 
            selecting a date, and explore others' calendars. Manage your connections 
            by viewing users you've given stars to and easily unstar them. 
            Take control of your security with a dedicated tab to change your password. 
            Have feedback for us? Use the dedicated tab to send your thoughts directly 
            to the developers. Your profile, your security—tailored to your preferences.
          </p>
        </div>
        <div>
          <img
            // src="/runit.png"
            className=""
            alt="runit Logo"
          />
        </div>
      </Section>

      <Section
        cols={1}
        customStyle={"bg-themeLight p-10 rounded-xl"}
        id="people"
      >
        <div className="w-full">
          <Section cols={2}>
            <div className="text-start">
              <h2 className="sm:text-5xl">
                The <span className="text-primary">Devs</span>
              </h2>
              <p>
                Meet the developers behind runit—each contributing their expertise 
                to bring you an exceptional experience. Our backend and frontend developers 
                are passionate about crafting seamless solutions. Have feedback or suggestions? 
                Feel free to reach out to them. Your input is valuable in shaping the future of runit!
              </p>

              <div className="md:flex py-2 lg:py-4 gap-4 hidden">
                {sliderControls}
              </div>
            </div>
            <div ref={sliderRef} className="keen-slider">
              {People().map((item, index) => {
                return (
                  <div
                    key={index}
                    className="keen-slider__slide text-start flex justify-center"
                  >
                    <UserCard
                      userName={item.userName}
                      title={item.title}
                      img={item.img}
                      description={item.description}
                      lowerContent={item.lowerContent}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex py-6 lg:py-4 gap-4 md:hidden justify-center">
              {sliderControls}
            </div>
          </Section>
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}
