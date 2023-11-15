import { Footer } from "flowbite-react";

export default function SiteFooter() {
  return (
    <footer className="mx-auto">
      <hr className="mt-6 md:mb-10 border border-gray-300 sm:mx-auto dark:border-border" />

      <Footer bgDark={true}>
        <div className="w-full container">
          <div className="w-full py-6 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="/" src="" alt="runit Logo" />
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-6">
            <div>
              <Footer.Title title="Site Map" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="More Resources" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
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
