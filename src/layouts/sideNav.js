import { SidebarNavs } from "@/utilities/navigations";
import Link from "next/link";
import { useRouter } from "next/router";
import sidebar from "@/styles/Home.module.scss";

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

        <div className="py-4 pr-3">
          <ul className="space-y-2">
            {sidebarNavs.map((item, index) => {
              return (
                <li key={index}>
                  <Link href="/help/[slug]" as={`/help/${item.name}`}>
                    <span
                      className={
                        slug === item.name
                          ? `${style} bg-gray-100 font-semibold text-primary`
                          : style
                      }
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}
