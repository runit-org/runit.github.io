import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import { Hero } from "@/layouts/hero";
import { Section } from "@/layouts/section";
import { UserImg } from "@/components/userImg";

export default function Home() {
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
        <div className=" text-start">
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
          <h2 className="sm:text-5xl">
            About <span className="text-primary">Us</span>
          </h2>

          <Section cols={2} customStyle={"!gap-1"}>
            <div className="text-start flex justify-center">
              <span className={`${styles.card} sm:p-6 lg:p-4`}>
                <div className="sm:flex sm:justify-start sm:gap-4">
                  <div className="hidden sm:block sm:shrink-0">
                    <UserImg
                      alt="JT"
                      url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Julian Tjiong
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">
                      Backend Developer
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="max-w-[55ch] text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    velit illum provident a, ipsa maiores deleniti consectetur
                    nobis et eaque. amet consectetur adipisicing elit. At velit
                    illum provident a, ipsa maiores deleniti consectetur nobis
                    et eaque.
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-600">
                      Published
                    </dt>
                    <dd className="text-xs text-gray-500">31st June, 2021</dd>
                  </div>

                  <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-600">
                      Reading time
                    </dt>
                    <dd className="text-xs text-gray-500">3 minute</dd>
                  </div>
                </dl>
              </span>
            </div>

            <div className="text-start flex justify-center">
              <span className={`${styles.card} sm:p-6 lg:p-4`}>
                <div className="sm:flex sm:justify-start sm:gap-4">
                  <div className="hidden sm:block sm:shrink-0">
                    <UserImg
                      alt="ML"
                      url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Manan Lodhia
                    </h3>

                    <p className="mt-1 text-xs font-medium text-gray-600">
                      Frontend Developer
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="max-w-[55ch] text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    velit illum provident a, ipsa maiores deleniti consectetur
                    nobis et eaque. amet consectetur adipisicing elit. At velit
                    illum provident a, ipsa maiores deleniti consectetur nobis
                    et eaque.
                  </p>
                </div>

                <dl className="mt-6 flex gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-600">
                      Published
                    </dt>
                    <dd className="text-xs text-gray-500">31st June, 2021</dd>
                  </div>

                  <div className="flex flex-col">
                    <dt className="text-sm font-medium text-gray-600">
                      Reading time
                    </dt>
                    <dd className="text-xs text-gray-500">3 minute</dd>
                  </div>
                </dl>
              </span>
            </div>
          </Section>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
