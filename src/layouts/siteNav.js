"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function SiteNavbar() {
  return (
    <div className="w-full container mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="runit Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
