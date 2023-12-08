import Head from "next/head";
import SiteFooter from "@/layouts/siteFooter";
import style from "@/styles/NotFound.module.scss";
import homeStyle from "@/styles/Home.module.scss";
import { basePath } from "../../next.config";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>runit Help</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <meta name="theme-color" content="#6366f1" />
        <meta name="runit" content="runit Help Centre" />
        <meta property="og:title" content="runit Help" key="title" />
        <meta
          property="og:description"
          content="runit Help Centre"
          key="description"
        />
        <link rel="apple-touch-icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <div
        className={`${homeStyle.container} ${style.hero_wrapper}  ${style.shadow} flex flex-col items-center justify-center`}
      >
        <div className={`${style.notFound} container`}>
          <h1 className="!text-5xl">Page Not Found</h1>
          <p>Whoops! That page doesn't exist.</p>
          <small className="block">Here are some helpful links instead:</small>
          <div className="flex gap-2 justify-center mt-2">
            <Link href="/">Home</Link>
            <Link href="/help/[slug]" as={`/help/event`}>
              Help
            </Link>
            <Link href="http://170.64.220.126:3000/">runit</Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
