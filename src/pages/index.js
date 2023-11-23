import Head from "next/head";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import { Hero } from "@/layouts/hero";
import { Section } from "@/layouts/section";
import { UserCard } from "@/components/userCard";
import { People } from "@/utilities/people";
import { useKeenSlider } from "keen-slider/react";

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
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
    },
    {
      slideChanged() {
        console.log("slide changed");
      },
    }
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
      <Section cols={2}>
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

      <Section cols={1} customStyle={"bg-themeLight p-10 rounded-xl"}>
        <div className="w-full">
          <Section cols={2}>
            <div className="text-start">
              <h2 className="sm:text-5xl">
                About <span className="text-primary">Us</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
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
          </Section>
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}
