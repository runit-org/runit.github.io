import { Footer } from "flowbite-react";
import styles from "../styles/Home.module.scss";

export default function SiteFooter() {
  return (
    <div
      className={`${styles.footer} px-4 lg:px-14 md:py-2.5 max-w-7xl mx-auto`}
    >
      <div className="p-0 md:px-4 py-0">
        <hr className="mt-6 md:mb-10 border border-gray-300 sm:mx-auto dark:border-border" />
      </div>
      <Footer bgDark={true}>
        <div className="w-full container">
          <div className="w-full py-6 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="/"
              src="/gom-logo.svg"
              alt="Go Marketing Logo"
            />
          </div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-6">
            <div>
              <Footer.Title title="Site Map" />
              <Footer.LinkGroup col={true}>
                <a
                  href="https://gom.digital/image-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  Social Image Creator
                </a>
                <a
                  href="https://gom.digital/email-image-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email Image Creator
                </a>
                <a
                  href="https://gom.digital/youtube-thumbnail-creator"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube Image Creator
                </a>
                <a href="category/go-changelog">Changelog</a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="More Resources" />
              <Footer.LinkGroup col={true}>
                <a
                  href="https://lp.gomarkets.com/brand/GO-Markets-Brand-Guidelines.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Branding Guidelines
                </a>
                <a
                  href="https://gomarkets.atlassian.net/wiki/spaces/BRAN/overview"
                  target="_blank"
                  rel="noreferrer"
                >
                  Logo Packs
                </a>
                <a
                  href="https://app.asana.com/0/1200212572459710/board"
                  target="_blank"
                  rel="noreferrer"
                >
                  Asana Board
                </a>
                <a
                  href="https://gomarkets.atlassian.net/wiki/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Confluence
                </a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col={true}>
                <a href="https://gom.digital/" target="_blank" rel="noreferrer">
                  Email
                </a>
              </Footer.LinkGroup>
            </div>
          </div>
          <div
            className={`${styles.copyright_wrapper} w-full py-6 px-4 mt-5 sm:flex sm:items-center sm:justify-between`}
          >
            <div className="text-gray-500 text-sm">
              <span>All contents &#64; 2022</span>
              <a
                href="https://www.gomarkets.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                {" "}
                GO Markets.
              </a>
              <span> All rights reserved.</span>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
