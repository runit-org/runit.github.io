import Head from "next/head";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import style from "@/styles/Home.module.scss";
import SideNav from "@/layouts/sideNav";
import Event from "./(event)";
import Account from "./(account)";
import Security from "./(security)";
import { basePath } from "../../../next.config";

export async function getStaticPaths() {
  // Define the possible slugs
  const paths = [
    { params: { slug: "event" } },
    { params: { slug: "account" } },
    { params: { slug: "security" } },
    // Add more params as needed
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
}

export default function Help({ slug }) {
  //render components based on the slug/route
  const getPostComponent = (slug) => {
    switch (slug) {
      case "event":
        return <Event />;
      case "account":
        return <Account />;
      case "security":
        return <Security />;
      default:
        return <div>Not found</div>;
    }
  };

  return (
    <div>
      <Head>
        <title>runit Help - {slug}</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <meta name="theme-color" content="#6366f1" />
        <meta name="runit" content="runit Help Centre" />
        <meta
          property="og:title"
          content={`runit Help - ${slug} `}
          key="title"
        />
        <meta
          property="og:description"
          content="runit Help Centre"
          key="description"
        />
        <link rel="apple-touch-icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <SiteNavbar />
      <div
        className={`${style.container} container flex flex-initial flex-row !mt-16`}
      >
        <SideNav />
        <div className="flex-auto w-full pb-16 sm:pb-0">
          <div className={style.content_container}>
            {getPostComponent(slug)}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
