import Head from "next/head";
import SiteFooter from "@/layouts/siteFooter";
import SiteNavbar from "@/layouts/siteNav";
import style from "@/styles/Home.module.scss";
import SideNav from "@/layouts/sideNav";
import { useRouter } from "next/router";

export default function Help() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>runit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNavbar />
      <div
        className={`${style.container} container flex flex-initial flex-row !mt-16`}
      >
        <SideNav />
        <div className="flex-auto w-full pb-16 sm:pb-0">
          <div className={style.content_container}></div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
