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
      path: "event",
      title: "Events",
      // icons: <span className="font-semibold text-gray-500">AU</span>,
      subNav: [
        {
          path: "event#Browsing-Events",
          title: "Browsing Events",
        },
        {
          path: "event#Event-Suggestions",
          title: "Event Suggestions",
        },
        {
          path: "event#Creating-An-Event",
          title: "Creating An Event",
        },
        {
          path: "event#Joining-An-Event",
          title: "Joining An Event",
        },
        {
          path: "event#Event-Page",
          title: "Event Page",
        },
        {
          path: "event#Writing-Comments",
          title: "Writing Comments",
        },
        {
          path: "event#Viewing-Members",
          title: "Viewing Members",
        },
        {
          path: "event#Managing-Applicants",
          title: "Managing Applicants",
        },
        {
          path: "event#Notifications",
          title: "Notifications",
        },
      ],
    },
    {
      path: "account",
      title: "Account",
      // icons: <span className="font-semibold text-gray-500">AU</span>,
    },
    {
      path: "security",
      title: "Security",
      // icons: <span className="font-semibold text-gray-500">AU</span>,
    },
  ];

  return sidebarNavs;
};
