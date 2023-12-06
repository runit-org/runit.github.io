import Link from "next/link";
import { Button, Dropdown, Navbar } from "flowbite-react";
import { NavigationObj } from "@/utilities/navigations";
import { useRouter } from "next/router";

export default function SiteNavbar() {
  let route = useRouter();

  return (
    <div className="w-full flex justify-center md:sticky top-0 z-50 max-w-full bg-white">
      <Navbar fluid rounded className="container">
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
          <Button
            className="btn-primary"
            as={Link}
            href="http://170.64.220.126:3000/signup"
            target="_blank"
          >
            Sign up
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
