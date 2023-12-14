import { FooterItems } from "@/utilities/navigations";
import { Footer } from "flowbite-react";
import { basePath } from "../../next.config";
import packageJson from "../../package.json";

export default function SiteFooter() {
  return (
    <footer className="mx-auto">
      <hr className="mt-6 md:mb-10 border border-gray-300 sm:mx-auto dark:border-border" />

      <Footer bgDark={true}>
        <div className="w-full container">
          <div className="w-full py-4 px-5 sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="/"
              src={`${basePath}/runit.png`}
              alt="runit Logo"
            />
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4 px-6 max-w-screen-lg">
            {FooterItems().map((item, index) => {
              return (
                <div key={index}>
                  <Footer.Title title={item.title} className="!mb-2" />
                  <Footer.LinkGroup col={true}>
                    {item.contents.map((contents, index2) => {
                      return (
                        <Footer.Link
                          key={index2}
                          href={contents.href}
                          target="_blank"
                        >
                          {contents.name}
                        </Footer.Link>
                      );
                    })}
                  </Footer.LinkGroup>
                </div>
              );
            })}
          </div>
          <div className="copyright_wrapperw-full py-6 px-4 mt-5 sm:flex sm:items-center sm:justify-between">
            <div className="text-gray-500 text-sm">
              <span>All contents &#64; {new Date().getFullYear()}</span>{" "}
              <a
                href={basePath}
                target="_blank"
                rel="noreferrer"
                className="!text-primary"
              >
                runit
              </a>
              <span> All rights reserved.</span>
            </div>
            <span className="text-gray-500 text-sm">
              v{packageJson.version}
            </span>
          </div>
        </div>
      </Footer>
    </footer>
  );
}
