import { SidebarNavs } from "@/utilities/navigations";
import Link from "next/link";
import { useRouter } from "next/router";
import sidebar from "@/styles/Home.module.scss";

export default function SideNav() {
  const router = useRouter();
  const { help } = router.query;
  const sidebarNavs = SidebarNavs();

  const style =
    "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 transition-all";

  return (
    <div className="w-2/12 hidden lg:block border-r border-gray-200 text-start">
      <aside className={sidebar.sidebar} aria-label="Sidebar">
        <h1 className="text-3xl font-bold ml-1 p-2">Help Center</h1>

        <div className="py-4 pr-3">
          <ul className="space-y-2">
            {sidebarNavs.map((item, index) => {
              return (
                <li key={index}>
                  <Link href="/help/[help]" as={`/help/${item.name}`}>
                    <a
                      className={
                        help === item.name
                          ? `${style} bg-gray-100 font-semibold text-primary`
                          : style
                      }
                    >
                      {/* {item.icons} */}

                      <span className="ml-3">{item.title}</span>
                    </a>
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
