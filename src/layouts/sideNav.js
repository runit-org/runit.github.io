import { SidebarNavs } from "@/utilities/navigations";
import Link from "next/link";
import { useRouter } from "next/router";
import sidebar from "@/styles/Home.module.scss";
import { Sidebar } from "flowbite-react";

export default function SideNav() {
  const router = useRouter();
  const { slug } = router.query;
  const sidebarNavs = SidebarNavs();

  const style =
    "ml-2 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 transition-all";

  return (
    <div className="w-2/12 hidden lg:block border-r border-gray-200 text-start">
      <aside className={sidebar.sidebar} aria-label="Sidebar">
        <h1 className="text-3xl font-bold ml-1 p-2">Help Centre</h1>
        <Sidebar>
          {sidebarNavs.map((item, index) => {
            return (
              <Sidebar.Items key={index}>
                <Sidebar.ItemGroup>
                  {item.subNav ? (
                    <Sidebar.Collapse label={item.title}>
                      {item.subNav.map((subnav, j) => {
                        return (
                          <Link
                            key={j}
                            href="/help/[slug]"
                            as={`/help/${subnav.path}`}
                            className={
                              router.asPath === `/help/${subnav.path}`
                                ? `${style} bg-gray-100 font-semibold text-primary !pl-10 p-1`
                                : `${style} !pl-10 p-1`
                            }
                          >
                            {subnav.title}
                          </Link>
                        );
                      })}
                    </Sidebar.Collapse>
                  ) : (
                    <Sidebar.Item
                      className={
                        slug === item.path
                          ? `${style} bg-gray-100 font-semibold text-primary`
                          : style
                      }
                      href={`/help/${item.path}`}
                    >
                      {item.title}
                    </Sidebar.Item>
                  )}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            );
          })}
        </Sidebar>
      </aside>
    </div>
  );
}
