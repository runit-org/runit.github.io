export const NavigationObj = () => {
  const headerItems = [
    /*  {
      name: "Home",
      href: "/",
    }, */
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "People",
      href: "/#people",
    },
    {
      name: "Help",
      subNav: [
        {
          name: "Event",
          href: "/help/event",
        },
        {
          name: "Account",
          href: "/help/account",
        },
        {
          name: "Security",
          href: "/help/security",
        },
      ],
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  return headerItems;
};

export const FooterItems = () => {
  const footerItems = [
    {
      title: "SITE MAP",
      contents: [
        {
          name: "runit",
          href: `#`,
        },
        {
          name: "runit.github.io",
          href: `/`,
        },
      ],
    },
    {
      title: "More Resocures",
      contents: [
        {
          name: "Privacy Policy",
          href: `#`,
        },
        {
          name: "Terms & Conditions",
          href: `#`,
        },
      ],
    },
    {
      title: "Contact Us",
      contents: [
        {
          name: "Github",
          href: "#",
        },
        {
          name: "Email",
          href: `#`,
        },
      ],
    },
  ];

  return footerItems;
};

export const SidebarNavs = () => {
  const sidebarNavs = [
    {
      name: "event",
      title: "Event",
      icons: <span className="font-semibold text-gray-500">AU</span>,
    },
    {
      name: "account",
      title: "Account",
      icons: <span className="font-semibold text-gray-500">AU</span>,
    },
    {
      name: "security",
      title: "Security",
      icons: <span className="font-semibold text-gray-500">AU</span>,
    },
  ];

  return sidebarNavs;
};
