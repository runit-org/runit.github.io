export const NavigationObj = () => {
  const headerItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "People",
      href: "#people",
    },
    /*   {
      name: "Services",
      subNav: [
        {
          name: "Sub 1",
          href: "#",
        },
        {
          name: "Sub 2",
          href: "#",
        },
        {
          name: "Sub 3",
          href: "#",
        },
      ],
      href: "#",
    },
 */
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
          href: `#`,
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
