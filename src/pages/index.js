import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import { Hero } from "@/layouts/hero";
import { Section } from "@/layouts/section";

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
          <h2 className="block mb-4 text-3xl font-semibold tracking-tight text-secondary sm:text-5xl font-display">
            Events
          </h2>
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
          <h2 className="block mb-4 text-3xl font-semibold tracking-tight text-secondary sm:text-5xl font-display">
            Collaboration
          </h2>
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
          <h2 className="block mb-4 text-3xl font-semibold tracking-tight text-secondary sm:text-5xl font-display">
            Security & Profile
          </h2>
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
      {/*    <Section cols={3}>
        <div>
          <h1>Feature Three </h1>
        </div>
        <div>
          <h1>Col</h1>
        </div>
        <div>
          <h1>Three</h1>
        </div>
      </Section> */}
      <Section cols={1} customStyle={"bg-themeLight p-10 rounded-xl"}>
        <div className="mx-auto">
          <h1 className={styles.title}>
            About <a href="https://nextjs.org">Us</a>
          </h1>

          <Section cols={2}>
            <div>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Julian Tjiong</h3>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>
            </div>

            <div>
              <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}
              >
                <h3>Manan Lodhia</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>
              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </Section>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
