import Head from "next/head";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import style from "@/styles/Home.module.scss";
import SideNav from "@/layouts/sideNav";
import { useRouter } from "next/router";
import Event from "./(event)";
import Account from "./(account)";
import Security from "./(security)";

export default function Help() {
  const router = useRouter();
  const { slug } = router.query;

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
        <title>runit Help - {slug} </title>
        <link rel="icon" href="/favicon.ico" />
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
