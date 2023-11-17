import Link from "next/link";
import { Dropdown, Navbar } from "flowbite-react";
import { NavigationObj } from "@/utilities/navigations";
import { useRouter } from "next/router";

export default function SiteNavbar() {
  let route = useRouter();
  return (
    <div className="w-full container mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <img src="/runit.png" className="mr-3 h-6 sm:h-9" alt="runit Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {NavigationObj().map((item, index) => {
            return (
              <Navbar.Link key={index} href={item.href}>
                {item.subNav ? (
                  <Dropdown arrowIcon={true} inline={true} label={item.name}>
                    {item.subNav.map((sub, i) => {
                      return (
                        <Dropdown.Item
                          key={i}
                          onClick={() => {
                            route.push(sub.href);
                          }}
                        >
                          {sub.name}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown>
                ) : (
                  item.name
                )}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
