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
        title={"Plan and Organize events with runIt!"}
        desc={
          <>
            With runIt, we aim to build the most user friendly event match
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
