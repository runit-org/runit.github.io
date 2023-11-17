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
      <Section cols={1}>
        <h1 className={styles.title}>Section one</h1>
      </Section>
      <Section cols={2}>
        <div>
          <h1 className={styles.title}>Section Two </h1>
        </div>
        <div>
          <h1 className={styles.title}>Col Two</h1>
        </div>
      </Section>
      <Section cols={3}>
        <div>
          <h1 className={styles.title}>Section Two </h1>
        </div>
        <div>
          <h1 className={styles.title}>Col</h1>
        </div>
        <div>
          <h1 className={styles.title}>Three</h1>
        </div>
      </Section>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className="text-blue-500 font-bold">Powered by Tailwind</p>

          <p className={styles.description}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
