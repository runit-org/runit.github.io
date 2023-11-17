export const NavigationObj = () => {
  const headerItems = [
    /*    {
      name: "Creative Tools",
      subNav: [
        {
          name: "Social Image Creator ",
          href: `/${IMAGE_GENERATOR}/Analysis-Articles`,
        },
        { name: "Email Image Creator ", href: `/${EMAIL_IMAGE_GENERATOR}` },
        {
          name: "Youtube Thumbnail Creator ",
          href: `/${YT_THUMBNAIL_CREATOR}`,
        },
      ],
    }, */
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Services",
      href: "#",
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
          name: "Flowbite",
          href: `#`,
        },
        {
          name: "Tailwind CSS",
          href: `#`,
        },
      ],
    },
    {
      title: "MORE RESOURCES",
      contents: [
        {
          name: "Github",
          href: "#",
        },
        {
          name: "Discord",
          href: `#`,
        },
      ],
    },
    {
      title: "Contact Us",
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
  ];

  return footerItems;
};
