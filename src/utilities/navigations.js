import { basePath } from "../../next.config";

export const NavigationObj = () => {
  const headerItems = [
    {
      name: "About",
      href: `${basePath}/#about`,
    },
    {
      name: "People",
      href: `${basePath}/#people`,
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
          href: `http://170.64.220.126:3000/signup`,
        },
        {
          name: "runit.github.io",
          href: basePath,
        },
      ],
    },
    {
      title: "Contact Julian",
      contents: [
        {
          name: "Github",
          href: "https://github.com/juliantjg",
        },
        {
          name: "Email",
          href: `mailto:juliantj88@gmail.com`,
        },
      ],
    },
    {
      title: "Contact Manan",
      contents: [
        {
          name: "Github",
          href: "https://github.com/mananlodhia1",
        },
        {
          name: "Email",
          href: `mailto:mananlodhia@hotmail.com`,
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
      subNav: [
        {
          path: "account#Profile",
          title: "Profile",
        },
        {
          path: "account#Calendar",
          title: "Calendar",
        },
        {
          path: "account#View-List-of-Starred-Users",
          title: "Starred Users",
        },
        {
          path: "account#Giving-Stars",
          title: "Giving Stars",
        },
        {
          path: "account#Sending-Feedback",
          title: "Sending Feedback",
        },
      ],
      // icons: <span className="font-semibold text-gray-500">AU</span>,
    },
    {
      path: "security",
      title: "Security",
      subNav: [
        {
          path: "security#Change-Password",
          title: "Change Password",
        },
        {
          path: "security#Unverified-Account-Restricted-Access",
          title: "Unverified Accounts",
        },
        {
          path: "security#Verifying-Account",
          title: "Verifying Accounts",
        },
      ],
      // icons: <span className="font-semibold text-gray-500">AU</span>,
    },
  ];

  return sidebarNavs;
};
