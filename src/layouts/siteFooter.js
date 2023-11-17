import { FooterItems } from "@/utilities/navigations";
import { Footer } from "flowbite-react";

export default function SiteFooter() {
  return (
    <footer className="mx-auto">
      <hr className="mt-6 md:mb-10 border border-gray-300 sm:mx-auto dark:border-border" />

      <Footer bgDark={true}>
        <div className="w-full container">
          <div className="w-full py-6 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="/" src="runit.png" alt="runit Logo" />
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-6">
            {FooterItems().map((item, index) => {
              return (
                <div key={index}>
                  <Footer.Title title={item.title} />
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
              <span>All contents &#64; 2022</span>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                {" "}
                runit
              </a>
              <span> All rights reserved.</span>
            </div>
          </div>
        </div>
      </Footer>
    </footer>
  );
}
